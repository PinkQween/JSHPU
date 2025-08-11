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
    emitter: boolean;

    /** Simulates pull-up resistor pulling collector HIGH when transistor OFF */
    collectorPulledHigh: boolean;

    /**
     * Create a transistor instance.
     * @param type transistor type, 'NPN' or 'PNP'
     */
    constructor(type: TransistorType) {
        this.type = type;
        this.base = false;
        this.emitter = false;
        this.collectorPulledHigh = true;
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
            if (this.base && !this.emitter) {
                return false; // transistor ON, collector LOW
            }
            return true;    // transistor OFF, collector HIGH
        }
        if (this.type === 'PNP') {
            if (!this.base && this.emitter) {
                return false; // transistor ON, collector LOW
            }
            return true;    // transistor OFF, collector HIGH
        }
        return true; // default HIGH
    }
}