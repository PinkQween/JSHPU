import Electricity from "./Electricity";

/**
 * Types of transistor supported.
 */
export type TransistorType = "NPN" | "PNP";

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
    base: Electricity;

    /** Voltage at the emitter */
    emitter: Electricity;

    /** Voltage at the collector (simulated output) */
    collector: Electricity;

    /**
     * Create a transistor instance.
     * @param type transistor type, 'NPN' or 'PNP'
     */
    constructor(type: TransistorType) {
        this.type = type;
        this.base = Electricity.DISCONNECTED;
        this.emitter = Electricity.DISCONNECTED;
        this.collector = Electricity.HIGH; // Default: pulled up
    }

    /**
     * Compute the collector voltage based on transistor conduction state.
     *
     * For NPN:
     *   - ON if base is HIGH and emitter is LOW → collector pulled LOW.
     *   - OFF otherwise → collector pulled HIGH.
     *
     * For PNP:
     *   - ON if base is LOW and emitter is HIGH → collector pulled HIGH (to emitter).
     *   - OFF otherwise → collector pulled HIGH (via pull-up).
     *
     * @returns collector voltage
     */
    compute(): Electricity {
        if (this.type === "NPN") {
            // NPN ON: base HIGH & emitter LOW
            if (this.base === Electricity.HIGH && this.emitter === Electricity.LOW) {
                this.collector = Electricity.LOW;
                return this.collector;
            }
            // Otherwise OFF → pulled HIGH
            this.collector = Electricity.HIGH;
            return this.collector;
        }

        if (this.type === "PNP") {
            // PNP ON: base LOW & emitter HIGH
            if (this.base === Electricity.LOW && this.emitter === Electricity.HIGH) {
                this.collector = Electricity.HIGH;
                return this.collector;
            }
            // Otherwise OFF → pulled HIGH by resistor
            this.collector = Electricity.HIGH;
            return this.collector;
        }

        // Unknown type → disconnected
        this.collector = Electricity.DISCONNECTED;
        return this.collector;
    }
}