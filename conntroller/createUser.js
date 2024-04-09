const { QueryTypes } = require('sequelize')
const sequelize = require("../models")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const registerUser = async (req,res) => {
    const { firstName, lastName, email, password, gender, hobbies, roleName } =req.body;
    const profilePic = req.file.filename;
    console.log(profilePic);
    const emailRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid Email formate"});
    }
    if(password.length < 6) {
        return res.status(400).json({ message: "Password should be 6 carecter long"});        
    }
    try{
        const hashpassword = await bcrypt.hash(password, 10);

        await sequelize.query(`
            INSERT INTO user ( firstName, lastName, email, password, gender, hobbies, roleName, profilePic),
            VALUES( ?, ?, ?, ?, ?, ?, ?, ? )
            `,{
                type: QueryTypes.INSERT,
                replacements: [firstName, lastName, email, hashpassword, gender, hobbies, roleName, profilePic ],
            });
            res.status(201).json({ message: "User Created Successfully" });
    } catch (error){
        res.status(500).json({ message: "failed to Insert User" + error.message });
    }
}

module.exports = registerUser;
