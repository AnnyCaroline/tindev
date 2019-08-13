const express = require("express");
const devController = require("./controllers/DevController");
const likeController = require("./controllers/LikeController");
const dislikeController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/", (req, res) => {
  // query paramns /?name=Anny
  // req.query.name

  return res.json({ message: `Hello, ${req.query.name}` });

  // retorna um texto
  // return res.send(`Hello, ${req.query.name}`);
});

// routes.post("/devs", (req, res) => {
//   return res.json(req.body);
// });

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);
routes.post("/devs/:devId/likes", likeController.store);
routes.post("/devs/:devId/dislikes", dislikeController.store);

module.exports = routes;
