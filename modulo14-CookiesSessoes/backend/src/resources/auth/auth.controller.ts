import { Request, Response } from "express";
import { SignUpDto } from "./auth.types";
import {
  buscaUsuarioPorEmail,
  createUsuario,
} from "../usuario/usuario.service";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.contants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkAuth } from "./auth.service";

const signup = async (req: Request, res: Response) => {
  const usuario = req.body as SignUpDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email)) {
      const novoUsuario = await createUsuario({
        ...usuario,
        tipoUsuarioId: TiposUsuarios.CLIENT,
      });
      res.status(StatusCodes.CREATED).json(novoUsuario);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const usuario = await checkAuth({ email, senha });
    if (!usuario)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);

    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const logout = async (req: Request, res: Response) => {
  if (req.session.uid) {
    req.session.destroy((err) => {
      if (err) res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
      res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  }
};

export default { signup, login, logout };
