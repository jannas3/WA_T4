import { Produtos } from "./Produtos";
import { compras } from "../interface/compras"

export class Shopping implements compras {
    constructor(
        private _productList: Produtos [] = []
    ){}
        
    public get productList(): Produtos [] {
        return [...this._productList];
    }

    insertProduct(product: Produtos ): void {
        this._productList.push(product);
    }

    deleteProduct(productId: number): void {
        const indexProduct = this._productList.findIndex(product => product.id === productId);
        if (indexProduct !== -1) {
            this._productList.splice(indexProduct, 1);
        }
    }

    showCurrentPrice(): number {
        if(this._productList.length){
            let totalPrice = this._productList.reduce((sum, product) => sum + product.price, 0)
            return totalPrice
        }else{
            return 0;
        }
    }
}