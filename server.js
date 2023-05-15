// server.js
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const Project = require("./utils/project.model");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Database
  mongoose
    .connect(
      "mongodb+srv://anibal:Zz9xWxAUgWz3842k@cluster0.7x9lz.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

  // Define custom routes here
  server.get("/api/project", async (req, res) => {
    try {
      const users = await Project.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  server.post("/api/project", async (req, res) => {
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

  server.delete("/api/project/:id", async (req, res) => {
    try {
      const id = req.params.id;
      console.log("id",id);
      const _res = await Project.findByIdAndDelete(id);
      res.json(_res);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  // Fallback to nextjs for other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
