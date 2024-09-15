import http from 'http';
import { promises as fs } from 'fs'; 
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';


dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/') {
   
    try {
      const htmlContent = await fs.readFile('./public/index.html', 'utf8'); 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContent);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro ao carregar o arquivo HTML.');
    }
  } else if (pathname === '/generate') {
   
    const { x } = parsedUrl.query;
    const numParagraphs = parseInt(x, 10) || 1;

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pulvinar elit. Nullam at 
    lectus enim. Fusce non leo sapien. Nullam euismod, odio sit amet efficitur egestas, enim libero auctor nisl.`;

    let paragraphs = '';
    for (let i = 0; i < numParagraphs; i++) {
      paragraphs += `<p>${lorem}</p>`;
    }

   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(paragraphs);
  } else {
   
    const filePath = path.join('./public', pathname);
    try {
      const ext = path.extname(filePath);
      const mimeType = ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : 'text/plain';
      const content = await fs.readFile(filePath); 

      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Arquivo não encontrado.');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
