import {Router} from 'express';
import { adminRegister } from '../controller/AdminController.js';
import handleMulterMiddlware, { handlePath } from '../multer/handle.profile.js';

const adminRoute =  Router();
function handleEntity(req, res, next) {
    req.body.entity = "adminprofile";
    next();
  }


adminRoute.post("/adminregister",handleEntity, handlePath, handleMulterMiddlware, adminRegister)


export default  adminRoute;