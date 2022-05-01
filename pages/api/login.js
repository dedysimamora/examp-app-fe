import axios from "axios";
import cookie from "cookie";
import { decrypt } from "../../utils";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { identifier, password } = req.body;
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier,
        password: decrypt(password),
      })
      .then((loginResponse) => {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("Authorization", loginResponse.data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log(error, "<<<<< error");
        res.status(400).json(error);
      });
  } else {
    res.status(400).json({ errorMessage: "bad request" });
  }
}
