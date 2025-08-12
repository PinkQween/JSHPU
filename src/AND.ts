import Transistor from './Transistor';

/**
 * AND gate implemented with a 2 NPN transistor.
 * 
 * When both input is HIGH:
 *   - Transistors conducts → output HIGH
 * Otherwise:
 *   - Transistor OFF → output LOW
 */
export default class AND {
    /** The single NPN transistor used in this NOT gate */
    t0: Transistor;
    t1: Transistor;

    constructor() {
        this.t0 = new Transistor('NPN');
        this.t1 = new Transistor('NPN');
    }

    /**
     * Set input signal to the NOT gate.
     * @param input boolean input (true=HIGH, false=LOW)
     */
    setInput(a: boolean, b: boolean) {
        this.t0.base = a;
        this.t1.collector = this.t0.compute(); // emitter connected to ground (LOW)
        this.t1.base = b;
    }

    /**
     * Get output signal from the NOT gate.
     * @returns boolean output (true=HIGH, false=LOW)
     */
    getOutput(): boolean {
        return this.t1.compute();
    }
}