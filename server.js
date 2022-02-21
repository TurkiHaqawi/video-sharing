const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.static("frontend/build"));
const PORT = process.env.PORT || 8080;

// MongooDB Connection
mongoose
  .connect(process.env.MOGO_URL)
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "clint/build/index.html"));
});

app.listen(PORT, () => console.log("Server up to running"));
