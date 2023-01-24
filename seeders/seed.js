const db = require("../utils/database");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users-courses.model");
const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

const users = [
  {
    firstName: "Jhorman",
    lastName: "Nieto",
    username: "Jhorman9",
    password: "1234",
    email: "Jhorman@hotmail.com",
  }, //1
  {
    firstName: "Luis",
    lastName: "Cantillo",
    username: "LuisCanty76",
    password: "1234",
    email: "LuisCanty75694@hotmail.com",
  }, //2
  {
    firstName: "Steven",
    lastName: "Alvarado",
    username: "AlvaradoS",
    password: "1234",
    email: "StevAlvarado20@hotmail.com",
  }, //3
];

const usersCourses = [
  { userId: 1, courseId: 2 },
  { userId: 2, courseId: 2 },
  { userId: 2, courseId: 2 },
  { userId: 1, courseId: 1 },
];

const courses = [
  {
    title: "Matandome con las relaciones",
    description: "Las relaciones enredan",
    instructor: "Er profe",
  }, //1
  {
    title: "Me voa morel",
    description: "'ta potente",
    instructor: "Er Teacher",
  }, //2
  {
    title: "Deojmeo",
    description: "Sigue potente la situacion",
    instructor: "Er Profeishor",
  }, //3
  {
    title: "Gueno cuej",
    description: "Veamos si funciona",
    instructor: "Er Ian",
  }, //4
];

const categories = [
  { name: "potente", courseId: 1 },
  { name: "fuerte", courseId: 2 },
  { name: "refuerte", courseId: 3 },
  { name: "recotrafuerte", courseId: 4 },
];

const videos = [
  {
    title: "El node en las suyas",
    url: "www.elnodeenlassuyas.es",
    courseId: 1,
  },
  { title: "Veamos la moricion", url: "www.lamoricion.es", courseId: 2 },
  {
    title: "Pidamosle a diosito que salga bien",
    url: "www.deojmeoaiuda.es",
    courseId: 3,
  },
  { title: "potente, potente", url: "www.potenciaarterial.es", courseId: 4 },
];

db.sync({ force: true }).then(() => {
  console.log("Iniciando con el sembradio");
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    usersCourses.forEach((userCourse) => UsersCourses.create(userCourse));
  }, 150);
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 350);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 300);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 400);
});
