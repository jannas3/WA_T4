import { Product, PrismaClient } from "@prisma/client";
import { CreateProductDto, UpdateProductDto } from "./product.types";

const prisma = new PrismaClient();

export const checkNameIsAvailable = async (
  name: string,
  ignoreId?: string
): Promise<boolean> => {
  const product = await prisma.product.findUnique({
    where: { name },
  });

  if (!product) return true;
  if (ignoreId && product.id === ignoreId) return true;
  return false;
};

export const createProduct = async (
  product: CreateProductDto
): Promise<Product> => {
  return await prisma.product.create({ data: product });
};

export const getAllProducts = async (): Promise<Product[]> => {
  return await prisma.product.findMany();
};

export const readProduct = async (id: string): Promise<Product | null> => {
  return await prisma.product.findUnique({ where: { id } });
};

export const updateProduct = async (
  id: string,
  product: UpdateProductDto
): Promise<Product> => {
  return await prisma.product.update({ data: product, where: { id } });
};

export const deleteProduct = async (id: string): Promise<Product> => {
  return await prisma.product.delete({ where: { id } });
};

export const listProducts = async (
  skip?: number,
  take?: number
): Promise<Product[]> => {
  return await prisma.product.findMany({ skip, take });
};
