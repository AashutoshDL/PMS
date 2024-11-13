const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/projects", projectController.projects);
router.get("/getprojectbyid/:id", projectController.projectbyid);
router.post("/addprojects", projectController.addprojects);
router.delete("/deleteproject/:id", projectController.deleteproject);
router.put("/updateprojects", projectController.updateprojects);

module.exports = router;
