import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./usermodel.js";
import bcrypt from "bcryptjs";

const route = Router();
const bcryptsalt = bcrypt.genSaltSync();

route.get("/", async (req, res) => {
  try {
    connectDB();
    const userdoc = await User.find();
    res.json(userdoc);
  } catch (e) {
    console.log(e);
  }
});

route.post("/", async (req, res) => {
  connectDB();
  const { name, email, password } = req.body;
  const encryptedPass = bcrypt.hashSync(password, bcryptsalt);

  try {
    const newuserdoc = await User.create({
      name,
      email,
      password: encryptedPass,
    });
    res.json(newuserdoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/login", async (req, res) => {
  connectDB();
  const { email, password } = req.body;

  try {
    const userdoc = await User.findOne({ email });
    if (userdoc) {
      const passwordCorrect = bcrypt.compareSync(password, userdoc.password);
      const { name, _id } = userdoc;
      passwordCorrect
        ? res.json({ name, email, _id })
        : res.status(400).json("senha incorreta");
    } else {
      res.status(400).json("usuario nao encontrado");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default route;
