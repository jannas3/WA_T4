import { Produtos } from "./Produtos";

export class Phone extends Produtos{
    constructor(
        model:string,
        manufacturer:string,
        price:number,
        private _memory: number
        
    ){
        super(model, manufacturer, price)
    }

    public get memory(): number {
        return this._memory;
    }
    public set memory(value: number) {
        this._memory = value;
    }
}