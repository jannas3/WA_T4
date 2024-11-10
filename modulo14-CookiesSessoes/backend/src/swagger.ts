import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();
const doc = {
  info: {
    title: "API da Loja Online",
    description: "Documentação da API de Loja Virtual",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  definitions: {
    CreateProdutoDto: {
      nome: "Chave Inglesa",
      preco: 49.0,
      estoque: 15,
    },
    Produto: {
      id: "b6d4e5a1-3443-42b9-bff0-7f6a10de6f8e",
      nome: "Parafuso",
      preco: 5.5,
      estoque: 200,
      createdAt: "2023-11-07T19:40:12.645Z",
      updatedAt: "2023-11-07T19:40:12.645Z",
    },
    Produtos: [
      {
        id: "b6d4e5a1-3443-42b9-bff0-7f6a10de6f8e",
        nome: "Parafuso",
        preco: 5.5,
        estoque: 200,
        createdAt: "2023-11-07T19:40:12.645Z",
        updatedAt: "2023-11-07T19:40:12.645Z",
      },
      {
        id: "1b9d99d0-f083-4f9f-88f5-3e5e5b617f1a",
        nome: "Fita Métrica",
        preco: 18.99,
        estoque: 50,
        createdAt: "2023-11-07T19:35:45.645Z",
        updatedAt: "2023-11-07T19:40:12.645Z",
      },
    ],
    CreateUsuarioDto: {
      nome: "Carlos Silva",
      email: "carlos.silva@gmail.com",
      senha: "carlos123",
      tipoUsuarioId: "52a7c63a-77f8-4a50-853e-9f697f72b7fd",
    },
    Usuario: {
      id: "a7b8c0a9-d60d-42b1-a445-82adf2d8fdb6",
      nome: "Carlos Silva",
      email: "carlos.silva@gmail.com",
      senha: "carlos123",
      tipoUsuarioId: "52a7c63a-77f8-4a50-853e-9f697f72b7fd",
    },
    Usuarios: [
      {
        id: "a7b8c0a9-d60d-42b1-a445-82adf2d8fdb6",
        nome: "Carlos Silva",
        email: "carlos.silva@gmail.com",
        senha: "carlos123",
        tipoUsuarioId: "52a7c63a-77f8-4a50-853e-9f697f72b7fd",
      },
      {
        id: "2e7f3471-e96c-46d3-92c3-fbb79efbcde2",
        nome: "Ana Costa",
        email: "ana.costa@gmail.com",
        senha: "ana1234",
        tipoUsuarioId: "8b42a29e-8fa5-44d4-a3f6-dfeefb1075bc",
      },
    ],
    LoginDto: {
      email: "carlos.silva@gmail.com",
      senha: "carlos123",
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];
swaggerAutogen()(outputFile, routes, doc);
