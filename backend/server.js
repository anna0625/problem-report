const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   res.send("Hello!");
  //   res.json({ message: "Welcome to support API!" });
  res.status(200).json({ message: "Welcome to support API!" });
});

const userRoutes = require("./routes/userRoutes");

// Routes, here we mount /api/users this router
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
