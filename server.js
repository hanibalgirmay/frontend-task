// server.js
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const projectRoute = require("./app/api/project");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use(function (req, res, next) {
    req.url = req.originalUrl.replace("/nextjs_custom_server/_next", "/_next");
    next(); // be sure to let the next middleware handle the modified request.
  });

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

  server.use("/api", projectRoute);
  // Fallback to nextjs for other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
