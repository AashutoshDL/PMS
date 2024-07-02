const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Project = require("../server/models/projectModel");

dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const URL = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@pms.7s7kbw4.mongodb.net/PMS`;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); // Connect to MongoDB when app starts

app.use(express.json()); // Body parser middleware
app.use(cors(corsOptions)); // CORS middleware

app.post('/', async (req, res) => {
  console.log("HELLO SERVER");
  res.send("Hello, server!");
});

app.post("/addprojects", async (req, res) => {
  const {
    projectName,
    projectType,
    members,
    projectStatus,
  } = req.body;

  try {
    const project = await Project.create({
      projectName,
      projectType,
      members,
      projectStatus,
    });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/projectsbyid/:id",async(req,res)=>{
  const id=req.params.id;
  try{
    const project=await Project.findById(id)
    res.json(project)
  }catch(error){
    console.error("Error fetching data",error)
    res.status(500).json({error:'Internal server error'})
  }
})

app.delete("/deleteprojects/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProject = await Project.findByIdAndDelete(id);
    if (!deleteProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(deleteProject);
  } catch (error) {
    console.error("Error deleting project", error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.put("/updateprojects/:id", async (req, res) => {
  const id = req.params.id;
  const { projectName, projectType, members, projectStatus } = req.body;
  const updatedData={projectName, projectType, members, projectStatus}

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.json({ message: "Project updated successfully", updatedProject });
  } catch (error) {
    console.error("Error updating project", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
