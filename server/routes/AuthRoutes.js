import express from "express";
import User from "../models/User.js"; // IMPORTANT

const router = express.Router();

// REGISTER (working already)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "User registered successfully" });
});


// LOGIN (FIX HERE 🔥)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // ❌ user not found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // ❌ password mismatch
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // ✅ success
  res.json({
    message: "Login successful",
    token: "dummy-token-" + user._id,
    user,
  });
});

export default router;