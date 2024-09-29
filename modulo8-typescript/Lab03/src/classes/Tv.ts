import { Produtos } from "./Produtos";

export class TV extends Produtos {
    constructor(
        model:string,
        manufacturer:string,
        price:number,
        private _resolution: number,
        private _inches: number
    ){
        super(model, manufacturer, price)
    }

    public get inches(): number {
        return this._inches;
    }
    public set inches(value: number) {
        this._inches = value;
    }
    public get resolution(): number {
        return this._resolution;
    }
    public set resolution(value: number) {
        this._resolution = value;
    }
}