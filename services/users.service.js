const Courses = require("../models/courses.model");
const UsersCourses = require("../models/users-courses.model");
const Users = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ["password", "update_at", "created_at"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourse(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["updatedAt", "createdAt", "password"],
        },
        include: {
          model: UsersCourses,
          as: "user_course",
          attributes: {
            exclude: [
              "updatedAt",
              "createdAt",
              "userId",
              "courseId",
              "user_id",
              "course_id",
            ],
          },
          include: {
            model: Courses,
            as: "user_course",
            attributes: {
              exclude: ["updatedAt", "createdAt"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(field, id) {
    try {
      const result = Users.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Users.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
