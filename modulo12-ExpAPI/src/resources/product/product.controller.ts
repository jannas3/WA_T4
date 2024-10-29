import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import {
  checkNameIsAvailable,
  getAllProducts,
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} from "./product.service";
import { CreateProductDto, UpdateProductDto } from "./product.types";

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Erro ao buscar produtos" });
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: CreateProductDto = req.body;
    if (await checkNameIsAvailable(product.name)) {
      const newProduct = await createProduct(product);
      res.status(StatusCodes.CREATED).json(newProduct);
    } else {
      res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Erro ao criar produto" });
  }
};

const read = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await readProduct(id);
    if (!product) {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } else {
      res.status(StatusCodes.OK).json(product);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Erro ao buscar produto" });
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const product: UpdateProductDto = req.body;
  try {
    if (await checkNameIsAvailable(product.name, id)) {
      const updatedProduct = await updateProduct(id, product);
      res.status(StatusCodes.OK).json(updatedProduct);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Erro ao atualizar produto" });
  }
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProduct(id);
    res.status(StatusCodes.OK).json(deletedProduct);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Erro ao deletar produto" });
  }
};

export default { index, create, read, update, remove };
