import Electricity from "../Electricity";
import NAND from "../standard cells/NAND"

export default class GeneralizedOR {
    private nandGates: NAND[];

    constructor() {
        this.nandGates = [];
    }

    /**
     * Set inputs for the Generalized AND gate.
     * @param a First input signal array
     * @param b Second input signal
     */
    setInputs(a: Electricity[], b: Electricity[]) {
        this.nandGates = [];
        const length = Math.min(a.length, b.length);

        for (let i = 0; i < length; i++) {
            const nandGate = new NAND();
            nandGate.setInputs(a[i], b[i]);
            this.nandGates.push(nandGate);
        }
    }

    /**
     * Get output from the Generalized AND gate.
     * @returns Array of output signals
     */
    getOutput(): Electricity[] {
        return this.nandGates.map(gate => gate.getOutput());
    }
}