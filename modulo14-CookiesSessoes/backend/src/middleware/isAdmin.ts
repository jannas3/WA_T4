import { NextFunction, Request, Response } from "express";
import { checkIsAdmin } from "../resources/usuario/usuario.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const uid = req.session.uid;
  if (uid && (await checkIsAdmin(uid))) next();
  else res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
};

export default isAdmin;
