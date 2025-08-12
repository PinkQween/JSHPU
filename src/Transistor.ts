/**
 * Types of transistor supported.
 */
export type TransistorType = 'NPN' | 'PNP';

/**
 * A simplified transistor model for digital logic simulation.
 * 
 * The transistor acts as a switch that connects collector to emitter when ON.
 * - NPN transistors conduct (ON) when base is HIGH and emitter is LOW.
 * - PNP transistors conduct (ON) when base is LOW and emitter is HIGH.
 * 
 * The collector is assumed to be connected to a pull-up resistor (logic HIGH when transistor is OFF).
 */
export default class Transistor {
    /** The transistor type: NPN or PNP */
    type: TransistorType;

    /** Input voltage to the base (true=HIGH, false=LOW) */
    base: boolean;

    /** Voltage at emitter terminal (usually ground or Vcc) */
    private emitter: boolean;

    /** Simulates pull-up resistor pulling collector HIGH when transistor OFF */
    collector: boolean;

    /**
     * Create a transistor instance.
     * @param type transistor type, 'NPN' or 'PNP'
     */
    constructor(type: TransistorType) {
        this.type = type;
        this.base = false;
        this.emitter = false;
        this.collector = true;
    }

    /**
     * Compute the collector voltage based on transistor conduction state.
     * 
     * For NPN:
     *   - ON if base is HIGH and emitter is LOW → collector pulled LOW (false)
     *   - OFF otherwise → collector pulled HIGH (true)
     * 
     * For PNP:
     *   - ON if base is LOW and emitter is HIGH → collector pulled LOW (false)
     *   - OFF otherwise → collector pulled HIGH (true)
     * 
     * @returns boolean collector voltage (true=HIGH, false=LOW)
     */
    compute(): boolean {
        if (this.type === 'NPN') {
            // NPN turns ON when base is HIGH and emitter is LOW
            if (this.base && this.collector) {
                return true; // ON → collector LOW
            }
            return false; // OFF → collector HIGH
        }

        if (this.type === 'PNP') {
            // PNP turns ON when base is LOW and emitter is HIGH
            if (!this.base && this.collector) {
                return true; // ON → collector HIGH (pulled to emitter)
            }
            return false; // OFF → collector LOW
        }

        // Default: output HIGH if type unknown
        return true;
    }
}