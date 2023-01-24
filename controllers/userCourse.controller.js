const UserCourseServices = require("../services/userCourse.service");

const createCourseToUser = async (req, res) => {
    try {
        const createNew = req.body;
        const result = await UserCourseServices.create(createNew);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createCourseToUser
};