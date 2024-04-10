const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    if (!email) {
      return res.status(400).json({ error: "Email cannot be empty" });
    }
    if (!email.endsWith("@gmail.com" || "@email.com" || "@yahoo.com")) {
      return res
        .status(550)
        .json({ Error: "User Unknown - Email must be from (example@gmail.com / example@email.com / example@yahoo.com)" });
    }
    if (!password) {
      return res.status(400).json({ error: "Password cannot be empty" });
    }
 
    const [checkUser] = await sequelize.query(
      "select * from users where email = ?",
      {
        type: QueryTypes.SELECT,
        replacements: [email],
      }
    );
 
    if (checkUser == undefined) {
      return res.status(404).json({ error: "Email does not exist" });
    }
 
    const comparePass = await comparePass(password, checkUser.password);
 
    if (!comparePass) {
      return res.status(404).json({ error: "Enter the correct credentails" });
    }
 
    jwt.sign(
      checkUser,
      process.env.SECUREKEY,
      { expiresIn: "1h" },
      (err, authToken) => {
        if (err) {
          return res.status(404).json({ error: "Token error" });
        }
 
        res.status(200).json({ status: "success", authToken });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const { QueryTypes } = require('sequelize')
const sequelize = require("../models")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
 
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, gender, hobbies, userRole } = req.body;
    const profile_pic = req.file.filename;
    console.log(profile_pic);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for demonstration
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
 
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    try {
        // const hashedPassword = await bcrypt.hash(upassword, 10);
        // const hashemail = await bcrypt.hash(email,8);
        const hashpassword = await bcrypt.hash(password, 10);
       
 
        await sequelize.query(`
            INSERT INTO users (firstname, lastname, email, password, gender, hobbies, userRole ,profile_pic )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, {
            type: QueryTypes.INSERT,
            replacements: [firstname, lastname, email, hashpassword, gender, hobbies, userRole , profile_pic],
        });
 
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to insert user: " + error.message });
    }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)
   
      if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
      }
      if (!email.endsWith("@gmail.com" || "@email.com" || "@yahoo.com")) {
        return res
          .status(550)
          .json({ Error: "User Unknown - Email must be from example.com" });
      }
      if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
      }
   
      const [checkUser] = await sequelize.query(
        "select * from users where email = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [email],
        }
      );
   
      if (checkUser == undefined) {
        return res.status(404).json({ error: "Email does not exist" });
      }
   
      const comparePass = await bcrypt.compare(password, checkUser.password)
   
      if (!comparePass) {
        return res.status(404).json({ error: "Enter the correct credentails" });
      }
   
      jwt.sign(
        checkUser,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, authToken) => {
          if (err) {
         
            return res.status(404).json({ error: "Token error" });
          }
   
          res.status(200).json({ status: "success", authToken });
        }
      );
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
 
 
 
  const listCategory = (req, res) =>{
    res.send("Hello")
 
  }
 
module.exports = {
    registerUser,
    login,
    listCategory
};