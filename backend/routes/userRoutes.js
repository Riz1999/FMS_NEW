// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const Token = require("../models/token");
const sendEmail=require("../utils/sendEmail")
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto=require("crypto");
process.env.NODE_ENV = "development";
// POST /api/signup
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if the email already exists in the database
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password, name });
    const user=await newUser.save();
    const token=await new Token({
          userId:user._id,
          token:crypto.randomBytes(32).toString("hex")
    }).save();

    const url=`${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
    await sendEmail(user.email,"Verify Emial",url);
    res.status(201).json({ message: "An Email sent to your account please verify" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/login
// server.js (continuation)

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "1h", // Token expiration time (optional)
    });

    // Return the user ID along with the token in the response
    return res.status(200).json({
      message: "Login success",
      token,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add more user-related routes if needed
router.get("/:id/verify/:token",async(req,res)=>{
  try{
     const user=await User.findOne({_id:req.params.id});
     if(!user)
     return res.status(400).send({maessage:"Invalid Link"})
    const token=await Token.findOne({
      userId:user._id,
      token:req.params.token
    });
    if(!token)
    return res.status(400).send({message:"invalid link"});
    await User.updateOne({_id:user._id,verified:true});
    await token.remove()
    res.status(200).send({message:"Email verified successfully"})
  }catch(err)
  {

  }
})

module.exports = router;
