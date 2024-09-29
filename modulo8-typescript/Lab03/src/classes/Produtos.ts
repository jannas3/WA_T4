export class Produtos{
    static productId:number = 1;
    private _id: number = Produtos.productId;
    constructor(
        private _model: string,
        private _manufacturer: string,
        private _price: number
    ){
        Produtos.productId += 1;
    }

    public get id(): number {
        return this._id;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get manufacturer(): string {
        return this._manufacturer;
    }

    public set manufacturer(value: string) {
        this._manufacturer = value;
    }
    public get model(): string {
        return this._model;
    }

    public set model(value: string) {
        this._model = value;
    }
}