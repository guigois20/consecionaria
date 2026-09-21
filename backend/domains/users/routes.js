import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv";
import { JWTsign, Jwtverify } from "../../utils/jwt.js";

const route = Router();
const bcryptsalt = bcrypt.genSaltSync();
const JWT_SECRET = process.env.JWT_SECRET;

route.get("/", async (req, res) => {
  try {
    connectDB();
    const userdoc = await User.find();
    res.json(userdoc);
  } catch (e) {
    console.log(e);
  }
});

route.get("/profile", async (req, res) => {
  const userinfo = Jwtverify(req);
  res.json(userinfo);
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

      if (passwordCorrect) {
        const newuserobj = { name, email, _id };
        try {
          const token = await JWTsign(newuserobj);
          res.cookie("token", token).json(newuserobj);
        } catch (error) {
          console.log("erro no token", error);
        }
      } else {
        res.status(400).json("usuario nao encontrado");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/logout", async (req, res) => {
  console.log("logout");
  res.clearCookie("token").json("ok");
});

export default route;
