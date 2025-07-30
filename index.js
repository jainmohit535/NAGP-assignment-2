// import dotenv from "dotenv";
// dotenv.config();
import "./src/config/env.js";

import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import { testDbConnection } from "./src/database/db.js";

console.log("process", process.env.DB_NAME);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.sendStatus(200));

app.use("/users", userRoutes);



async function startServer() {
  try {
    await testDbConnection();
    app.listen(port, '0.0.0.0' ,() => {
      console.log(`API listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:");
    console.error(error.message);
    process.exit(1); // Exit with error
  }
}

startServer();
