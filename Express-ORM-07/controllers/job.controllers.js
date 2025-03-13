const db = require("../config/database");
const jobService = require('../services/job.services');

module.exports.getAllJobs = async function (req, res) {
    try {
        let jobs = await jobService.getAllJobs();
        res.json({
            message: "GET ALL JOBS SUCCESSFULLY",
            jobs,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getOneJob = async function (req, res) {
    try {
        let jobs = await jobService.getOneJob(req);
        res.json({
            message: "GET ALL JOBS SUCCESSFULLY",
            jobs,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.createJob = async function (req, res) {

};

module.exports.updateJob = async function (req, res) {

};

module.exports.deleteJob = async function (req, res) {

};