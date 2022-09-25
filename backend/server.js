const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello!");
  //   res.json({ message: "Welcome to support API!" });
  res.status(200).json({ message: "Welcome to support API!" });
});

const userRoutes = require("./routes/userRoutes");

// Routes, here we mount /api/users this router
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
