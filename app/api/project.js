const express = require("express");
const router = express.Router();
const Project = require("../../utils/project.model");

// Define custom routes here
router.get("/project", async (req, res) => {
  try {
    const users = await Project.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/project", async (req, res) => {
  const pro = new Project({
    projectName: req.body.projectName,
    projectCatagory: req.body.projectCatagory,
    projectURL: req.body.projectURL,
    workers: req.body.workers,
    product: req.body.product,
    mainGoal: req.body.mainGoal,
    contactEmail: req.body.contactEmail,
  });
  try {
    const newUser = await pro.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/project/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const _res = await Project.findByIdAndDelete(id);
    res.json(_res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
