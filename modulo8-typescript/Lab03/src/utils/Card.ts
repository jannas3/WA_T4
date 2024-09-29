import { Bicicleta } from "../classes/Bicicleta"
import { Phone } from "../classes/Phone"
import { TV } from "../classes/Tv"


const formCard = <T extends TV | Phone | Bicicleta>(product: T): string => {
    let compProd = ""
    if(product instanceof TV){
        compProd = `
        <div class="mb-1">
            <label for="resolucao">Resolução :</label>
            <span id="resolucao" class="card-text text-secondary fw-medium">${product.resolution}px</span>
        </div>
        
        <div class="mb-1">
            <label for="polegadas">Polegadas :</label>
            <span id="polegadas" class="card-text text-secondary fw-medium">${product.inches}″</span>
        </div>`
    }else if(product instanceof Bicicleta){
        compProd = `
        <div class="mb-1">
            <label for="tamanhoAro">Aro :</label>
            <span id="resolucao" class="card-text text-secondary fw-medium">${product.rimSize} polegadas</span>
        </div>`
    }else if(product instanceof Phone){
        compProd = `
        <div class="mb-1">
            <label for="memoria">Memoria :</label>
            <span id="memoria" class="card-text text-secondary fw-medium">${product.memory} GB</span>
        </div>`
    }



    return `
    <div class="card h-100">
        <img src="assets/placeholder-image.png" class="card-img-top" alt="...">
        <div class="card-body bg-body-secondary flex-grow-1 d-flex flex-column">

        <h5 class="card-title text-center">${product.model}</h5>
        <div class="p-2">
            <div class="mb-1">
                <label for="model">Modelo :</label>
                <span id="model" class="card-text text-secondary fw-medium">${product.manufacturer}</span>
            </div>
            ${compProd}
            <div class="mb-1">
                <label for="valor">Valor :</label>
                <span id="valor" class="card-text text-secondary fw-medium">${product.price} R$</span>
            </div>

        </div>
            <button data-product-id="${product.id}" class="btn btn-primary w-100 mt-auto">Adicionar no Carrinho</button>
        </div>
    </div>
    `;
}
export {formCard}