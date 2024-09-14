const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const directoryPath = process.argv[2] || './';  


const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Erro ao ler o diretório.');
            res.end();
            return;
        }

      
        let fileList = '';
        files.forEach(file => {
            fileList += `${file}<br>`; 
        });

       
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileList);
        res.end();
    });
});


server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
