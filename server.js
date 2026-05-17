const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Production Backend");
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API Working"
  });
});

/* NEW ROUTE */
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.get("/api/user", (req, res) => {
  res.json({
    success: true,
    ip: req.ip,
    userAgent: req.get('user-agent'),
    timestamp: new Date().toISOString()
  });
});

app.listen(3000, () => {
  console.log("Server running");
});