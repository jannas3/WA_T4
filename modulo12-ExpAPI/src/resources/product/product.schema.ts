import Joi from "joi";

export const productSchema = Joi.object().keys({
  name: Joi.string().min(2).max(40).required(),
  price: Joi.number().required(),
  stockQuantity: Joi.number().integer().required(),
});

const produto = {
  name: "Computador",
  price: 10.0,
  stockQuantity: 5,
};

const result = productSchema.validate(produto);
console.log(result.error?.details);
