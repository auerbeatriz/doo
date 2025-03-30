import { DivideOperator, MultiplyOperator, Operator, SubtractOperator, SumOperator } from "../operations"
import { OperatorCreator } from "./AbstractCreator"

export class Divide extends OperatorCreator {
    private static instance: Divide | undefined
    private constructor() { super() }

    public static getInstance(): OperatorCreator {
        if(!this.instance) {
            this.instance = new Divide()
        } 

        return this.instance
    }

    public createOperator(): Operator {
        return new DivideOperator()
    }
}

export class Multiply extends OperatorCreator {
    private static instance: Multiply | undefined
    private constructor() { super() }

    public static getInstance(): OperatorCreator {
        if(!this.instance) {
            this.instance = new Multiply()
        } 

        return this.instance
    }

    public createOperator(): Operator {
        return new MultiplyOperator()
    }
}

export class Subtract extends OperatorCreator {
    private static instance: Subtract | undefined
    private constructor() { super() }

    public static getInstance(): OperatorCreator {
        if(!this.instance) {
            this.instance = new Subtract()
        } 

        return this.instance
    }

    public createOperator(): Operator {
        return new SubtractOperator()
    }
}

export class Sum extends OperatorCreator {
    private static instance: Sum | undefined
    private constructor() { super() }

    public static getInstance(): OperatorCreator {
        if(!this.instance) {
            this.instance = new Sum()
        } 

        return this.instance
    }

    public createOperator(): Operator {
        return new SumOperator()
    }
}