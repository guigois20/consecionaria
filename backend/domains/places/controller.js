import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import multer from "multer";
import { __dirname } from "../../server.js";
import download from "image-downloader";
import mime from "mime-types";

const { S3_ACESS_KEY, S3_SECRET_KEY, BUCKET } = process.env;

export const sendToS3 = async (filename, path, mimeType) => {
  const client = new S3Client({
    region: "sa-east-1",
    credentials: {
      accessKeyId: S3_ACESS_KEY,
      secretAccessKey: S3_SECRET_KEY,
    },
  });

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filename,
    Body: fs.readFileSync(path),
    ContentType: mimeType,
    ACL: "public-read",
  });

  try {
    await client.send(command);
    return `https://${BUCKET}.s3.sa-east-1.amazonaws.com/${filename}`;
  } catch (error) {
    throw error;
  }
};
const getExtension = (path) => {
  const mimeType = mime.lookup(path);
  const contentype = mime.contentType(mimeType);
  const extensao = mime.extension(contentype);

  return { extensao, mimeType };
};

export const downloadimage = async (link, destino) => {
  const { extensao, mimeType } = getExtension(link);
  const filename = Date.now() + "." + extensao;
  const fullpath = `${destino}${filename}`;

  try {
    const options = {
      url: link,
      dest: fullpath, // will be saved to /path/to/dest/photo.jpg
    };

    await download.image(options);
    return { filename, fullpath, mimeType }; // saved to /path/to/dest/photo.jpg
  } catch (error) {
    console.error(error);
  }
};

export const uploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/tmp/`);
    },
    filename: function (req, file, cb) {
      const uniqueSufix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = getExtension(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSufix}.${extension}`);
    },
  });

  return multer({ storage: storage });
};
