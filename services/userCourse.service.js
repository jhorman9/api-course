const usersCourse = require("../models/users-courses.model"); 

class UserCourseServices {
  static async create(createNew) {
    try {
      const result = await usersCourse.create(createNew);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserCourseServices;