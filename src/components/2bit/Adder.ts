import type Electricity from '../Electricity';
import FullAdder from '../FullAdder';
export default class TwoBitAdder {
    private FullAdder0: FullAdder;
    private FullAdder1: FullAdder;

    constructor() {
        this.FullAdder0 = new FullAdder();
        this.FullAdder1 = new FullAdder();
    }

    /**
     * Set inputs for the Two-Bit Adder.
     * @param input1 First two-bit input signal
     * @param input2 Second two-bit input signal
     * @param carryIn Carry input signal
     */
    setInputs(input1: Electricity[], input2: Electricity[], carryIn: Electricity) {
        // Set inputs for the first Full Adder (LSB)
        this.FullAdder0.setInputs(input1[0], input2[0], carryIn);
        
        // Set inputs for the second Full Adder (MSB)
        this.FullAdder1.setInputs(input1[1], input2[1], this.FullAdder0.getOutput()[1]);
    }
    /**
     * Get the sum output from the Two-Bit Adder.
     * @returns Electricity[] state output for sum
     */
    getOutput(): Electricity[] {        return [
            this.FullAdder0.getOutput()[0], // LSB sum
            this.FullAdder1.getOutput()[0], // MSB sum
            this.FullAdder1.getOutput()[1]  // Carry out
        ];
    }
}