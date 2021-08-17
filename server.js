require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("./db/connection");

const app = express();

const weedRouter = require("./controllers/Weed");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => res.send("Server is Working"));
app.use("/weed", weedRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

