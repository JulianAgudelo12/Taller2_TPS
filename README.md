# 🧑‍💻 Taller #2 - Tópicos de Software: Express Pokeneas

¡Bienvenido a **Express Pokeneas**!  
Esta es una aplicación sencilla construida con **Node.js** y **Express** que expone endpoints para consultar información de diferentes “Pokéneas” (Pokémon personalizados). El proyecto sigue buenas prácticas de organización de código (MVC simplificado) y está listo para ejecutarse tanto en desarrollo local como en producción, usando Docker y Docker Swarm 🚀.

---

## ✨ Características principales

- 📡 Endpoints para obtener datos aleatorios o específicos de Pokéneas en formato JSON.
- 📦 Organización clara de archivos y rutas.
- 🐳 Despliegue listo para producción con Docker y Docker Swarm.
- 🤖 Construcción y publicación automática de la imagen Docker con GitHub Actions.

---

## 🧰 Requisitos previos para ejecución local

- [Node.js](https://nodejs.org/) (para desarrollo local)
- [Docker](https://docs.docker.com/get-docker/) (para contenedores locales o en la nube)

---

## 📁 Estructura del proyecto

La aplicación sigue una estructura clara y modular para facilitar el mantenimiento y la escalabilidad:

```

Taller2_TPS/
├── .github/                  # Workflows de GitHub Actions
├── node_modules/             # Dependencias de Node.js
├── public/                   # Archivos públicos/estáticos (imágenes, CSS, JS)
├── src/                      # Código fuente principal
│   ├── controllers/          # Controladores de lógica para API y vistas
│   │   ├── pokeneaApiController.js
│   │   └── viewController.js
│   ├── models/               # Definición de modelos de datos
│   │   ├── Pokeneas.js
│   │   └── pokeneasData.js
│   ├── routes/               # Definición de rutas Express
│   │   ├── pokeneas.js       # Rutas para API y vistas (se recomienda separar)
│   ├── utils/                # Funciones utilitarias compartidas
│   │   └── random.js
│   ├── views/                # Vistas EJS
│   │   └── index.ejs
│   └── app.js                # Punto de entrada de la aplicación
├── .env                      # Variables de entorno (local)
├── .env.example              # Plantilla de variables de entorno
├── .gitignore                # Archivos ignorados por Git
├── Dockerfile                # Configuración para contenedor Docker
├── package.json              # Dependencias, scripts y metadatos del proyecto
├── package-lock.json         # Versión exacta de dependencias instaladas
└── README.md                 # Documentación general del proyecto


```

---

## ▶️ Ejecución local

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/JulianAgudelo12/Taller2_TPS.git
   cd Taller2_TPS

2. **Instala dependencias:**

   ```bash
   npm install
   ```

3. **Inicia la aplicación:**

   ```bash
   npm start
   ```

   o directamente:

   ```bash
   node src/app.js
   ```

4. **Accede a la API** en tu navegador, Postman o Curl:

   * Pokénea aleatorio: [http://localhost:80/pokeneas-json](http://localhost:80/pokeneas-json) (Formato JSON)
   * Frase con imágen Pokénea aleatoria [http://localhost:80/pokeneas-phrase](http://localhost:80/pokeneas-phrase) (Vista)

---

## ☁️ Despliegue en AWS EC2 con Docker Swarm

> ⚙️ **Nota:** La imagen Docker se construye y actualiza automáticamente en Docker Hub a través de GitHub Actions cada vez que hay cambios en el repositorio.

1. **Lanza una instancia EC2** (Ubuntu o Amazon Linux recomendado).

2. **Abre el puerto 80 en el Security Group** de tu instancia para permitir acceso externo.

3. **Instala Docker en la instancia:**

   ```bash
   sudo apt-get update
   sudo apt-get install -y docker.io
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

4. **Inicializa Docker Swarm** (si aún no lo has hecho):

   ```bash
   sudo docker swarm init
   ```

5. **Despliega el servicio usando la imagen de Docker Hub:**

   ```bash
   sudo docker service create --name pokeneas --replicas 3 -p 80:80 jac1234desu/express-pokeneas:latest
   ```

   * Esto lanzará 3 réplicas de la aplicación y la expondrá en el puerto 80 del host.
   * Puedes ajustar la cantidad de réplicas y el puerto según tu necesidad.

6. **Verifica el estado del servicio:**

   ```bash
   sudo docker service ls
   sudo docker service ps pokeneas
   ```

7. **Accede a la API desde tu navegador:**
   [http://\<IP\_PUBLICA\_DE\_TU\_EC2>/api/pokeneas/random](http://<IP_PUBLICA_DE_TU_EC2>/api/pokeneas/random)

---

## 👨‍💻 Autores

* **Julián Agudelo Cifuentes**
* **Valeria Corrales Hoyos**

---

¡Gracias por usar Express Pokeneas!
