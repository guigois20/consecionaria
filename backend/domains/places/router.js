import { Router } from "express";
import Placesmodel from "./placesmodel.js";
import connectDB from "../../config/db.js";
import { Jwtverify } from "../../utils/jwt.js";

const router = Router();

router.post("/", async (req, res) => {
  const {
    modelo,
    cidade,
    placa,
    km,
    cor,
    comprador,
    refcomprador,
    dtcomp,
    vlcomp,
    vendida,
    refvendida,
    dtvend,
    vlvend,
    photo,
    jogoderoda,
  } = req.body;

  try {
    //const { _id } = await Jwtverify(req);
    connectDB();
    const owner = "6a9c59c20b1bd9fbda915b3a";
    const newplacedoc = await Placesmodel.create({
      owner: owner,
      modelo,
      cidade,
      placa,
      km,
      cor,
      comprador,
      refcomprador,
      dtcomp,
      vlcomp,
      vendida,
      refvendida,
      dtvend,
      vlvend,
      photo,
      jogoderoda,
    });

    res.json(newplacedoc);
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao criar o placedoc", error);
  }
});

export default router;
