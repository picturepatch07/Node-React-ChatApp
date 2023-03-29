const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.HttpStatusCode(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { header: { "Private-Key": "95d01606-7eef-4bb3-a05d-debe4c665e8b" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  //   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
