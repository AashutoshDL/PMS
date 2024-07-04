const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const projectController = require("./controllers/projectController");

dotenv.config();
const app = express();

const corsOptions = {
  origin: `${process.env.frontend_url}`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Acess-Control-Allow-Origin",
  ],
};

const URL = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@pms.7s7kbw4.mongodb.net/PMS`;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

//project routes
app.get("/api/projects", projectController.projects);
app.post("/api/addprojects", projectController.addprojects);
app.get("/api/getprojectbyid/:id", projectController.projectbyid);
app.delete("/api/deleteproject/:id", projectController.deleteproject);
app.put("/api/updateprojects", projectController.updateprojects);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
