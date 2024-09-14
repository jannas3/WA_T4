const http = require('http');
const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2] || './';  

const server = http.createServer((req, res) => {
    // Lê o conteúdo do diretório fornecido
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Erro ao ler o diretório.');
            res.end();
            return;
        }

       
        let fileList = '';
        files.forEach(file => {
            fileList += `${file}<br>`; 
        });

      
        res.writeHead(200, {'Content-Type': 'text/html'});
       
        res.write(fileList);
        res.end();
    });
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
