import { Router } from "express";
import { createFaculty } from "../controller/FacultyController.js";
import handleMulterMiddlware, { handlePath } from "../multer/handle.profile.js";

const facultyRoute = Router();

// facultyRoute.use(handlePath)

function handleEntity(req, res, next) {
  req.body.entity = "facultyprofile";
  next();
}

facultyRoute.post(
  "/create-faculty/:admin",
  handleEntity,
  handlePath,
  handleMulterMiddlware,
  createFaculty
);

export default facultyRoute;
