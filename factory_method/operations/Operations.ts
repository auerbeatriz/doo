import { Operator } from "./Operator.interface"

export class DivideOperator implements Operator {
    calc(operands: number[]): number {
        if (operands.length === 0) throw new Error("No operands provided");
        return operands.reduce((acc, currentValue) => acc / currentValue)
    }
}

export class MultiplyOperator implements Operator {
    calc(operands: number[]): number {
        return operands.reduce((acc, currentValue) => acc * currentValue, 1)
    }
}

export class SubtractOperator implements Operator {
    calc(operands: number[]): number {
        return operands.reduce((acc, currentValue) => acc - currentValue)
    }
}

export class SumOperator implements Operator {
    calc(operands: number[]): number {
        return operands.reduce((acc, currentValue) => acc + currentValue, 0)
    }
}