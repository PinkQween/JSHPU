import type Electricity from '../Electricity';
import FullAdder from '../FullAdder';
export default class FourBitAdder {
    private fullAdders: FullAdder[];

    constructor() {
        this.fullAdders = [
            new FullAdder(),
            new FullAdder(),
            new FullAdder(),
            new FullAdder()
        ];
    }

    /**
     * Set inputs for the Four-Bit Adder.
     * @param input1 First four-bit input signal
     * @param input2 Second four-bit input signal
     * @param carryIn Carry input signal
     */
    setInputs(input1: Electricity[], input2: Electricity[], carryIn: Electricity) {
        let carry = carryIn;

        // Process each bit using the Full Adders
        for (let i = 0; i < 4; i++) {
            this.fullAdders[i].setInputs(input1[i], input2[i], carry);
            // Update carry for the next bit
            carry = this.fullAdders[i].getOutput()[1];
        }
    }
    
    /**
     * Get the sum output from the Four-Bit Adder.
     * @returns Electricity[] state output for sum
     */
    getOutput(): Electricity[] {
        const output: Electricity[] = [];
        for (let i = 0; i < 4; i++) {
            output.push(this.fullAdders[i].getOutput()[0]); // Sum bits
        }
        output.push(this.fullAdders[3].getOutput()[1]); // Final carry out
        return output;
    }
}