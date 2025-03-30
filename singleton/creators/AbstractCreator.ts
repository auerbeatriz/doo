import { Operator } from "../operations";

export abstract class OperatorCreator {    
    public abstract createOperator(): Operator

    public calc(operands: number[]): number {
        const operation: Operator = this.createOperator()
        return operation.calc(operands)
    }
}