import Electricity from "../components/Electricity";
import Transistor from "../components/Transistor";
import Wire from "../components/Wire";

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
    nt: Transistor;
    pt: Transistor;
    w: Wire;

    constructor() {
        this.nt = new Transistor('NPN');
        this.pt = new Transistor('PNP');
        this.w = new Wire();
    }

    /**
     * Set input signal to the NOT gate.
     * @param input Electricity input
     */
    setInput(input: Electricity) {
        this.w.clearDrivers();

        // NPN: emitter to LOW, base = input, collector is output node
        this.nt.emitter = Electricity.LOW;
        this.nt.base = input;

        // PNP: emitter to HIGH, base = input, collector is output node
        this.pt.emitter = Electricity.HIGH;
        this.pt.base = input;

        // Collect transistor outputs into the wire
        this.w.addDriver(this.nt.compute());
        this.w.addDriver(this.pt.compute());
    }

    /**
     * Get output signal from the NOT gate.
     * @returns boolean output (true=HIGH, false=LOW)
     */
    getOutput(): Electricity {
        return this.w.get();
    }
}