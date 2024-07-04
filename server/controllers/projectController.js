const Project = require("../models/projectModel");

//displaying all projects
module.exports.projects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//adding proejcts
module.exports.addprojects = async (req, res, next) => {
  const { projectName, projectType, members, projectStatus } = req.body;

  try {
    const project = await Project.create({
      projectName,
      projectType,
      members,
      projectStatus,
    });
    res.json(project);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// app.post("/addprojects", async (req, res) => {});
// app.get("/projects", async (req, res) => {});
// app.get("/projectsbyid/:id", async (req, res) => {});
// app.delete("/deleteprojects/:id", async (req, res) => {});
// app.put("/updateprojects/:id", async (req, res) => {});

module.exports.projectbyid = async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    res.json(project);
    next();
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.deleteproject = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleteProject = await Project.findByIdAndDelete(id);
    if (!deleteProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(deleteProject);
    next();
  } catch (error) {
    console.error("Error deleting project", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.updateprojects = async (req, res, next) => {
  const id = req.params.id;
  const { projectName, projectType, members, projectStatus } = req.body;
  const updatedData = { projectName, projectType, members, projectStatus };

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.json({ message: "Project updated successfully", updatedProject });
    next();
  } catch (error) {
    console.error("Error updating project", error);
    res.status(500).json({ error: "Server error" });
  }
};
