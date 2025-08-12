import Electricity from "../Electricity";
import XOR from "../standard cells/XOR"

export default class GeneralizedOR {
    private xorGates: XOR[];

    constructor() {
        this.xorGates = [];
    }

    /**
     * Set inputs for the Generalized AND gate.
     * @param a First input signal array
     * @param b Second input signal
     */
    setInputs(a: Electricity[], b: Electricity[]) {
        this.xorGates = [];
        const length = Math.min(a.length, b.length);

        for (let i = 0; i < length; i++) {
            const xorGate = new XOR();
            xorGate.setInputs(a[i], b[i]);
            this.xorGates.push(xorGate);
        }
    }

    /**
     * Get output from the Generalized AND gate.
     * @returns Array of output signals
     */
    getOutput(): Electricity[] {
        return this.xorGates.map(gate => gate.getOutput());
    }
}