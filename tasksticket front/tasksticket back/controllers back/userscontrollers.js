const HttpError = require("../models back/http-error");

const User = require("../models back/users");

const projects = require("../models back/projects");
const taks = require("../models back/taks");

const moment = require("moment");
const jwt = require("jsonwebtoken");
const { sign, verify } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require('joi');

const express = require('express');

const webpush = require('web-push');
const nodemailer = require("nodemailer");


const socketio = require('socket.io');

  const publicVapidKey = "BHcqa4ztlfRQtBta6ABXV5d-P-sslcKIjN_pwgyWL_1ATcReADdT6Gsmt93PaQ6jz1w6HdJHFcjA1JE5K1pGnYc";

  const privateVapidKey = "nNrC4ZDTGfl344mKUVHNnrPT3fFsMk8fThBOdbaLwdw";
  webpush.setVapidDetails("mailto:zizounewcastle@gmail.com",publicVapidKey,privateVapidKey)


  const io = socketio();
const notification = async (req, res) => {
  const { title, message, receiver } = req.body;


  io.emit('notification', {
    title: title,
    message: message,
    receiver: receiver,
  });

  res.status(200).json({
    message: 'Notification sent successfully',
  });


io.on('connection', (socket) => {
  // Listen for notifications from the server.
  socket.on('notification', (data) => {
    // Do something with the notification data.
  });
});
};
 



 


//const socket = require("socket.io");
//const { Server } = require("socket.io");
//const io = new Server(Server);
//const server= require('http').createServer(app)

/* const notification = async(req, res, next) =>{


 
io.on("connection", function (socket) {
  console.log("Made socket connection");
 
  socket.on("disconnect", function () {
    console.log("Made socket disconnected");
  });
 
  socket.on("send-notification", function (data) {
    io.emit("new-notification", data);
  });
})
res.status(200).json({message:'notification sended'})
}

*/



const forgotPassword = async (req, res, next) => {
  const { email } = req.body; 

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'zizounewcastle@gmail.com',
      pass: 'j r e n v e q i h s d v x x o f',
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: email,
    subject: `Password Reset Request for ${email}`,
    text: `Your password is: ${Math.floor(1000 + Math.random() * 9000)}`,
  };

 const randomNumber = Math.floor(1000 + Math.random() * 9000);

  try {
    const savedRandomNumber = new RandomNumber({
      randomNumber: randomNumber,
    });

    await savedRandomNumber.save();

    res.json({ success: true, randomNumber });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error saving random number' });
  }



  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send password reset email");
    } else {
      console.log("Password reset email sent:", info.response);
      res.status(200).send("Password reset email sent");
    }
  });
};



const forgotPasswordLink = async (req, res, next) => {
  const { email } = req.body; 
 
/*
  User.findOne({email},(err,user) => 
  if(err||!user){

    return res.status(400).json({error:'user with this emaildoes not exists '})
  })

*/
const token = jwt.sign({_id:user._id} ,process.env.RESET_PASSWORD_KEY,{expiresIn:'20m'} )

const data = {


  from: "your_email@gmail.com",
  to: email,
  subject: `account activation link`,
  text: `${process.env.CLIENT_URL}/resetpassword/${token}`
}

return user.updateOne({resetLink:token},function(err,success){

if(err){
  return res.status(400).json({error:'reset password link error'})
}else{
merge.message().send(data,function(error,body){

  if(error){

    return res.json({
error:err.message

    })
  }
  return res.json({message:'email has been sent ' })
})

}

}) 

}
/*
const resetPasswordLink = async (req, res, next) => {

const {resetLink,newPass}=req.body

if(resetLink){

  jwt.verify(resetLink,process.env.RESET_PASSWORD_KEY,function(error,decodedDara){
if(error){


  return res.status(401).json({
error:'incorrect token or it is exprired'

  })
}
User.findOne({resetLink},(err,user)=> {

if(err||!user){

  return res.status(400).json({error:'user with is mail does not exists'})
}

const obj ={

password:newPass

}
user =_.extend(user ,obj)
user.save((err,results)=>{
if(err){

  return res.status(400).json({error:'reset password link error'})
}else{

  return res.status(400).json({error:'reset password error'})
})

    
return res.status(200).json({error:'reset password has been changed'})
  }
  
  )
}

}



)

  })

}else {
  return res.status(401).json({
    error:'authentication error'
  })
}

}
}
*/
const BCRYPT_GEN_SALT_NUMBER=process.env.BCRYPT_GEN_SALT_NUMBER


const   resetPasswordEmail = async (req, res, next) => {

  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
} catch (error) {
    res.send("An error occured");
    console.log(error);
}

}



//not connected
const resetPassword = async (req, res, next) => {

  try {
    const { email, newPassword } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Password validation
    if (
      newPassword.length < 8 ||
      newPassword.length > 16 ||
      !newPassword.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/)
    ) {
      return res.status(400).json({
        message:
          'Password must be between 8 and 16 characters and include at least one uppercase letter and a number between 0 and 9.',
      });
    }

    // Hash the new password and update it in the user's document
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// connected
const changePassword = async (req, res, next) => {

  const { idUser, token, newPassword } = req.body;

  const bearerHeader = req.headers["authorization"];


  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    //next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }



  // Validate idUser and token
  const user = await User.findById(idUser);
  if (!user || user.resetToken !== token) {
    return res.status(401).json({
      success: false,
      message: 'Invalid idUser or token'
    });
  }

  // Update user password
  user.password = newPassword;
  await user.save();

  // Try to send success message
  try {
    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    // If an error is thrown, return a 500 error
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
  
};





const verifyToken= (req,res,next) => {

  
const accessToken=req.cookies["access-token"];
  
 if(accessToken!=accessToken)
   return res.status(400).json({message:"user not authenticated"})


try{
      const validToken = verify(accessToken,"jwt")
    
        if(validToken){
        
        req.authenticated =true;
        return next();
        }


}catch(e) {

  res.status(401).json({message:"token not correct "})
}
res.status(200).json({message:"token valid"})



}



const refreshTokenn = async (req, res) => {
  //take the refresh token from the user
  //let refreshTokens=new User ({});

  var refreshTokens = new Array();

  const { refreshToken } = req.body.token;
  //}
  //send error if there is no token or it s invalid

  if (!refreshToken) {
    res.status(401).json("you are not authticated");
  }

  if (!refreshTokens.includes(refreshToken)) {
    res.status(403).json("refresh token is not valid ");
  }

  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
  // if everything is ok , create new access token , refresh token and send to user
};

const logout = async (verify, req, res) => {
  var refreshTokens = new Array();

  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("you logged out successfully");
};

const deleteUserWithToken = async (verify, req, res, next) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("user has been deleted");
  } else {
    res.status(403).json("you are not allowed to delete this user");
  }
};



const email = async (req, res, next) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "<user>",
      pass: "<pass>",
    },
  });

  message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP Email",
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

const logOut = async (req, res, next) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });

    const userToken = await UserToken.findOne({ token: req.body.refreshToken });
    if (!userToken)
      return res
        .status(200)
        .json({ error: false, message: "Logged Out Sucessfully" });

    await userToken.remove();
    res.status(200).json({ error: false, message: "Logged Out Sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

const search = async (req, res, next) => {
  let list = [];

  if (req.query.search) {
    list = await User.find({
      $or: [{ fisrtName: { $regex: req.query.search } }],
    });
  }

  if (req.query.search) {
    list = await User.find({
      $or: [{ fisrtName: { $regex: req.query.search } }],
    });
  }

  let listProjet = [];

  if (req.query.search) {
    listProjet = await projects.find({
      $or: [{ name: { $regex: req.query.search } }],
    });
  }

  if (req.query.search) {
    listProjet = await projects.find({
      $or: [{ name: { $regex: req.query.search } }],
    });

    let listTasks = [];

    if (req.query.search) {
      listTasks = await taks.find({
        $or: [{ taksName: { $regex: req.query.search } }],
      });
    }

    if (req.query.search) {
      listTasks = await taks.find({
        $or: [{ taksName: { $regex: req.query.search } }],
      });
    }

    res.json({ list, listProjet, listTasks });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ message: "User Not found." });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) res.status(400).json("Email or password is wrong");
/*
    const token = jwt.sign({ _id: user._id }, "zied");

    const refreshToken = jwt.sign(
      { _id: user.id },
      "zied",

      { expiresIn: "1m" }
    );
*/
    res.json({
      token,
      refreshToken,
      fisrtName: user.fisrtName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      profession: user.profession,
      birthDate: user.birthDate,
      nationality: user.nationality,
      address: user.address,
      phoneNumber: user.phoneNumber,
    });

    res.json(token, { message: "logged in " });
  } catch (error) {
   // res.status(500).json({ message: error });
  }
};

const getYear = async (req, res, next) => {
  const currentYear = new Date().getFullYear();
  res.json({ year: currentYear });
};    

const regenerateTokens = async (req, res, next) => {
  const token = jwt.sign({ _id: User._id }, "zied");
  const refreshToken = jwt.sign(
    { _id: User.id },
    "zied",

    { expiresIn: "1m" }
  );
  res.json({ token, refreshToken });
};

const singup = async (req, res, next) => {
  let emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  let reg = new RegExp(/\d+/g);

  const {
    fisrtName,
    lastName,
    email,
    profession,
    birthDate,
    nationality,
    address,
    phoneNumber,
    password,

    createAt,
  } = req.body;

  let user = new User({
    fisrtName: null,
    lastName: null,
    email: null,
    profession: null,
    birthDate: null,
    nationality: null,
    address: null,
    phoneNumber: null,
    password: null,
    userEmail: null,
    createAt: new Date(),
  });

  if (lastName === null || lastName === "" || lastName === undefined) {
    res.status(400).json({ message: "lastName is required" });
  } else if (
    fisrtName === null ||
    fisrtName === "" ||
    fisrtName === undefined
  ) {
    res.status(400).json({ message: "fisrtName is required" });
  } else if (
    profession === null ||
    profession === "" ||
    profession === undefined
  ) {
    res.status(400).json({ message: "profession is required" });
  } else if (
    birthDate === "" ||
    birthDate === undefined ||
    birthDate === null
  ) {
    res.status(400).json({ message: "birthDate is required" });
  } else if (!moment(birthDate, "DD/MM/YYYY", true).isValid()) {
    res.status(400).json({ message: "birthDate must be DD/MM/YYYY" });
  } else if (
    nationality === null ||
    nationality === "" ||
    nationality === undefined
  ) {
    res.status(400).json({ message: "nationality is required" });
  } else if (address === null || address === "" || address === undefined) {
    res.status(400).json({ message: "address is required" });
  } else if (
    phoneNumber === null ||
    phoneNumber === "" ||
    phoneNumber === undefined
  ) {
    res.status(400).json({ message: "phoneNumber is required" });
  } else if (!phoneNumber.match(reg)) {
    res.status(400).json({ message: "phone number must be numbers " });
  } else if (email === null || email === "" || email === undefined) {
    res.status(400).json({ message: "email is required" });
  } else if (!emailRegex.test(email)) {
    res.status(400).json({ message: "email format incorrect" });
  } else if ((checkEmail = await User.findOne({ email: email }))) {
    res.status(400).json({ message: "email already exist." });
  } else if (password === null || password === "" || password === undefined) {
    res.status(400).json({ message: "password is required" });
  } else if (
    password.length <= 8 ||
    password.length >= 16 ||
    !password.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$")
  ) {
    res.status(400).json({
      message:
        " max 16 characters and min 8 characters and at least one uppercase letter and a number between 0 and 9 ",
    });
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        user.password = hash;
        user.lastName = lastName;
        user.fisrtName = fisrtName;
        user.profession = profession;
        user.email = email;
        user.nationality = nationality;
        user.address = address;
        user.phoneNumber = phoneNumber;
        user.birthDate = birthDate;

        const refreshToken = jwt.sign(
          { _id: User.id },
          "zied",

          { expiresIn: "1m" }
        );

        const token = jwt.sign({ _id: user._id }, "zied", { expiresIn: "1m" });

        const newUser = await user.save();

        res.json({
          email: newUser.email,
          lastName: newUser.lastName,
          fisrtName: newUser.fisrtName,
          profession: newUser.profession,
          nationality: newUser.nationality,
          address: newUser.address,
          phoneNumber: newUser.phoneNumber,
          birthDate: newUser.birthDate,
          refreshToken,
          token,
        });
      });
    });
  }
};
const getUsers = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const skipIndex = (page - 1) * limit;
  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
  //console.log(page)
  /*
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    if (bearer[0] === "bearer") {
      const bearerToken = bearer[1];
      // req.token = bearerToken;

      jwt.verify(bearerToken, "zied", (err, payload) => {
        //console.log(err)
        if (err) {
          res.sendStatus(401);
        } else {
          req.payload = payload;
          //next();
        }
      });
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
*/
  if (limit === "" || limit === undefined || limit === null || limit < 0) {
    res.status(400).json({
      message: "limit must over 0 or defined or not empty or not null",
    });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "page must over 0 or defined or not empty or not null ",
    });
  }



  let list = await User.find({}) // You may want to add a query
    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit); // This is your 'page size'
    
  const tradesCollectionCount = await User.count();

 

  const  totalPages = Math.ceil( tradesCollectionCount / limit);


      //const currentPage = Math.ceil(tradesCollectionCount % offset)


  
  res.status(200).json({
    list,
    totalPages,
    totalItem: tradesCollectionCount,
    currentPage: page,
  });
};


const getByid = async (req, res, next) => {
  const { id } = req.body;

  if (id === null || id === "" || id === undefined) {
    res.status(400).json({ message: "id is required " });
  } else {
    try {
      const Byid = await User.findById(id).exec();
      res.json(Byid);
    } catch (e) {
      res.status(400).json({ message: "id is not found" });
    }
  }
};


/*
const update = async (req, res, next) => {
  const {
    id,
    fisrtName,
    lastName,
    email,
    profession,
    birthDate,
    nationality,
    address,
    phoneNumber,
    password,
  } = req.body;
  const userToUpdate = await User.findById(id).exec();

  if (id === null || id === "" || id === undefined) {
    res.status(400).json({ message: "id is required" });
  }

  if (phoneNumber === null || phoneNumber === "" || phoneNumber === undefined) {
    res.status(400).json({ message: "phoneNumber is required" });
  } else {
    try {
      phoneNumber.match("^(?=.*[0-9])$");
      userToUpdate.phoneNumber = phoneNumber;
    } catch (err) {
      res.status(400).json({ message: "phone number must be numbers " });
    }
  }

  if (address === null || address === "" || address === undefined) {
    res.status(400).json({ message: "address is required" });
  } else {
    userToUpdate.address = address;
  }

  if (nationality === null || nationality === "" || nationality === undefined) {
    res.status(400).json({ message: "nationality is required" });
  } else {
    userToUpdate.nationality = nationality;
  }

  if (birthDate === null || birthDate === "" || birthDate === undefined) {
    res.status(400).json({ message: "profession is required" });
  } else {
    userToUpdate.birthDate = birthDate;
  }

  if (profession === null || profession === "" || profession === undefined) {
    res.status(400).json({ message: "profession is required" });
  } else {
    userToUpdate.profession = profession;
  }

  if (lastName === null || lastName === "" || lastName === undefined) {
    res.status(400).json({ message: "lastName is required" });
  } else {
    userToUpdate.lastName = lastName;
  }

  if (fisrtName === null || fisrtName === "" || fisrtName === undefined) {
    res.status(400).json({ message: "fisrtName is required" });
  } else {
    userToUpdate.fisrtName = fisrtName;
  }

  if (email === null || email === "" || email === undefined) {
    res.status(400).json({ message: "email is required" });
  } else {
    var emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (emailRegex.test(email)) {
      userToUpdate.email = email;
    } else {
      res.status(400).json({ message: "email format incorrect" });
    }
  }

  if (password === null || password === "" || password === undefined) {
    res.status(400).json({ message: "password is required" });
  } else {
    if (
      password.length >= 8 &&
      password.length <= 16 &&
      password.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$")
    ) {
      userToUpdate.password = password;
    } else {
      res.status(400).json({ message: "password is not long" });
    }
  }
  (async function () {
    const newUser = await userToUpdate.save();

    res.json(newUser);
  })();
};

*/
const updateUserProfil = async (req, res, next) => {
  const {
    
    fisrtName,
    lastName,
    email,
    profession,
    birthDate,
    nationality,
    address,
    phoneNumber,
    
  } = req.body;
  const userToUpdate = await User.exec();

  

  if (phoneNumber === null || phoneNumber === "" || phoneNumber === undefined) {
    res.status(400).json({ message: "phoneNumber is required" });
  } else {
    try {
      phoneNumber.match("^(?=.*[0-9])$");
      userToUpdate.phoneNumber = phoneNumber;
    } catch (err) {
      res.status(400).json({ message: "phone number must be numbers " });
    }
  }

  if (address === null || address === "" || address === undefined) {
    res.status(400).json({ message: "address is required" });
  } else {
    userToUpdate.address = address;
  }

  if (nationality === null || nationality === "" || nationality === undefined) {
    res.status(400).json({ message: "nationality is required" });
  } else {
    userToUpdate.nationality = nationality;
  }

  if (birthDate === null || birthDate === "" || birthDate === undefined) {
    res.status(400).json({ message: "profession is required" });
  } else {
    userToUpdate.birthDate = birthDate;
  }

  if (profession === null || profession === "" || profession === undefined) {
    res.status(400).json({ message: "profession is required" });
  } else {
    userToUpdate.profession = profession;
  }

  if (lastName === null || lastName === "" || lastName === undefined) {
    res.status(400).json({ message: "lastName is required" });
  } else {
    userToUpdate.lastName = lastName;
  }

  if (fisrtName === null || fisrtName === "" || fisrtName === undefined) {
    res.status(400).json({ message: "fisrtName is required" });
  } else {
    userToUpdate.fisrtName = fisrtName;
  }

  if (email === null || email === "" || email === undefined) {
    res.status(400).json({ message: "email is required" });
  } else {
    var emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (emailRegex.test(email)) {
      userToUpdate.email = email;
    } else {
      res.status(400).json({ message: "email format incorrect" });
    }
  }

 

  (async function () {
    const newUser = await userToUpdate.save();

    res.json(newUser);
  })();
};
const deleteUser = async (req, res, next) => {
  const { id } = req.body;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  }

  let deleteUsers;
  try {
    deleteUsers = await User.findById(id);

    if (deleteUsers === null) {
      const error = new HttpError(" there is no user to delete");
      return next(error);
    }
  } catch (err) {
    res.status(400).json({ message: "user in not deleted" });
  }

  try {
    await User.deleteOne({ _id: id }).exec();
  } catch (err) {
    const error = new HttpError("could not delete user", 500);
    return next(error);
  }

  res.status(200).json({ message: "user is deleted" });
};


const time = async(req,res,next)=> {

const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });

}

exports.singup = singup;
exports.getUsers = getUsers;
exports.getByid = getByid;
//exports.update = update;
exports.delete = deleteUser;
exports.login = login;
//exports.verifyToken = verifyToken;
exports.regenerateTokens = regenerateTokens;
exports.email = email;
exports.logOut = logOut;
//exports.deleteUserWithToken = deleteUserWithToken;
exports.search = search;
exports.forgotPassword = forgotPassword;
exports.notification=notification;
exports.resetPassword = resetPassword;
exports.time = time;
exports.getYear=getYear;
exports.updateUserProfil=updateUserProfil;
exports.changePassword=changePassword;
exports.resetPasswordEmail=resetPasswordEmail;
