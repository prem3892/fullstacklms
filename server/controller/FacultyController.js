import handleRes from "../helper/handleRes.js";
import facultyModel from "../model/faculty.model.js";

export const createFaculty = async (req, res) => {
  const { facultyName, email, password, adminId } = req.body;
  const { admin } = req.params;
  const profile = req.file;
  try {
    if (!facultyName || !email || !password)
      return handleRes(res, 400, "all fields are required");

    if (!admin) handleRes(res, 400, "invalid params admin");

    const checkMail = await facultyModel.findOne({ email });
    if (checkMail) return handleRes(res, 400, "email is already exists");

    const faculty = new facultyModel({
      facultyName,
      email,
      password,
      profile: profile.filename,
      adminId
    });

    if (faculty) {
      const fuser = await faculty.save();
      return handleRes(res, 201, true, fuser);
    }
  } catch (e) {
    handleRes(res, 500, e.message);
  }
};
