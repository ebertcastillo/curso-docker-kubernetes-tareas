# Microservicios con Cache y Gateway

## Descripción

**Nombre del proyecto:** dockerMicroserviciosEbertCastilloCortez 
**Descripción:** Aplicación de blog con microservicios, usando Redis como cache, MongoDB como base de datos, Node.js como backend, Nginx como gateway y frontend estático.  
**Tecnologías utilizadas:** Docker, Docker Compose, Node.js, Express, Redis, MongoDB, Nginx, HTML.

---

## Servicios

| Servicio  | Tecnología | Puerto | Descripción                    |
|-----------|------------|--------|--------------------------------|
| gateway   | Nginx      | 8080   | API Gateway                    |
| backend   | Node.js    | 5000   | API de posts                   |
| redis     | Redis      | 6379   | Cache de posts                 |
| db        | MongoDB    | 27017  | Base de datos                  |
| frontend  | Nginx      | 80     | Interfaz web estática          |

## Creamos el Proyecto Clase 4

![Imagen de contenedor descargada](screenshots/1.png)

![Imagen de contenedor descargada](screenshots/2.png)



## Levantamos servicios 

![Imagen de contenedor descargada](screenshots/3.png)

![Imagen de contenedor descargada](screenshots/4.png)



## Verificamos los navegadores

![Imagen de contenedor descargada](screenshots/5.png)

![Imagen de contenedor descargada](screenshots/6.png)

![Imagen de contenedor descargada](screenshots/7.png)


## Logs

![Imagen de contenedor descargada](screenshots/9.png)

![Imagen de contenedor descargada](screenshots/10.png)

## Pruebas 

![Imagen de contenedor descargada](screenshots/11.png)

![Imagen de contenedor descargada](screenshots/12.png)


