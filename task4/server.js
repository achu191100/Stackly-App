const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Task 4 API",
    routes: {
      users: "/users"
    }
  });
});

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on localhost: 3000");
});


