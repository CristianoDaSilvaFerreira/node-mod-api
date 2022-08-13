import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response): void => {
  res.json({ pong: true });
};

export const random = (req: Request, res: Response): void => {
  let nRand: number = Math.floor(Math.random() * 100);

  res.json({ number: nRand });
};

export const nome = (req: Request, res: Response): void => {
  let nome: string = req.params.nome;

  res.json({ nome: `Você enviou o nome: ${nome}` });
};

export const createPhrase = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { author, txt } = req.body;

  let newPhrase = await Phrase.create({ author, txt });

  res.status(201);

  res.json({ id: newPhrase.id, author, txt });
};

export const listPhrases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let list = await Phrase.findAll();

  res.json({ list });
};

export const getPhrases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { id } = req.params;

  let phrase = await Phrase.findByPk(id);

  if (phrase) {
    res.json({ phrase });
  } else {
    res.json({
      error: `Não foi encontrada nenhuma frase com o ID ${id} informado.`,
    });
  }
};

export const updatePhrases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { id } = req.params;

  let { author, txt } = req.body;

  let phrase = await Phrase.findByPk(id);

  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;

    await phrase.save();

    res.json({ phrase });
  } else {
    res.json({
      error: `Não foi encontrada nenhuma frase com o ID ${id} informado.`,
    });
  }
};

export const deletePhrases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { id } = req.params;

  await Phrase.destroy({
    where: { id },
  });
  res.json({});
};
