import type Electricity from '../Electricity';
import NOR from './NOR';
import NOT from './NOT';
export default class OR {
    nor: NOR;
    not: NOT;

    constructor() {
        this.nor = new NOR();
        this.not = new NOT();
    }

    /**
     * Set inputs for the OR gate.
     * @param input1 First input signal
     * @param input2 Second input signal
     */
    setInputs(input1: Electricity, input2: Electricity) {
        // OR gate is NOR followed by NOT
        this.nor.setInput(input1, input2);
        const norOutput = this.nor.getOutput();
        this.not.setInput(norOutput);
    }

    /**
     * Get output signal from the OR gate.
     * @returns Electricity state output
     */
    getOutput(): Electricity {
        return this.not.getOutput();
    }
}