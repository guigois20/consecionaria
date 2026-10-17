import { Router } from "express";
import Placesmodel from "./placesmodel.js";
import connectDB from "../../config/db.js";
import { Jwtverify } from "../../utils/jwt.js";
import { __dirname } from "../../server.js";
import { sendToS3, uploadImage, downloadimage } from "./controller.js";
import { fileURLToPath, resolve } from "url";
import { rejects } from "assert";

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
  const path = `${__dirname}/tmp/`;
  try {
    const { filename, fullpath, mimeType } = await downloadimage(link, path);

    const fileURL = await sendToS3(filename, fullpath, mimeType);

    res.json(fileURL);
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao baixar imagem", error);
  }
});

router.post(
  "/imagens/file",
  uploadImage().array("files", 10),
  async (req, res) => {
    const { files } = req;
    const filesPromise = new Promise((resolve, reject) => {
      const fileURLarray = [];

      files.forEach(async (file, index) => {
        const { filename, path, mimetype } = file;
        try {
          const fileURL = await sendToS3(filename, path, mimetype);

          if (fileURL) {
            fileURLarray.push(fileURL);
          }
        } catch (error) {
          console.error("deu erro ao enviar imagem por arquivo", error);
          reject(error);
        }
      });
      const id_intervla = setInterval(() => {
        clearInterval(id_intervla);
        if (files.length === fileURLarray.length) resolve(fileURLarray);
      }, 100);
    });
    const fileURLarrayResolved = await filesPromise;
    res.json(fileURLarrayResolved);
  },
);

// {
//   fieldname: 'files',
//   originalname: 'image_1.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   path: 'C:\\dev\\loja\\backend\\tmp\\files-1792240912352.jpg',
//   destination: 'C:\\dev\\loja\\backend/tmp/',
//   filename: 'files-1792240912352.jpg',
//   size: 2136665
// }

export default router;
