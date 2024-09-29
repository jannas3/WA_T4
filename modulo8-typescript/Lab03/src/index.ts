import { Shopping } from "./classes/Shopping";
import { ProdutosCompras} from "./classes/ProdutosCompras";
import { formCard } from "./utils/Card";
import { TV } from "./classes/Tv";
import { Phone } from "./classes/Phone";
import { Bicicleta } from "./classes/Bicicleta";
import { Produtos } from "./classes/Produtos";

const newCard = <T extends TV | Phone | Bicicleta>(product: T) => {
    const cardList = document.querySelector("#listCards");
    if (cardList) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        colDiv.innerHTML = formCard(product);
        cardList.append(colDiv);
    }
}


const loadProducts = (products :ProdutosCompras):void =>{
    products.productList.forEach(item => {
        if (item instanceof TV || item instanceof Bicicleta || item instanceof Phone) {
            newCard(item);  
        }
    });
}

const updateValueTotal = () =>{
    const element = document.querySelector("#valorCarrinho")!;
    element.textContent = `${productsCart.showCurrentPrice().toFixed(2)} R$`;
    const iconAlert = document.querySelector("#cartCount")!
    const priceCart = document.querySelector("#cartCountPrice")!
    
    if(productsCart.productList.length){
        iconAlert.textContent = productsCart.productList.length.toString()
        iconAlert.closest("li")?.classList.replace("opacity-0", "opacity-100")
        priceCart.classList.replace("opacity-0", "opacity-100");
    }else{
        iconAlert.closest("li")?.classList.replace("opacity-100", "opacity-0")
        priceCart.classList.replace("opacity-100", "opacity-0");
    }
}

const addToCart = (event:Event) =>{
    const card = event.target as HTMLElement;
    const productId = card.dataset.productId!;

    productsCart.insertProduct(listProducts.getProduct(parseInt(productId)))
    updateValueTotal()
}

const setupButtons = () => {
    const btns = document.querySelectorAll("button")
    const libtn = document.querySelectorAll(".openCart")

    btns.forEach(btn => {
        if(btn.textContent == "Adicionar no Carrinho"){
            btn.addEventListener("click", addToCart)
        }
    })

    libtn.forEach(libtn => {
        libtn.addEventListener("click", function (){
            loadModal(productsCart)
        })
    })
}

const formModalProduct = (product: Produtos):string =>{
    return`
    <th scope="row">${product.manufacturer}</th>
    <td>${product.model}</td>
    <td>R$ ${product.price}</td>
    <td>
        <button class="btn btn-danger" data-product-id="${product.id}">Remover</button>
    </td>
    `
}

const removeProductCart = (event:Event) =>{
    const product = event.target as HTMLElement
    const productId = parseInt(product.dataset.productId!)
    productsCart.deleteProduct(productId)
    loadModal(productsCart)
    updateValueTotal()
}

const loadModal = (cartProcts:Shopping) =>{
    const modalTable = document.querySelector("#modalTable > tbody")
    if (modalTable) {
        modalTable.innerHTML = ""
        cartProcts.productList.forEach(product =>{
        const ul = document.createElement("tr");
        ul.innerHTML = formModalProduct(product);
        modalTable.append(ul);
        })

        const btns = document.querySelectorAll("tbody button")
        btns.forEach(btn => {
            if(btn.textContent == "Remover"){
                btn.addEventListener("click", removeProductCart)
            }
        })
    }
}

const productsCart = new Shopping();
const listProducts = new ProdutosCompras();
loadProducts(listProducts)
setupButtons()
