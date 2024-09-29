import { Produtos } from "../classes/Produtos";

export interface compras{
    insertProduct(product:Produtos):void
    deleteProduct(productId:number):void
    showCurrentPrice():number
}