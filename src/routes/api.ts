import { Request, Response, Router } from "express";

const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

router.get("/random", (req: Request, res: Response) => {
  let nRand: number = Math.floor(Math.random() * 100);

  res.json({ number: nRand });
});

router.get("/nome/:nome", (req: Request, res: Response) => {
  let nome: string = req.params.nome;

  res.json({ nome: `Você enviou o nome: ${nome}` });
});

export default router;
