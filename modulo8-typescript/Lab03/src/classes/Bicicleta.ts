import { Produtos } from "./Produtos";

export class Bicicleta extends Produtos{
    constructor(
        model:string,
        manufacturer:string,
        price:number,
        private _rimSize: number//Colocar os valores em polegadas.
    ){
        super(model, manufacturer, price)
    }


    public get rimSize(): number {
        return this._rimSize;
    }
    
    public set rimSize(value: number) {
        this._rimSize = value;
    }
}