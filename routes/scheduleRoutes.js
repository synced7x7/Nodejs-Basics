const express = require("express");
const router = express.Router();
const scheduleCtrl = require("../controllers/scheduleController");

router.post("/", scheduleCtrl.scheduleWorkout);

module.exports = router;
