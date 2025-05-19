import { BlueColor, RedColor } from "./Colors";
import { Circle, Square } from "./Shapes";

const blue:BlueColor = new BlueColor();
const red:RedColor = new RedColor();

const blueCircle:Circle = new Circle(blue);
const redCircle:Circle = new Circle(red);

const blueSquare:Square = new Square(blue);
const redSquare:Square = new Square(red);