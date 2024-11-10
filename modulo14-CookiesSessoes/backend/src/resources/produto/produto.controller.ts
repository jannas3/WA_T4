import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import {
  checkNomeIsAvailable,
  createProduto,
  deleteProduto,
  listProdutos,
  readProduto,
  updateProduto,
} from './produto.service';
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

const index = async (req: Request, res: Response) => {
  const skip = req.query.skip ? parseInt(req.query.skip.toString()) : undefined;
  const take = req.query.take ? parseInt(req.query.take.toString()) : undefined;

  try {
    const produtos = await listProdutos(skip, take);
    res.status(StatusCodes.CREATED).json(produtos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const produto = req.body as CreateProdutoDto;
  try {
    if (await checkNomeIsAvailable(produto.nome)) {
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    if (!produto)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body as UpdateProdutoDto;
  try {
    if (await checkNomeIsAvailable(produto.nome, id)) {
      await updateProduto(id, produto);
      res.status(StatusCodes.NO_CONTENT).json();
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteProduto(id);
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
