//src/Student.ts
export class Student{

    static StudentId = 1;
    private _id: number = Student.StudentId

    constructor(
        private _completeName: string,
        private _age: number,
        private _height: number,
        private _weight: number,
    ){
        Student.StudentId += 1;
    }

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get completeName(): string {
        return this._completeName;
    }
    public set completeName(value: string) {
        this._completeName = value;
    }
    public get id(): number {
        return this._id;
    }
}