import { Prof, technologies } from './helper.types';


export function listProfs(profs: Prof[]) {
    const list = profs.map((p) => `<li>${p.nome || 'Nome não disponível'} - ${p.sala || 'Sala não disponível'}</li>`);
    return `<ul>${list.join('')}</ul>`;
}


export const listTechs = (technologies: technologies[]) => {
    const listNodeJs = technologies.filter(tec => tec.poweredByNodejs);
    const list = listNodeJs.map(tec => `<li>${tec.name} - ${tec.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
};
