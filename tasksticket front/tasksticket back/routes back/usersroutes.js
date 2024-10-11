const express = require("express");
const userscontrollers = require("../controllers back/userscontrollers");

const router = express.Router();

router.post("/singup", userscontrollers.singup);
router.get("/get", userscontrollers.getUsers);
router.post("/getByid", userscontrollers.getByid);
//router.post("/update", userscontrollers.update);
router.post("/delete", userscontrollers.delete);
router.post("/login", userscontrollers.login);
router.post("/regenerateTokens", userscontrollers.regenerateTokens);
router.post("/logOut",userscontrollers.logOut);
router.post("/notification",userscontrollers.notification);

router.get("/search",userscontrollers.search);

router.post("/forgotPassword",userscontrollers.forgotPassword);
router.post("/passwordResetLink",userscontrollers.forgotPassword)
router.post("/resetPassword",userscontrollers.resetPassword);
router.get("/time",userscontrollers.time)
router.get("/getYear",userscontrollers.getYear)
router.post("/updateUserProfil",userscontrollers.updateUserProfil)
router.post("/changePassword",userscontrollers.changePassword)
router.post("/resetPasswordEmail",userscontrollers.resetPasswordEmail)



//router.post("/singup", (req,res,next)=>{
    
//});

module.exports = router;
