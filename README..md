## Incializando el proyecto integrador parte 4
```sh
touch server.js && npm init -y && npm i express dotenv mongoose && npm i nodemon -D
```
## Creando carpetas del proyecto
```sh
mkdir controllers models constants utils routers middlewares
```
## Modificamos el package json
```sh

  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  }

```

Hacemos el restore del dump () local en la base remota 
```sh
mongosh "mongodb+srv://cluster0.fn2znbc.mongodb.net/" --apiVersion 1 --username zdfasfds --nsInclude integrador_etapa_4.* dump
mongoexport convierte de json a documento
```
Investigar:
MONGODB tools instalarlo y elegir msi
https://www.mongodb.com/docs/database-tools/
Herramientas administrativas
El problema de cors, surge ya que estamos haciendo peticiones de la url del back desde la de front
Para poder solucionar el problema de cores vamos a usar una libreria llamada cores
npm i cors