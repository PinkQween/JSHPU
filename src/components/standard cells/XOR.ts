import type Electricity from '../Electricity';
import NAND from './NAND';
import OR from './OR';
import AND from './AND';

/**
 * XOR gate implemented using basic gates (NAND, OR, AND).
 * Returns HIGH if exactly one input is HIGH, else LOW.
 */
export default class XOR {
    or: OR;
    nand: NAND;
    and: AND;

    constructor() {
        this.or = new OR();
        this.nand = new NAND();
        this.and = new AND();
    }

    /**
     * Set inputs for the XOR gate.
     * @param input1 First input signal
     * @param input2 Second input signal
     */
    setInputs(input1: Electricity, input2: Electricity) {
        this.or.setInputs(input1, input2);
        this.nand.setInput(input1, input2);
        const orOut = this.or.getOutput();
        const nandOut = this.nand.getOutput();
        this.and.setInputs(orOut, nandOut);
    }

    /**
     * Get output signal from the XOR gate.
     * @returns Electricity state output
     */
    getOutput(): Electricity {
        return this.and.getOutput();
    }
}
