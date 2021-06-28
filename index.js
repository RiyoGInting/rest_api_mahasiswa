require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require("express");

const app = express();

// Import routes
const programStudiRoute = require("./routes/programStudiRoute");
const mataKuliahRoute = require("./routes/mataKuliahRoute");
const mahasiswaRoute = require("./routes/mahasiswaRoute");
const krsRoute = require("./routes/krsRoute");

//Set body parser for HTTP post operation
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import table relationship
require("./utils/associations");

// app.use
app.use("/programStudi", programStudiRoute);
app.use("/mataKuliah", mataKuliahRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/krs", krsRoute);

// Server running

app.listen(3000, () => console.log("server running on port 3000"));
