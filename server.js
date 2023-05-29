import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

//configure env
dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

app.get("/", function (req, res) {
  app.use(express.static(path.resolve(__dirname, "book-app", "build")));
  res.sendFile(path.resolve(__dirname, "book-app", "build", "index.html"));
});

const PORT = 8080;

app.listen(PORT, () => {
  //databse config
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
