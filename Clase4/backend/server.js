import express from "express";
import mongoose from "mongoose";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/blog";
await mongoose.connect(mongoUrl);
const Post = mongoose.model("Post", new mongoose.Schema({
  title: String,
  content: String
}));

const redisClient = createClient({ url: `redis://${process.env.REDIS_HOST || 'localhost'}:6379` });
await redisClient.connect();

// Health
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Listar posts (cache)
app.get("/api/posts", async (req, res) => {
  const cache = await redisClient.get("posts");
  if (cache) {
    console.log("✅ Cache HIT");
    return res.json({ source: "cache", data: JSON.parse(cache) });
  }
  console.log("❌ Cache MISS");
  const posts = await Post.find();
  await redisClient.set("posts", JSON.stringify(posts));
  res.json({ source: "database", data: posts });
});

// Ver un post
app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const cacheKey = `post:${id}`;
  const cache = await redisClient.get(cacheKey);
  if (cache) return res.json({ source: "cache", data: JSON.parse(cache) });

  const post = await Post.findById(id);
  if (!post) return res.status(404).json({ error: "Not found" });

  await redisClient.set(cacheKey, JSON.stringify(post));
  res.json({ source: "database", data: post });
});

// Crear post (invalida cache)
app.post("/api/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  await redisClient.del("posts");
  res.json({ message: "Post creado", post });
});

app.listen(5000, () => console.log("Backend listo en puerto 5000"));
