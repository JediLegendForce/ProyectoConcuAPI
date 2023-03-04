const express = require("express");
const router = express.Router();

const employeeController = require("../Controller/employeeController");

router.get("/", employeeController.getEmployees);

module.exports = router;