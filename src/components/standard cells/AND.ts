import type Electricity from "../Electricity";
import NAND from "./NAND";
import NOT from "./NOT";

export default class AND {
    nandGate: NAND;
    notGate: NOT;

    constructor() {
        this.nandGate = new NAND();
        this.notGate = new NOT();
    }

    /**
     * Set inputs for the AND gate.
     * @param input1 First input signal
     * @param input2 Second input signal
     */
    setInputs(input1: Electricity, input2: Electricity) {
        // AND gate is NAND followed by NOT
        this.nandGate.setInput(input1, input2);
        const nandOutput = this.nandGate.getOutput();
        this.notGate.setInput(nandOutput);
    }

    /**
     * Get output signal from the AND gate.
     * @returns Electricity state output
     */
    getOutput(): Electricity {
        return this.notGate.getOutput();
    }
}