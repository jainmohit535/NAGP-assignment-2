import { Router } from "express";
import { getAllUsers, insertUser } from "../database/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const newUser = await insertUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send("Failed to insert user");
  }
});

export default router;
