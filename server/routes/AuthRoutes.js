const router=require("express").Router();

const auth=require("../controllers/authController");

const protect=require("../middleware/auth");

router.post("/register",auth.register);

router.post("/login",auth.login);

router.get("/profile",protect,(req,res)=>{

res.json(req.user);

});

module.exports=router;