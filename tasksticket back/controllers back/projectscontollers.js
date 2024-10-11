const { json } = require("body-parser");
const { response, request } = require("express");
const HttpError = require("../models back/http-error");
const projects = require("../models back/projects");
const Project = require("../models back/projects");
const moment = require("moment");
const multer = require("multer");
//const ejs = require('ejs');
const path = require("path");
const jwt = require("jsonwebtoken");
const uploadFile = require("../controllers back/middleware/upload");
const uploadFileMiddleware = require("../controllers back/middleware/upload");


//init upload


/*
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});
*/
const uploadProjet = async (req, res) => {

  try {
    await uploadFileMiddleware(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file ? req.file.originalname : 'unknown'}. ${err}`,
    });
  }
};




const create = async (req, res, next) => {
  const { priority, date, name, description, statue, taskDone,taksTags,createAt } = req.body;

  let reg = new RegExp(/\d+/g);
  let project = new Project({
    priority: "",
    statue: "",
    createAt: new Date(),
    date: null,
    name: "",
    description: "",
    taskDone:null,
    taksTags:""
  });



  
  if (taksTags === null || taksTags === "" || taksTags === undefined) {
    res.status(400).json({ message: "project must have a taksTags " });
  } else {
    project.taksTags = taksTags;
  }

  if (statue === null || statue === "" || statue === undefined) {
    res.status(400).json({ message: "statue is required" });
  } else {
    if (statue === "new" || statue === "Inprogress" || statue === "Completed") {
      project.statue = statue;
    } else {
      res.status(400).json({ message: "statue must be new or Inprogress or Completed" });
    }
  }
  if (taskDone === null || taskDone === "" || taskDone === undefined) {
    res.status(400).json({ message: "project must have a taskDone " });
  }else { 
    if(taskDone.match(reg)) {
        project.taskDone = taskDone;
    }else {

 res.status(400).json({ message: "taskDone must be numbers " });

 
   }
  }
   
  if (priority === null || priority === "" || priority === undefined) {
    res.status(400).json({ message: "priority is required" });
  } else {
    if (priority === "low" || priority === "meduim" || priority === "high") {
      project.priority = priority;
    } else {
      res
        .status(400)
        .json({ message: "priority must be low or meduim or high" });
    }
  }

  if (date === null || date === "" || date === undefined) {
    res.status(400).json({ message: "project must have a due date" });
  } else {
    if (moment(date, "DD/MM/YYYY", true).isValid()) {
      project.date = date;
    } else {
      res.status(400).json({ message: "date must be DD/MM/YYYY" });
    }
  }

  if (name === null || name === "" || name === undefined) {
    res.status(400).json({ message: "project must have a name " });
  } else {
    project.name = name;
  }

  if (description === null || description === "" || description === undefined) {
    res.status(400).json({ message: "project must have a description " });
  } else {
    project.description = description;
  }

  const newproject = await project.save();
  res.json(newproject);
};



const get = async (req, res, next) => {
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
      // req.token = bearerToken;

      jwt.verify(bearerToken, "zied", (err, payload) => {
        //console.log(err)
        if (err) {
          res.status(401).json({message:"inauthorized"});
        } else {
          req.payload = payload;
         // next();
        }
      });
    } else {
      res.status(401).json({message:"forbbiden"});
    }
  } else {
    res.status(401).json({message:"forbbiden"});
  }
*/
  if (limit === "" || limit === undefined || limit === null || limit < 0) {
    res.status(400).json({
      message: "limit must over 0 or defined or not empty or not null",
    });
    ;
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "page must over 0 or defined or not empty or not null ",
    });
    ;
  }

  let list = await projects
    .find({}) // You may want to add a query
    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit); // This is your 'page size'
    
  const tradesCollectionCount = await projects.count();

  const totalPages = Math.ceil(tradesCollectionCount / limit);
  //     const currentPage = Math.ceil(tradesCollectionCount % offset)

  res.json({
    list,
    totalPages,
    totalItemProject: tradesCollectionCount,
    currentPage: page,
  });
};



const getProPag = async (req, res, next) => {
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
      message: "Limit must be greater than 0 and defined",
    });
    return; // Return after sending the response
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "Page must be greater than 0 and defined",
    });
    return; // Return after sending the response
  }

  try {
    let list = await projects
      .find({})
      .skip(skipIndex)
      .limit(limit);
      
    const tradesCollectionCount = await projects.count();
    const totalPages = Math.ceil(tradesCollectionCount / limit);

    res.json({
      list,
      totalPages,
      totalItemProject: tradesCollectionCount,
      currentPage: page,
    });
  } catch (error) {
    // Handle any potential errors here
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};




const getProjectNewPag = async (req, res, next) => {

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

    const statue = parseInt(req.query.statue);

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
    res.status(400).json({
      message: "limit must over 0 or defined or not empty or not null",
    });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "page must over 0 or defined or not empty or not null ",
    });
  }

  if (statue === "new") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "new" })

    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "new" })).length;

  const totalPagesNewProjectPag = Math.ceil(tradesCollectionCount / limit);

  res.json({
    
    list,
    totalItemNewProjectPag: tradesCollectionCount,
    totalPagesNewProjectPag,
    currentPage: page,
  });
};

const getProjectInprogressPag = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const statue = parseInt(req.query.statue);

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
    res.status(400).json({
      message: "limit must over 0 or defined or not empty or not null",
    });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "page must over 0 or defined or not empty or not null ",
    });
  }

  if (statue === "Inprogress") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "Inprogress" })

    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "Inprogress" })).length;

  const totalPagesInprogressProjectPag = Math.ceil(
    tradesCollectionCount / limit
  );

  res.json({
    
    list,
    totalItemInprogressProjectPag: tradesCollectionCount,
    totalPagesInprogressProjectPag,
    currentPage: page,
  });
};

const getProjectCompletedPag = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const statue = parseInt(req.query.statue);

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
    res.status(400).json({
      message: "limit must over 0 or defined or not empty or not null",
    });
  }

  if (page === "" || page === undefined || page === null || page < 0) {
    res.status(400).json({
      message: "page must over 0 or defined or not empty or not null ",
    });
  }

  if (statue === "Completed") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "Completed" })

    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "Completed" }))
    .length;

  const totalPages = Math.ceil(tradesCollectionCount / limit);

  res.json({
    list,
    totalItemCompletedProjectPag: tradesCollectionCount,
    totalPagesCompletedProjectPag: totalPages,
    currentPage: page,
  });
};

const getProjectStatue = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const skipIndex = (page - 1) * limit;

  const statue = req.query.statue;

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

  if (statue !== "new" || statue !== "Inprogress" || statue !== "Completed") {
    res
      .status(400)
      .json({ message: "statue must new or progrees or completed " });
  }

  let list = await projects
    .find({ statue: statue })

    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: statue }))
    .length;

  res.json({ list });
};


const getProjectNew = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const statue = parseInt(req.query.statue);

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

  if (statue === "new") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "new" })

    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "new" })).length;

  res.json({ list, totalItemNewProject: tradesCollectionCount });
};


const getProjectInprogress = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const statue = parseInt(req.query.statue);

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

  if (statue === "Inprogress") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "Inprogress" })
    .skip(skipIndex) // Always apply 'skip' before 'limit'
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "Inprogress" }))
    .length;

  res.json({ list, totalItemInprogressProject: tradesCollectionCount });
};


const getProjectCompleted = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const statue = parseInt(req.query.statue);

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

  if (statue === "Completed") {
    projects.statue = statue;
  }

  let list = await projects
    .find({ statue: "Completed" })
    .skip(skipIndex)
    .limit(limit);

  const tradesCollectionCount = (await projects.find({ statue: "Completed" }))
    .length;

  res.json({ list, totalItemCompletedProject: tradesCollectionCount });
};

const getByid = async (req, res, next) => {
  const { id } = req.body;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  } else {
    try {
      const Byid = await projects.findById(id).exec();

      res.json(Byid);
    } catch (e) {
      res.status(400).json({ message: "id is not found" });
    }
  }
};

const getByidNewProject = async (req, res, next) => {
  const { id, statue } = req.body;
  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });

    if (statue === "new") {
      projects.statue = statue;
    }

    res.status(400).json({ id: id });

    // let list =await projects.find({statue:"Completed"})
    //.skip(skipIndex)
    //.limit(limit)
  } else {
    try {
      const Byid = await projects.findById(id).exec();

      res.json(Byid);
    } catch (e) {
      res.status(400).json({ message: "id is not found" });
    }
  }
};

const update = async (req, res, next) => {
  const { priority, statue, date, name, description, id } = req.body;
  let projecttoupdate = await Project.findById(id).exec();

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  } else {
    res.status(200).json({ message: "id is correct" });
  }

  if (priority === null || priority === undefined || priority === "") {
    res.status(400).json({ message: "priority is required" });
  } else {
    if (priority === "high" || priority === "medium" || priority === "low") {
      projecttoupdate.priority = priority;
    } else {
      res
        .status(400)
        .json({ message: "priority is not low or meduim or high" });
    }

    if (statue === null || statue === undefined || statue === "") {
      res.status(400).json({ message: "statue is required" });
    } else {
      if (
        statue === "new" ||
        statue === "in progess" ||
        statue === "completed"
      ) {
        projecttoupdate.statue = statue;
      } else {
        res
          .status(400)
          .json({ message: "statue is not new or in progress or completed" });
      }

      if (date === "" || date === undefined || date === null) {
        res.status(400).json({ message: "date is required" });
      } else {
        if (moment(date, "DD/MM/YYYY", true).isValid()) {
          projecttoupdate.date = date;
        } else {
          res.status(400).json({ message: "date must be DD/MM/YYYY" });
        }
      }

      if (name === "" || name === undefined || name === null) {
        res.status(400).json({ message: "name is required" });
      } else {
        projecttoupdate.name = name;
      }

      if (
        description === "" ||
        description === undefined ||
        description === null
      ) {
        res.status(400).json({ message: "description is required" });
      } else {
        projecttoupdate.description = description;
      }

      const newproject = await projecttoupdate.save();
      res.json(newproject);
    }
  }
};
const deleteProjects = async (req, res, next) => {
  const { id } = req.body;

  if (id === "" || id === undefined || id === null) {
    res.status(400).json({ message: "id is required" });
  }

  let deleteProject;
  try {
    deleteProject = await Project.findById(id);

    if (deleteProject === null) {
      const error = new HttpError(" there is no project to delete");
      return next(error);
    }
  } catch (err) {
    res.status(400).json({ message: "project in not deleted" });
  }

  try {
    await Project.deleteOne({ _id: id }).exec();
  } catch (err) {
    const error = new HttpError("could not delete project", 500);
    return next(error);
  }

  res.status(200).json({ message: "project is deleted" });
};

exports.create = create;
exports.get = get;
exports.getByid = getByid;
exports.update = update;
exports.delete = deleteProjects;

exports.getProjectNewPag = getProjectNewPag;
exports.getProjectInprogressPag = getProjectInprogressPag;
exports.getProjectCompletedPag = getProjectCompletedPag;
exports.getByidNewProject = getByidNewProject;
//exports.upload = upload;
exports.getProjectStatue = getProjectStatue;
exports.uploadProjet = uploadProjet;
exports.getProPag=getProPag;

