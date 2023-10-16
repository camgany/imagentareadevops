# TAREA CONTAINERS - CERTIFICACION DEVOPS 📲💻📲💻📲💻
## Camila Grandy Camacho
## 56784
### Para esta tarea se utilizo react para la aplicacion web, y para la base de datos se utilizo MySQL
### Para instalar y levantar todo con el docker-compose, se debe ejecutar el siguiente comando:
```
docker-compose up  
```
### Para acceder a la aplicacion web, se debe ingresar a la siguiente direccion:
```
http://localhost:3000/
```
### Para acceder a la base de datos, se debe ingresar por otra terminal al contenedor de la base de datos:
```
docker exec -it mysqlcontainer bash
``` 
### Luego, se debe ingresar a la base de datos:
```
mysql -u root -p
```
### Y por ultimo, se debe ingresar la contraseña:
```
password = pass123
```
### La aplicacion web se trata de un formulario de registro de creadores de contenido, donde se debe ingresar el nombre, nombre del canal, cantidad de suscriptores y el video mas visto. Luego, se debe presionar el boton de "Enviar" para que se guarde la informacion en la base de datos.
```
http://localhost:3000/
```
## Para instalar y levantar todo con el docker-compose, se debe ejecutar el siguiente comando:
```
docker-compose up 
```
## Para la aplicacion se instalaron las siguientes dependencias:
```
npx create-react-app imagentareadevops
npm install react-router-dom
npm install axios
npm install mysql
npm install cors
npm install express
npm install material-ui
npm install @material-ui/icons
```

## Para la base de datos se utilizo MySQL, y se creo una tabla llamada "creadores" con los siguientes campos:
```
id INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
canal VARCHAR(100) NOT NULL,
suscriptores INT NOT NULL,
video VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
```
## Para la base de datos se instalaron las siguientes dependencias:
```
npm install mysql
npm install cors
npm install express
```
## Para la aplicacion web se utilizo React, y se creo una pagina llamada "Formulario" con los siguientes campos:
```
Nombre
Nombre del canal
Cantidad de suscriptores
Video mas visto
```
### Se decidio utilizar React porque es una libreria de JavaScript que permite crear interfaces de usuario de forma sencilla. Ademas, permite crear componentes reutilizables, lo que facilita el desarrollo de la aplicacion. Por ultimo, permite crear aplicaciones SPA (Single Page Application), lo que permite que la aplicacion sea mas rapida y eficiente.

### Se decidio utilizar MySQL porque es un sistema de gestion de bases de datos relacional, que permite almacenar y recuperar datos de forma eficiente. Ademas, es un sistema de codigo abierto, lo que permite que sea gratuito y que tenga una gran comunidad de desarrolladores que lo utilizan.

### Se decidio hacer un formulario de registro de creadores de contenido, porque es una aplicacion que se puede utilizar en la vida real, y que puede ser util para muchas personas. Ademas, es una aplicacion sencilla, que permite aprender a utilizar React y MySQL de forma rapida y eficiente.