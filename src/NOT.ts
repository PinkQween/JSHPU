import Transistor from './Transistor';

/**
 * NOT gate (inverter) implemented with a single NPN transistor and pull-up resistor.
 * 
 * When input is HIGH:
 *   - Transistor conducts → output LOW
 * When input is LOW:
 *   - Transistor OFF → output HIGH (pulled up)
 */
export default class NOT {
    /** The single NPN transistor used in this NOT gate */
    transistor: Transistor;

    constructor() {
        this.transistor = new Transistor('NPN');
    }

    /**
     * Set input signal to the NOT gate.
     * @param input boolean input (true=HIGH, false=LOW)
     */
    setInput(input: boolean) {
        this.transistor.base = input;
        this.transistor.emitter = false; // emitter connected to ground (LOW)
    }

    /**
     * Get output signal from the NOT gate.
     * @returns boolean output (true=HIGH, false=LOW)
     */
    getOutput(): boolean {
        return this.transistor.compute();
    }
}