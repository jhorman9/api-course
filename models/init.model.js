const Users = require('./users.model');
const Categories = require('./categories.model');
const Courses = require('./courses.model');
const Videos = require('./videos.model');
const UsersCourses = require('./users-courses.model');

const initModels = () => {

    UsersCourses.belongsTo(Users, { as: "author", foreignKey: "user_id" });
    Users.hasMany(UsersCourses, { as: "user_course", foreignKey: "user_id" });

    UsersCourses.belongsTo(Courses, {as: "user_course",foreignKey: "course_id"});
    Courses.hasMany(UsersCourses, { as: "courses", foreignKey: "course_id" });

    Categories.belongsTo(Courses, { as: "category", foreignKey: "course_id" });
    Courses.hasMany(Categories, { as: "categories", foreignKey: "course_id" });

    Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
    Courses.hasMany(Videos, { as: "videos", foreignKey: "course_id" });

  };

module.exports = initModels;
