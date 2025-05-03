const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Frontend ke liye CORS enable karo

const todos = [
  { id: 1, title: "Learn React", description: "Start with useState and useEffect" },
  { id: 2, title: "Build a Todo App", description: "Connect with backend" },
  { id: 3, title: "Learn Express", description: "Make APIs" }
];

app.get("/", (req, res) => {
    res.send("Welcome to My Todo API!");
  });

app.get("/todos", (req, res) => {
  res.json({ todos });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
