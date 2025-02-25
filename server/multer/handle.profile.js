import multer from "multer";

import path from "path";
import handleRes from "../helper/handleRes.js";

let getEntity;
export function handlePath(req, res, next) {
  // let getPublicDir = path.join("public");
  getEntity = req.body.entity;
  // console.log(getEntity)
  next();
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, `${path.join("public")}/${getEntity}`);
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

let multerMiddleware = multer({ storage }).single("profile");
function handleMulterMiddlware(req, res, next) {
  multerMiddleware(req, res, (err) => {
    if (err && err.field !== "profile") {
      // console.log(err)
      return handleRes(res, 400, "invalid profile field", err);
    }

    if (req.file && req.file.mimetype !== "image/png")
      return handleRes(res, 400, "Allow only ong");
    next();
  });
}
export default handleMulterMiddlware;
