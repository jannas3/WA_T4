const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });


const directoryPath = process.argv[2] || './';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Erro ao ler o diretório.');
                res.end();
                return;
            }

           
            let fileList = '';
            files.forEach(file => {
                fileList += `<a href="/file/${file}">${file}</a><br>`;
            });

            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(fileList);
            res.end();
        });
    } else if (req.url.startsWith('/file/')) {
        
        const fileName = req.url.replace('/file/', '');
        const filePath = path.join(directoryPath, fileName);

        
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Arquivo não encontrado.');
                res.end();
                return;
            }

          
            res.writeHead(200, { 'Content-Type': 'text/html' });
           
            res.write(`<pre>${data}</pre>`);
            res.write('<br><a href="/">Voltar</a>');
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Página não encontrada.');
        res.end();
    }
});


server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
