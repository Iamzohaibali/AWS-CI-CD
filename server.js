const express = require("express");
const cors = require("cors");

const app = express();

/* CORS */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://zohaib-ahmad-ali.tech",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Production Backend");
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API Working Successfully",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});