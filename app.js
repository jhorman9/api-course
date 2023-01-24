const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const userRoutes = require("./routes/users.route");
const CoursesRoutes = require("./routes/courses.route");
const CategoriesRoutes = require("./routes/categories.route");
const VideosRoutes = require("./routes/videos.route");
const userCourse = require("./routes/usersCourse.route");

const app = express();

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

app.use(express.json());

db.sync({ force: false }) //devuelve una promesa // No existe la tabla la creo con alter
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.end("hola, bienvenido al servidor");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", CoursesRoutes);
app.use("/api/v1", CategoriesRoutes);
app.use("/api/v1", VideosRoutes);
app.use("/api/v1", userCourse);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
