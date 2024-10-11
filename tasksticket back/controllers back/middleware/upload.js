const util = require("util");
const multer = require("multer");
//const __dirname = require("__dirname");
const path = require("path");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  

  destination: (req, file, cb) => {
    const __basedir = path.dirname(__filename);
    cb(null, path.join(__basedir, "assets"));
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
