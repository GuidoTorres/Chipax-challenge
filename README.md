# Chipax-challenge

Esta es la solución al reto Rick y Morty, en la cual había que realizar un contador de caracteres
de cada uno de los endpoints de la API de Rick y Morty, además generar un listado con la
ubicación de cada personaje, en base a cada uno de los episodios. Estas ubicaciones no deben repetirse.

## Contenido

El proyecto esta realizado en:

- [Node.js](https://nodejs.org/es/)
- [express.js](https://expressjs.com/es/)

## Programas necesarios

Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:

- [Nodejs](https://nodejs.org/es/download/) v12.18.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [PostMan](https://www.postman.com/downloads/) para puebas de APIS. (Opcional)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Como Clonar

Comando para clonar:

```bash
cd existing_folder
git clone https://github.com/GuidoTorres/Chipax-challenge

```

## Intalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

### Run en LocalHost:

- Una vez instaladas las dependencias el servidor se levanta de manera local con el comando:

```bash
cd aplicacion node js
npm run dev
```

### Run en LocalHost:

- Los test se realizan con jest y el comando para hacer los test es:

```bash
npx jest
```

### Heroku deploy:

- La solución se encuentra deployada en Heroku para acceder al endpoint se utiliza la siguiente ruta :

```
https://chipaxx.herokuapp.com/api/v1
```

