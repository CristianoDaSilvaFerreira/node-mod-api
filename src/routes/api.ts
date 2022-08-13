import { Request, Response, Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/random", ApiController.random);

router.get("/nome/:nome", ApiController.nome);

router.post("/frases", ApiController.createPhrase);

router.get("/frases", ApiController.listPhrases);

router.get("/frase/:aleatoria", ApiController.randomPhrases);

router.get("/frase/:id", ApiController.getPhrases);

router.put("/frase/:id", ApiController.updatePhrases);

router.delete("/frase/:id", ApiController.deletePhrases);





export default router;
