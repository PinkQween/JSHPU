import type Electricity from "./Electricity";
import AND from "./standard cells/AND";
import XOR from "./standard cells/XOR";

export default class HalfAdder {
    private andGate: AND;
    private xorGate: XOR;

    constructor() {
        this.andGate = new AND();
        this.xorGate = new XOR();
    }

    /**
     * Set inputs for the Half Adder.
     * @param input1 First input signal
     * @param input2 Second input signal
     */
    setInputs(input1: Electricity, input2: Electricity) {
        this.andGate.setInputs(input1, input2);
        this.xorGate.setInputs(input1, input2);
    }

    /**
     * Get the sum output from the Half Adder.
     * @returns Electricity state output for sum
     */
    getOutput(): Electricity[] {
        return [this.xorGate.getOutput(), this.andGate.getOutput()];
    }
}