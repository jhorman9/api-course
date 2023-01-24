const { Router } = require("express");
const {
  getAllCourse,
  getCourseWithCategoryAndVideo,
  createCourse,
  updateCourse,
} = require("../controllers/courses.controller");

const router = Router();

router.get("/courses", getAllCourse);
router.get("/courses/all", getCourseWithCategoryAndVideo);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);

module.exports = router;
