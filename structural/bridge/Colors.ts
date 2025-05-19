export interface IColor {
    ApplyColor(): void
}

export class RedColor implements IColor {
    public ApplyColor(): void {
        console.log("Your color is Red")
    }
}

export class BlueColor implements IColor {
    public ApplyColor(): void {
        console.log("Your color is Blue")
    }
}