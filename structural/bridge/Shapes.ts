import { IColor } from "./Colors";

export abstract class Shape {
    private color: IColor

    constructor(color: IColor) {
        this.color = color;
        color.ApplyColor();
    }
}

export class Circle extends Shape {
    constructor(color: IColor) {
        console.log("Circle created");
        super(color);
    }
}
export class Square extends Shape {
    constructor(color: IColor) {
        console.log("Square created");
        super(color);
    }
}