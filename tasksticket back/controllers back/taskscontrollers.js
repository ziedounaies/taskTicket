const HttpError = require("../models back/http-error");
const Taks = require("../models back/taks");
const moment = require("moment");
const Note = require("../models back/Note");

var { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");


const getTasks = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const bearerHeader = req.headers["authorization"];
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

  let list = await Taks.find({}) // You may want to add a query
    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit); // This is your 'page size'

  const tradesCollectionCount = await Taks.count();

  const totalPages = Math.ceil(tradesCollectionCount / limit);
  //     const currentPage = Math.ceil(tradesCollectionCount % offset)

  res.json({
    list,
    totalPages: totalPages,
    totalItemAll: tradesCollectionCount,
    currentPage: page,
  });
};

const create = async (req, res, next) => {
  const {
    status,
    startDate,
    dueDate,
    assignName,
    taksTags,
    taksName,
    description,
    parterns,
    createAt,
  } = req.body;
  let taks = new Taks({
    statue: "",
    startDate: null,
    dueDate: null,
    assignName: "",
    taksTags: "",
    taksName: "",
    description:"",
    parterns:"",

    createAt: new Date(),
  });

  if (status === null || status === undefined || status === "") {
    res.status(400).json({ message: "status is required" });
  } else {
    if (
      status === "toDo" ||
      status === "inProgress" ||
      status === "review" ||
      status === "confirmed"
    ) {
      taks.status = status;
    } else {
      res.status(400).json({
        message: "status must toDo , inProgress , review or confirmed",
      });
    }
  }

  if (startDate === "" || startDate === undefined || startDate === null) {
    res.status(400).json({ message: "startDate is required" });
  } else {
    if (moment(startDate, "DD/MM/YYYY", true).isValid()) {
      taks.startDate = startDate;
    } else {
      res.status(400).json({ message: "start date must be DD/MM/YYYY" });
    }
  }

  if (dueDate === "" || dueDate === undefined || dueDate === null) {
    res.status(400).json({ message: "dueDate is required" });
  } else {
    if (moment(dueDate, "DD/MM/YYYY", true).isValid()) {
      taks.dueDate = dueDate;
    } else {
      res.status(400).json({ message: "dueDate must be DD/MM/YYYY" });
    }
  }

  if (assignName === "" || assignName === undefined || assignName === null) {
    res.status(400).json({ message: "assignName is required" });
  } else {
    taks.assignName = assignName;
  }

  if (taksTags === "" || taksTags === undefined || taksTags === null) {
    res.status(400).json({ message: "taksTags is required" });
  } else {
    if (taksTags === "design" || taksTags === "UI" || taksTags === "UX") {
    } else {
      taks.taksTags = taksTags;
    }


    
    if (parterns === "" || parterns === undefined || parterns === undefined) {
      res.status(400).json({ message: "parterns is required" });
    } else {
      taks.parterns = parterns;
    }

    if (description === "" || description === undefined || description === undefined) {
      res.status(400).json({ message: "description is required" });
    } else {
      taks.description = description;
    }
    if (taksName === "" || taksName === undefined || taksName === undefined) {
      res.status(400).json({ message: "taksName is required" });
    } else {
      taks.taksName = taksName;
    }

    const newTaks = await taks.save();
    res.json(newTaks);
  }
};

const getParterns = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const parterns = parseInt(req.query.status);
 

  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }

 

  let list = await Taks.find({ parterns:parterns })
    .skip(skipIndex)
    .limit(limit);

  const tradesCollectionCount = (await Taks.find({ parterns: parterns }))
    .length;

  const totalPagesPaterns = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalPagesPaterns,
    totalItemPaterns: tradesCollectionCount,
    currentPagePaterns: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getInprogress = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const status = parseInt(req.query.status);

  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }

  if (status === "inProgress") {
    taks.status = status;
  }

  let list = await Taks.find({ status: "inProgress" })
    .skip(skipIndex)
    .limit(limit);

  const tradesCollectionCount = (await Taks.find({ status: "inProgress" }))
    .length;

  const totalPagesInpr = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalPagesInpr,
    totalItemInprogress: tradesCollectionCount,
    currentPageInp: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getTodo = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const status = parseInt(req.query.status);
  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }

  if (status === "toDo") {
    taks.status = status;
  }

  let list = await Taks.find({ status: "toDo" }).skip(skipIndex).limit(limit);

  const tradesCollectionCount = (await Taks.find({ status: "toDo" })).length;

  const totalPagesToDo = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalPagesToDo,
    totalItemTodo: tradesCollectionCount,
    currentPageToDo: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getReview = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const status = parseInt(req.query.status);
  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }

  if (status === "review") {
    taks.status = status;
  }

  let list = await Taks.find({ status: "review" }).skip(skipIndex).limit(limit);

  const tradesCollectionCount = (await Taks.find({ status: "review" })).length;

  const totalPagesrev = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalPagesrev,
    totalItemReview: tradesCollectionCount,
    currentPageRev: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getConfirmed = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const status = parseInt(req.query.status);

  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }

  if (status === "confirmed") {
    taks.status = status;
  }

  let list = await Taks.find({ status: "confirmed" })
    .skip(skipIndex)
    .limit(limit);

  const tradesCollectionCount = (await Taks.find({ status: "confirmed" }))
    .length;

  const totalPagesConf = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalPagesConf,
    totalItemConfirmed: tradesCollectionCount,
    currentPageConf: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getByid = async (req, res, next) => {
  const { id } = req.body;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  } else {
    try {
      const Byid = await Taks.findById(id).exec();
      res.json(Byid);
    } catch {
      res.status(400).json({ message: "id is not found" });
    }
  }
};
const update = async (req, res, next) => {
  const {
    status,
    startDate,
    dueDate,
    assignName,
    taksTags,
    taksName,
    createAt,
    id,
  } = req.body;

  try {
    taksToupdate = await Taks.findById(id).exec();
  } catch (e) {
    res.status(400).json({ message: "id incoorect" });
  }

  if (status === "" || status === undefined || status === null) {
    res.status(400).json({ message: "status is required" });
  } else {
    if (
      status === "toDo" ||
      status === "inProgress" ||
      status === "review" ||
      status === "confirmed"
    ) {
      taksToupdate.status = status;
    } else {
      res.status(200).json({
        message: "status must toDo , inProgress , review or confirmed",
      });
    }
  }
  if (startDate === "" || startDate === undefined || startDate === null) {
    res.status(400).json({ message: "startDate is required" });
  } else {
    if (moment(startDate, "DD/MM/YYYY", true).isValid()) {
      taksToupdate.startDate = moment(startDate, "DD/MM/YYYY").toDate();
    } else {
      res.status(400).json({ message: "start date must be DD/MM/YYYY" });
    }
  }

  if (dueDate === "" || dueDate === undefined || dueDate === null) {
    res.status(400).json({ message: "dueDate is required" });
  } else {
    if (moment(dueDate, "DD/MM/YYYY", true).isValid()) {
      taksToupdate.dueDate = moment(dueDate, "DD/MM/YYYY").toDate();
    } else {
      res.status(400).json({ message: "dueDate must be DD/MM/YYYY" });
    }
  }

  if (assignName === "" || assignName === undefined || assignName === null) {
    res.status(400).json({ message: "assignName is required" });
  } else {
    taksToupdate.assignName = assignName;
  }

  if ((taksTags === "", taksTags === null || taksTags === undefined)) {
    res.status(400).json({ message: "taksTags is required" });
  } else {
    taksToupdate.taksTags = taksTags;
  }

  if (taksName === "" || taksName === undefined || taksName === null) {
    res.status(400).json({ message: "taksName is required" });
  } else {
    taksToupdate.taksName = taksName;
  }

  const newTaks = await taksToupdate.save();
  res.json(newTaks);
};

const deleteTask = async (req, res, next) => {
  const { id } = req.body;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  }

  let deleteTask;
  try {
    deleteTask = await Taks.findById(id);

    if (deleteTask === null) {
      const error = new HttpError(" there is no task to delete");
      return next(error);
    }
  } catch (err) {
    res.status(400).json({ message: "task in not deleted" });
  }

  try {
    await Taks.deleteOne({ _id: id }).exec();
  } catch (err) {
    const error = new HttpError("could not delete task", 500);
    return next(error);
  }

  res.status(200).json({ message: "task is deleted" });
};

const getByidTasDetails = async (req, res, next) => {
  const { id } = req.body;

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  } else {
    try {
      const Byid = await Taks.findById(id).exec();
      res.json(Byid);
    } catch {
      res.status(400).json({ message: "id is not found" });
    }
  }
};

const addNote = async (req, res, next) => {
  const { description, user, id } = req.body;

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  let noteToupdate;
  try {
    noteToupdate = await Taks.findById(id).exec();
  } catch (e) {
    res.status(400).json({ message: "id incorrect " });
  }

  if (limit === "" || limit === undefined || limit === null || limit < 0) {
    res
      .status(400)
      .json({
        message: "limit must over 0 or defined or not empty or not null",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must over 0 or defined or not empty or not null ",
      });
  }

  if (description === null || description === undefined || description === "") {
    res.status(400).json({ message: "description is required " });
  } else {
    Note.description = description;
  }

  if (user === "" || user === undefined || user === null) {
    res.status(400).json({ message: "user is required" });
  } else {
    Note.user = user;
  }
/*
  let list = await Taks.Note.find({})
    .skip(skipIndex)
    .limit(limit);
*/
  noteToAdd = new Note({ description, user, createAt: new Date() });
  noteToupdate.Note.push(noteToAdd);

  const newNote = await noteToupdate.save();

  res.json({ newNote });
};

const deleteNote = async (req, res, next) => {
  const { idNote, idTasks } = req.body;

  if (idNote === "" || idNote === undefined || idNote === null) {
    res.status(400).json({ message: "idNote is required" });
  }

  if (idTasks === "" || idTasks === undefined || idTasks === null) {
    res.status(400).json({ message: "idTasks is required" });
  }

  let getTaks;
  try {
    getTaks = await Taks.updateOne(idTasks, {
      $pull: { Note: { $elemMatch: { id: idNote } } },
    }).exec();

    if (getTaks === null) {
      const error = new HttpError("there is no Note to delete");
      return next(error);
    }
  } catch (err) {
    res.status(400).json(err);
  }

  try {
    console.log(
      getTaks.Note.filter((item) => item._id !== ObjectId(idNote) && item)
    );
  } catch (err) {
    const error = new HttpError("could not delete Note", 500);
    return next(err);
  }
  await getTaks.save();
  res.status(200).json({ message: "Note is deleted" });
};




const getByidTasksNote = async (req, res, next) => {
  const { id } = req.body;

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  if (limit === "" || limit === undefined || limit === null || limit < 0) {
    return res.status(400).json({
      message: "limit must be greater than 0 and valid",
    });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    return res.status(400).json({
      message: "page must be greater than 0 and valid",
    });
  }

  if (id === "" || id === undefined || id === null) {
    return res.status(400).json({ message: "id is required" });
  }

  try {
    const Byid = await Taks.findById(id).exec();
    const list = await Taks.Note.find({})
      .skip(skipIndex)
      .limit(limit);
  
    const tradesCollectionCount = await Taks.Note.countDocuments();
    const totalPagesNote = Math.ceil(tradesCollectionCount / limit);
  
    res.json({
      Byid,
      totalPagesNote,
      list,
      totalItemNote: tradesCollectionCount,
      currentPageNote: page,
    });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(400).json({ message: "Error while processing the request" });
  }
  
};



const getTasksPaternsPag = async (req, res, next) => {
  
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const parterns = parseInt(req.query.parterns);
  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
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
    res
      .status(400)
      .json({
        message: "limit must be over 0 or not null or defined or not not empty",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must be over 0 or not null or defined or not empty",
      });
  }



  let list = await Taks.find({ parterns:parterns }).skip(skipIndex).limit(limit);

  const tradesCollectionCount = (await Taks.find({parterns})).length;

  const totalPagesPaternsPag = Math.ceil(tradesCollectionCount / limit);

  res.json({  
    list,
    totalPagesPaternsPag,
    totalItemPaternsPag: tradesCollectionCount,
    currentPageToDo: page,
  });

  // const taks = await Taks.find().exec();
  //res.json(taks);
};

const getNote = async (req, res, next) => {

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const bearerHeader = req.headers["authorization"];
  //const bearerHeaderr = req.headers["authorization"];
/*
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    if (bearer[0] === "bearer") {
      const bearerToken = bearer[1];
      

      jwt.verify(bearerToken, "zied", (err, payload) => {
   
        if (err) {
          res.status(401).json({message:'unauthorized'});
        } else {
          req.payload = payload;
          
        }
      });
    } else {
      res.status(403).json({message:'forbidden'});
    }
  } else {
    res.status(403).json({message:'forbidden'});
  }
*/
  if (limit === "" || limit === undefined || limit === null || limit < 0) {
    res
      .status(400)
      .json({
        message: "limit must over 0 or defined or not empty or not null",
      });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res
      .status(400)
      .json({
        message: "page must over 0 or defined or not empty or not null ",
      });
  }

  

  let list = await Note.find({}) // You may want to add a query
    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit) .exec(); // This is your 'page size'

  const tradesCollectionCount = await Note.count();

  const totalPagesNote = Math.ceil(tradesCollectionCount / limit);
  //     const currentPage = Math.ceil(tradesCollectionCount % offset)


  res.status(200).json({
    list,
    totalPagesNote,
    totalItemNote: tradesCollectionCount,
    currentPageNote: page,
  });
};





const getByidNote = async (req, res, next) => {

  const { id } = req.query; // Change to req.query to get id from query parameters

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  const bearerHeader = req.headers["authorization"];

  // Bearer Token Handling

  if (!id) {
    return res.status(400).json({
      message: "id is required",
    });
  }

  if (limit <= 0 || isNaN(limit)) {
    return res.status(400).json({
      message: "limit must be greater than 0 and valid",
    });
  }

  if (page <= 0 || isNaN(page)) {
    return res.status(400).json({
      message: "page must be greater than 0 and valid",
    });
  }

  try {
    const Byid = await Taks.Note.findById(id).exec();

    let list = await Taks.Note.find({})
      .skip(skipIndex)
      .limit(limit);

    const tradesCollectionCount = await Taks.Note.countDocuments();
    const totalPagesNote = Math.ceil(tradesCollectionCount / limit);

    res.json({
      Byid,
      totalPagesNote,
      list,
      totalItemNote: tradesCollectionCount,
      currentPageNote: page,
    });
  } catch (error) {
    res.status(404).json({ message: "id is not found" });
  }
};




exports.addNote = addNote;
exports.create = create;
exports.getInprogress = getInprogress;
exports.getByid = getByid;
exports.update = update;
exports.delete = deleteTask;
exports.deleteNote = deleteNote;
exports.getTodo = getTodo;
exports.getReview = getReview;
exports.getConfirmed = getConfirmed;
exports.getByidTasDetails = getByidTasDetails;
exports.getNote = getNote;
exports.getTasks = getTasks;
exports.getByidNote=getByidNote;
exports.getByidTasksNote=getByidTasksNote;
exports.getTasksPaternsPag=getTasksPaternsPag;
exports.getParterns=getParterns;
