import Electricity from "../Electricity";
import OR from "../standard cells/OR"

export default class GeneralizedOR {
    private orGates: OR[];

    constructor() {
        this.orGates = [];
    }

    /**
     * Set inputs for the Generalized AND gate.
     * @param a First input signal array
     * @param b Second input signal
     */
    setInputs(a: Electricity[], b: Electricity[]) {
        this.orGates = [];
        const length = Math.min(a.length, b.length);

        for (let i = 0; i < length; i++) {
            const orGate = new OR();
            orGate.setInputs(a[i], b[i]);
            this.orGates.push(orGate);
        }
    }

    /**
     * Get output from the Generalized AND gate.
     * @returns Array of output signals
     */
    getOutput(): Electricity[] {
        return this.orGates.map(gate => gate.getOutput());
    }
}