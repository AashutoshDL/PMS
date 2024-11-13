const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    enum: ["Web", "3D", "AI", "IoT"],
    required: true,
  },

  members: {
    type: String,
    enum: [
      "Apil Ghimire",
      "Aashutosh Dahal",
      "Amiks Karki",
      "Anuja Gautam",
      "Arjun Gaywali",
      "Aaryan Shrestha",
      "Bimal Magar",
      "Jitendra Thapa",
      "Kaustuv Duwadi",
      "Kristan Dharel",
      "Milan Thapa",
      "MOHAMMAD Taushif Reza",
      "Pranav Kattel",
      "Prakit Karanjit",
      "Bibek Poudel",
      "Ram Nepali",
      "Saksham Shrestha",
      "Sambij Pandey",
      "Satyam Dulal",
      "Suyog Bhattrai",
      "Zokchen Tamang",
      "Niraj Pradhan",
      "Bhusan Luitel",
    ],
  },

  projectStatus: {
    type: String,
    enum: ["Active", "Completed", "Pending"],
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
