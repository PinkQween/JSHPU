import type Electricity from "./Electricity";
import AND from "./standard cells/AND";
import OR from "./standard cells/OR";
import XOR from "./standard cells/XOR";

export default class FullAdder {
    private xor1: XOR;
    private xor2: XOR;
    private and1: AND;
    private and2: AND;
    private or: OR;

    constructor() {
        this.xor1 = new XOR();
        this.xor2 = new XOR();
        this.and1 = new AND();
        this.and2 = new AND();
        this.or = new OR();
    }
    /**
     * Set inputs for the Full Adder.
     * @param input1 First input signal
     * @param input2 Second input signal
     * @param carryIn Carry input signal
     */
    setInputs(input1: Electricity, input2: Electricity, carryIn: Electricity) {
        // First XOR for sum bit
        this.xor1.setInputs(input1, input2);
        const xor1Output = this.xor1.getOutput();

        // Second XOR for final sum with carry
        this.xor2.setInputs(xor1Output, carryIn);
        
        // AND gates for carry out
        this.and1.setInputs(input1, input2);
        this.and2.setInputs(xor1Output, carryIn);

        // OR gate for final carry out
        this.or.setInputs(this.and1.getOutput(), this.and2.getOutput());
    }

    /**
     * Get the sum output from the Full Adder.
     * @returns Electricity[] state output for sum
     */
    getOutput(): Electricity[] {
        return [this.xor2.getOutput(), this.or.getOutput()];
    }
}