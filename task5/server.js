const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");

dotenv.config();

if (!process.env.MONGO_URI) {
  process.env.MONGO_URI = "mongodb+srv://achyuthnandala_db_user:fr78tIEDPjLtHaQC@cluster0.m7hqpgq.mongodb.net/Stacklyone?appName=Cluster0";
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Task 5 Users API is running",
    routes: {
      users: "/users"
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

