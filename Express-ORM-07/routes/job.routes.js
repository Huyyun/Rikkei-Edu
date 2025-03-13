const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/job.controllers");

// GET ALL
router.get("/", controller.getAllJobs);

// GET ONE
router.get("/:id", controller.getOneJob);

// CREATE JOB (POST)
router.post("/", controller.createJob);

// UPDATE JOB (PUT)
router.put("/:id", controller.updateJob);

// DELETE JOB (DELETE)
router.delete("/:id", controller.deleteJob);

module.exports = router;