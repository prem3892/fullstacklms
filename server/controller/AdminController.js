import handleRes from "../helper/handleRes.js";
import bcrypt from "bcrypt";
import adminModel from "../model/admin.model.js";



export const adminRegister = async (req, res) => {
  const { adminName, email, password } = req.body;
  const profile = req.file;

  try {
    if (!adminName || !email || !password || !profile)
      return handleRes(res, 400, "all fields are required");

    const salt = await bcrypt.genSalt(12);
    const hashPass = await bcrypt.hash(password, salt);

    // const checkMail = await adminModel.findOne({ email });
    // if (checkMail) return handleRes(res, 400, "email is already exists");

    const adminCount = await adminModel.countDocuments();

    if (adminCount >= 1)
      return handleRes(res, 400, "cannot create admin more than 1");

    const saveAdmin = new adminModel({
      adminName,
      email,
      password: hashPass,
      profile: profile.filename,
    });

    const registerAdmin = await saveAdmin.save();
    return handleRes(res, 200, registerAdmin);
  } catch (e) {
    handleRes(res, 500, e.message);
  }
};
