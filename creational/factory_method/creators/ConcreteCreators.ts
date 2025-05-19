import { DivideOperator, MultiplyOperator, Operator, SubtractOperator, SumOperator } from "../operations"
import { OperatorCreator } from "./AbstractCreator"

export class Divide extends OperatorCreator {
    public createOperator(): Operator {
        return new DivideOperator()
    }
}

export class Multiply extends OperatorCreator {
    public createOperator(): Operator {
        return new MultiplyOperator()
    }
}

export class Subtract extends OperatorCreator {
    public createOperator(): Operator {
        return new SubtractOperator()
    }
}

export class Sum extends OperatorCreator {
    public createOperator(): Operator {
        return new SumOperator()
    }
}