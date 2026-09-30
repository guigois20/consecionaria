import { Router } from "express";
import Placesmodel from "./placesmodel.js";
import connectDB from "../../config/db.js";
import { Jwtverify } from "../../utils/jwt.js";
import { downloadimage } from "../../utils/imagedownloader.js";
import { __dirname } from "../../index.js";

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
    const { _id } = await Jwtverify(req);
    connectDB();
    console.log(_id);
    //const owner = "6a9c59c20b1bd9fbda915b3a";
    const newplacedoc = await Placesmodel.create({
      owner: _id,
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

router.post("/imagens/link", async (req, res) => {
  const { link } = req.body;
  try {
    const filename = await downloadimage(link, `${__dirname}/tmp/`);
    res.json(filename);
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao baixar imagem", error);
  }
});

export default router;
