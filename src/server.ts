import express from "express";

// port
const PORT = process.env.PORT || 5000;

// create express app
const app = express();

// listen server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
