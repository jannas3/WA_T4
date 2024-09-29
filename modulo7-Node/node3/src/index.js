import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import url from "url";
import { LoremIpsum } from "lorem-ipsum";

// Configura o ambiente como produção ou desenvolvimento
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const PORT = process.env.PORT || 3000; // Define uma porta padrão

// Cria servidor
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/") {
        let filePath = './src/static/html/index.html';
        try {
            // Lê o arquivo HTML
            const data = await fs.promises.readFile(filePath, "utf8");
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

            // Substitui o marcador no HTML por uma mensagem padrão ou vazia
            const newData = data.replace("<!-- paragraphs -->", "<p>Por favor, insira a quantidade de parágrafos que deseja gerar.</p>");
            res.end(newData);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro interno do servidor: ' + err.message);
        }
    } else if (parsedUrl.pathname === "/generate") {
        const qtdParagrafo = parseInt(parsedUrl.query.qtdParagrafo) || 0;
        const lorem = new LoremIpsum();
        let paragraphs = generateParagraphs(qtdParagrafo, lorem);

        // Responde com os parágrafos gerados
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(paragraphs);
    } else if (parsedUrl.pathname === "/css/styles.css") {
        let filePath = './src/static/css/styles.css';
        try {
            // Fornece o CSS
            const data = await fs.promises.readFile(filePath, "utf8");
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        } catch (err) {
            res.writeHead(500);
            res.end('Erro interno do servidor');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

// Função para gerar parágrafos
function generateParagraphs(count, lorem) {
    let paragraphs = "";
    for (let i = 0; i < count; i++) {
        paragraphs += `<p>${lorem.generateParagraphs(1)}</p>\n`;
    }
    return paragraphs;
}

// Define a porta de acordo com o arquivo .env
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
