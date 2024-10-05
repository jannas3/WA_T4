import { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

// Função para a rota "/"
export const home = (req: Request, res: Response) => {
    res.send("Hello world!");
};

// Função para a rota "/about"
export const about = (req: Request, res: Response) => {
    const mensagem = 'Algum texto';
    res.render('main/about', {
        layout: false,
        mostrarMensagem: true,
        mensagem,
    });
};

// Função para a rota "/profs"
export const profs = (req: Request, res: Response) => {
    const profs = [
        { nome: 'Davi Fernandes', sala: 1338 },
        { nome: 'Horácio Fernandes', sala: 1348 },
        { nome: "Eduardo Souto", sala: 1327 },
    ];
    res.render('main/profs', {
        layout: false,
        profs,
    });
};

// Função para a rota "/hb1"
export const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
        mensagem: 'Universidade Federal do Amazonas',
        layout: false,
    });
};

// Função para a rota "/hb2"
export const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
};

// Função para a rota "/hb3"
export const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('main/hb3', { profes, layout: false });
};

// Função para a rota "/hb4"
export const hb4 = (req: Request, res: Response) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb4', { technologies, layout: false });
};

// Função para a rota "/lorem"
export const lorem = (req: Request, res: Response) => {
    const { paragraphs } = req.query;
    let loremText = '';
    if (paragraphs) {
        loremText = loremIpsum({
            count: parseInt(paragraphs as string),
            format: "html",
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            random: Math.random,
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            suffix: "\n",
            units: "paragraphs",
        });
    }
    res.render('main/lorem', {
        layout: false,
        loremText,
    });
};

// Função para a rota "/bem-vindo/:nome"
export const bemVindo = (req: Request, res: Response) => {
    const { nome } = req.params;
    res.send(`Seja bem-vindo(a) '${nome}'`);
};
