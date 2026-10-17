import React from "react";
import axios from "axios";

const photos = ({ photo, setPhoto, photolink, setPhotolink }) => {
  const uploadphotolink = async (e) => {
    e.preventDefault();

    if (photolink) {
      try {
        const { data: filename } = await axios.post("/places/imagens/link", {
          link: photolink,
        });

        setPhoto((prevValue) => [...prevValue, filename]);
        console.log("imagem enviada com sucesso");
      } catch (error) {
        alert("deu erro ao enviar imagem por link", JSON.stringify.error);
      }
    }
  };

  const uploadPhoto = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    const formData = new FormData();
    const filesArray = [...files];

    filesArray.forEach((file) => formData.append("files", file));

    try {
      const { data: urlArray } = await axios.post(
        "/places/imagens/file",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      setPhoto((prevValue) => [...prevValue, ...urlArray]);
      console.log(files);
    } catch (error) {
      alert("deu erro ao enviar imagem", JSON.stringify.error);
    }
  };
  return (
    <div>
      <div className="photolink flex gap-2 py-2">
        <input
          className="w-full min-w-auto truncate rounded-2xl border text-center"
          type="url"
          name="photolink"
          id="photolink"
          value={photolink}
          onChange={(e) => {
            setPhotolink(e.target.value);
          }}
          placeholder="enviar foto pelo link"
        />
        <button
          onClick={uploadphotolink}
          className="min-w-32 rounded-2xl border bg-gray-100 text-center transition hover:cursor-pointer hover:bg-gray-500"
        >
          enviar foto
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {photo.map((photo) => (
          <img
            className="aspect-square rounded-2xl object-cover"
            src={`${photo}`}
            alt="foto da moto"
          />
        ))}

        <label
          htmlFor="file"
          className="flex aspect-square items-center justify-center gap-2 rounded-2xl border bg-orange-200 hover:cursor-pointer hover:bg-orange-300"
        >
          upload
          <input
            type="file"
            id="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
        </label>
      </div>
    </div>
  );
};

export default photos;
