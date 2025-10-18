# Webapp 

**Curso:** Docker & Kubernetes - Clase 7 
**Estudiante:** Ebert Castillo Cortez 

## Objetivo

Aplicar los conceptos de Namespaces, ConfigMaps, Secrets y StatefulSets desplegando PostgreSQL con persistencia en Kubernetes.

Nota importante: Esta tarea se enfoca en los conceptos de Kubernetes, NO en desarrollo de aplicaciones. Usarás imágenes pre-construidas.

## Namespace dedicado

![Imagen de contenedor descargada](screenshots/1.png)

## ConfigMap para configuración no sensible

![Imagen de contenedor descargada](screenshots/2.png)

## Secret para credenciales

![Imagen de contenedor descargada](screenshots/3.png)



## StatefulSet con persistencia (PVC)  -- Headless Service para acceso interno

![Imagen de contenedor descargada](screenshots/5.png)

![Imagen de contenedor descargada](screenshots/6.png)


## Probar PostgreSQL

** kubectl exec -it postgres-0 -- psql -U admin -d mibasedatos

CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    carrera VARCHAR(100)
);

INSERT INTO estudiantes (nombre, carrera) VALUES
    ('Juan Perez', 'Ingeniería de Sistemas'),
    ('Maria Lopez', 'Ingeniería de Sistemas'),
    ('Carlos Gomez', 'Ingeniería de Sistemas');

SELECT * FROM estudiantes;
\q

![Imagen de contenedor descargada](screenshots/7.png)

## Demostrar persistencia

kubectl delete pod postgres-0
kubectl get pods -w 

![Imagen de contenedor descargada](screenshots/8.png)

![Imagen de contenedor descargada](screenshots/9.png)