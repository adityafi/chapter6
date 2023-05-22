require("dotenv").config();

const express = require("express");

const { Game } = require("./database/models");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/api/v1/games", async function (req, res) {
  const games = await Game.findAll();

  res.json({
    message: "success fetching games data",
    result: games,
    error: null,
  });
});

app.get("/api/v1/games/:id", async function (req, res) {
  const id = req.params.id;

  const game = await Game.findOne({
    where: {
      id,
    },
  });

  res.json({
    message: "success fetching games detail",
    result: game,
    error: null,
  });
});

app.listen(PORT, function () {
  console.log(`server listening on port: ${PORT}`);
});
