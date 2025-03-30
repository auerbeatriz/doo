import { Sum, Subtract, Multiply, Divide, OperatorCreator } from "./creators";

const operatorMap = new Map<string, OperatorCreator>([
    ["+", new Sum()],
    ["-", new Subtract()],
    ["/", new Divide()],
    ["*", new Multiply()]
]);


/**
 * I'm considering that it is the front-end responsability to build this function call
 * It will work as the windows calculator, you select a, op, b => receives (a op b) immediately
 */
export function calculate(operands: number[], operation: string): number {
    const operator = operatorMap.get(operation)

    if(!operator) throw new Error(`No operator mapped for ${ operation }`)
    
    return operator.calc(operands)
}

console.log(calculate([10, 5, 2], "+"));       // Output: 17
console.log(calculate([20, 4], "-"));           // Output: 16
console.log(calculate([5, 3, 2], "*"));         // Output: 30
console.log(calculate([100, 5], "/"));          // Output: 20