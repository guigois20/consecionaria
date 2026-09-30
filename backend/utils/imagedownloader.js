import download from "image-downloader";
import mime from "mime-types";

export const downloadimage = async (link, destino) => {
  const mimeType = mime.lookup(link);
  const contentype = mime.contentType(mimeType);
  const extensao = mime.extension(contentype);
  const filename = Date.now() + "." + extensao;
  const fullpath = `${destino}${filename}`;

  try {
    const options = {
      url: link,
      dest: fullpath, // will be saved to /path/to/dest/photo.jpg
    };

    await download.image(options);
    return fullpath; // saved to /path/to/dest/photo.jpg
  } catch (error) {
    console.error(error);
  }
};
