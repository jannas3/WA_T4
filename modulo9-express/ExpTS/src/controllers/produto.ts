import { Request, Response } from "express";
import axios from "axios";
import { Produto } from "../types/produto";

export const index = async (req: Request, res: Response) => {
    try {
        const { data: produtos } = await axios.get<Produto[]>(`${process.env.DB_SERVER}/produtos`);
        console.log(produtos);
        res.render("produto/index", { produtos });
    } catch (err) {
        res.status(500).json(err);
    }
};



//const create = async(req: Request, res: Response)=>{
  //  if(req.method === 'GET'){
    //    res.render('produto/create');
   // }
//};
// Função para renderizar o formulário de criação
export const create = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        res.render('produto/create'); // Renderiza o formulário
    } else if (req.method === 'POST') {
        try {
            const novoProduto: Produto = req.body; // Obtém os dados do formulário

            // Enviar dados para a API ou banco de dados
            await axios.post(`${process.env.DB_SERVER}/produtos`, novoProduto);

            // Redireciona para a lista de produtos após a criação
            res.redirect('/produtos');
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao criar produto"); // Lidar com erro
        }
    }
};


const read = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        // Aguarde a resposta do Axios
        const { data: produto } = await axios.get(`${process.env.DB_SERVER}/produtos/${id}`);
        
        // Renderize a view com o produto
        res.render("produto/view", produto );
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao ler produto"); 
    }
};





export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (req.method === 'GET') {
        try {
            const { data: produto } = await axios.get(`${process.env.DB_SERVER}/produtos/${id}`);
            res.render("produto/update", { produto }); // Renderiza o formulário de atualização
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao carregar produto para atualização");
        }
    } else if (req.method === 'POST') {
        try {
            const produtoAtualizado: Produto = req.body; // Obtém os dados do formulário
            await axios.put(`${process.env.DB_SERVER}/produtos/${id}`, produtoAtualizado); // Atualiza o produto
            res.redirect('/produtos'); // Redireciona após a atualização
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao atualizar produto");
        }
    }
};

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await axios.delete(`${process.env.DB_SERVER}/produtos/${id}`); // Remove o produto
        res.redirect('/produtos'); // Redireciona após a remoção
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao remover produto");
    }
};

export default {index, 
    create,
     read, 
     update,
      remove}