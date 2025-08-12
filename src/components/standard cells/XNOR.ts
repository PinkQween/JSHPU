import type Electricity from '../Electricity';
import XOR from './XOR';
import NOT from './NOT';

/**
 * XNOR gate implemented using XOR and NOT gates.
 * Returns HIGH if both inputs are the same, else LOW.
 */
export default class XNOR {
    xor: XOR;
    not: NOT;

    constructor() {
        this.xor = new XOR();
        this.not = new NOT();
    }

    /**
     * Set inputs for the XNOR gate.
     * @param input1 First input signal
     * @param input2 Second input signal
     */
    setInputs(input1: Electricity, input2: Electricity) {
        this.xor.setInputs(input1, input2);
        const xorOut = this.xor.getOutput();
        this.not.setInput(xorOut);
    }

    /**
     * Get output signal from the XNOR gate.
     * @returns Electricity state output
     */
    getOutput(): Electricity {
        return this.not.getOutput();
    }
}
