import { Produtos } from "./Produtos";
import { Phone } from "./Phone";
import { TV } from "./Tv";
import { Bicicleta } from "./Bicicleta";

export class ProdutosCompras {
    constructor(
        private _productList: Produtos[] = []
    ){

        const phone1 = new Phone("iPhone 15", "Apple", 4779.99, 128);
        const phone2 = new Phone("Moto G84", "Motorola", 999.99, 256);
        const phone3 = new Phone("Sansumg", "Samsung", 999.99, 128);

        this._productList.push(phone1)
        this._productList.push(phone2)
        this._productList.push(phone3)

        const tv1 = new TV("Sony TVLED", "AOC", 1599.99, 3840, 55);
        const tv2 = new TV("Samsung Smartr Crystal", "Samsung", 1599.99, 3840, 65);
        const tv3 = new TV("LG Thinq", "LG", 1999.99, 3840, 55);

        this._productList.push(tv1)
        this._productList.push(tv2)
        this._productList.push(tv3)

        const bike1 = new Bicicleta("Bicicleta Lazer", "aro", 849.99, 29);
        const bike2 = new Bicicleta("Bicicleta Lazer", "aro", 2899.99, 700);
        const bike3 = new Bicicleta("Bicicleta Lazer", "aro", 3499.99, 650);

        this._productList.push(bike1)
        this._productList.push(bike2)
        this._productList.push(bike3)
    }

    public get productList(): Produtos[] {
        return [...this._productList];
    }

    public getProduct = (productId:number):Produtos =>{
        const indexProdutos= this._productList.findIndex(Produtos => Produtos.id == productId);
        if(indexProdutos!= -1){
            return this._productList[indexProdutos]
        }else{
            throw Error("Produtos not find");
        }
    }
}