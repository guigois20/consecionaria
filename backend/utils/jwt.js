import jwt from "jsonwebtoken";
import "dotenv";

const JWT_SECRET = process.env.JWT_SECRET;

export const Jwtverify = (req) => {
  const { token } = req.cookies;

  return new Promise((resolve, reject) => {
    if (token) {
      const userinfo = jwt.verify(token, JWT_SECRET, {}, (error, userinfo) => {
        if (error) {
          console.error(
            "deu algum erro com a verificacao dos cookies : ",
            error,
            reject(error),
          );
        }

        resolve(userinfo);
      });
    } else {
      return null;
    }
  });
};

export const JWTsign = (newuserobj) => {
  return new Promise((resolve, reject) => {
    jwt.sign(newuserobj, JWT_SECRET, { expiresIn: "1d" }, (error, token) => {
      if (error) {
        console.error("deu algum erro com ao assinar os cookies : ", error);
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};
