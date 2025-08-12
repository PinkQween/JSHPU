import Electricity from "../Electricity";
import AND from "../standard cells/AND"

export default class GeneralizedAND {
    private ANDgates: AND[];

    constructor() {
        this.ANDgates = [];
    }

    /**
     * Set inputs for the Generalized AND gate.
     * @param a First input signal array
     * @param b Second input signal
     */
    setInputs(a: Electricity[], b: Electricity[]) {
        this.ANDgates = [];
        const length = Math.min(a.length, b.length);

        for (let i = 0; i < length; i++) {
            const andGate = new AND();
            andGate.setInputs(a[i], b[i]);
            this.ANDgates.push(andGate);
        }
    }

    /**
     * Get output from the Generalized AND gate.
     * @returns Array of output signals
     */
    getOutput(): Electricity[] {
        return this.ANDgates.map(gate => gate.getOutput());
    }
}