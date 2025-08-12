import Electricity from "../Electricity";
import Transistor from "../Transistor";
import Wire from "../Wire";

/**
 * NAND gate implemented with a 2 NPN and 2 PNP transistors.
 * 
 * When both input is HIGH:
 *   - Transistors doesn't conducts → output LOW
 * Otherwise:
 *   - Transistor ON → output HIGH
 */
export default class NAND {
    /** The single NPN transistor used in this NAND gate */
    tn0: Transistor;
    tn1: Transistor;
    tp0: Transistor;
    tp1: Transistor;
    w0: Wire;

    constructor() {
        this.tn0 = new Transistor('NPN');
        this.tn1 = new Transistor('NPN');
        this.tp0 = new Transistor('PNP');
        this.tp1 = new Transistor('PNP');
        this.w0 = new Wire();
    }

    /**
     * Set input signal to the NAND gate.
     * @param a Electricity state
     * @param b Electricity state
     */
    setInput(a: Electricity, b: Electricity) {
        this.w0.clearDrivers();

        // CMOS NAND: PNPs in parallel (pull-up), NPNs in series (pull-down)
        // PNPs: emitters to HIGH, collectors to output, bases to inputs
        this.tp0.base = a;
        this.tp0.emitter = Electricity.HIGH;
        this.tp0.collector = Electricity.DISCONNECTED; // will be set by output wire

        this.tp1.base = b;
        this.tp1.emitter = Electricity.HIGH;
        this.tp1.collector = Electricity.DISCONNECTED;

        // NPNs: collectors to output, emitters chained, last emitter to LOW
        this.tn1.base = a;
        this.tn1.collector = Electricity.HIGH; // pulled up by default
        this.tn1.emitter = Electricity.LOW;

        this.tn0.base = b;
        this.tn0.collector = Electricity.HIGH; // pulled up by default
        this.tn0.emitter = this.tn1.compute(); // emitter of tn0 is collector of tn1

        // Output wire: driven by both PNPs (pull-up) and tn0.collector (pull-down)
        this.w0.addDriver(this.tp0.compute());
        this.w0.addDriver(this.tp1.compute());
        this.w0.addDriver(this.tn0.compute());
    }

    /**
     * Get output signal from the NAND gate.
     * @returns Electricity state output
     */
    getOutput(): Electricity {
        return this.w0.get();
    }
}