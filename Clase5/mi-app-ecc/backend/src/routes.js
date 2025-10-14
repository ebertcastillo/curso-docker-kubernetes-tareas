const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'mi-app funcionando', uptime: process.uptime() });
});

router.get('/info', (req, res) => {
  res.json({
    app: 'mi-app-optimizada',
    node_env: process.env.NODE_ENV || 'development',
    db: process.env.MONGO_URI ? 'configurada' : 'no configurada'
  });
});

module.exports = router;
