const jwt = require("jsonwebtoken")
const SECUREKEY = process.env.JWT_SECRET;

// function verifyToken (req,res,next) {
//     const authHeader = req.headers['authorization']


//     const token = authHeader && authHeader.split(' ')[1]

//     if(token == null){
//         return res.sendStatus(401).json({message:"No token provided"})
//     }

//     jwt.verify(token,SECUREKEY,(err, user) => {
        
//         if(err){
//             if(err.name === 'TokenExpiredError'){
//                 return res.status(401).json({message:"Your token has expired. Please login again"})
//             }
//             return res.sendStatus(403)
//         }
        
//         req.user = user
//         next()
//     })
// }

 
const verifyToken = (req, res, next) => {
  const rawToken = req.headers["authorization"]?.split(" ")[1];
  if (rawToken == undefined) {
    return res.status(404).json({ error: "Token not found" });
  }
 
  jwt.verify(rawToken, process.env.JWT_SECRET, (err, verification) => {
    if (err) {
      return res.status(400).json({ error: "token not valid" });
    }
    req.obj = verification;
    // console.log(verification);
    next();
  });
};
 
module.exports = {
  verifyToken,
};
 