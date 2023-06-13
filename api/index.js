// require express
const application = require("express");

const app = application();

app.get("/test", (req, res) => {
  res.send("Hello World");
  res.json({ message: "Hello World" });
});

app.post("/register", (req, res) => {});

app.listen(5335, () => {
  console.log("Server is running");
});
