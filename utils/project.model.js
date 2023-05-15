// const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: String,
  projectURL: String,
  projectCatagory: String,
  mainGoal: String,
  workers: Number,
  product: String,
  contactEmail: String,
});

projectSchema.set("timestamp", true);

const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;
