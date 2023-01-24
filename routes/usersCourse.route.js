const { Router } = require("express");

const { createCourseToUser } = require("../controllers/userCourse.controller");

const router = Router();

router.post("/coursestouser", createCourseToUser);

module.exports = router;
