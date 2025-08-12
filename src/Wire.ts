import Electricity from './Electricity';


/**
 * Wire for digital logic simulation.
 * Supports multiple drivers (sources) and detects bus contention.
 */
export default class Wire {
    /** List of voltages driven by sources (transistors, etc) */
    private drivers: Electricity[] = [];

    /** Add a driver to the wire (e.g., a transistor outputting to this wire) */
    addDriver(v: Electricity) {
        this.drivers.push(v);
    }

    /** Remove all drivers (for reset or re-simulation) */
    clearDrivers() {
        this.drivers = [];
    }

    /**
     * Get the resolved voltage on the wire:
     *  - If all drivers are HIGH, returns HIGH
     *  - If all drivers are LOW, returns LOW
     *  - If all drivers are DISCONNECTED, returns DISCONNECTED
     *  - If drivers conflict (HIGH and LOW), returns DISCONNECTED (bus contention)
     */
    get(): Electricity {
        if (this.drivers.length === 0) return Electricity.DISCONNECTED;
        const hasHigh = this.drivers.includes(Electricity.HIGH);
        const hasLow = this.drivers.includes(Electricity.LOW);
        if (hasHigh && hasLow) return Electricity.LOW; // LOW overrides HIGH
        if (hasHigh) return Electricity.HIGH;
        if (hasLow) return Electricity.LOW;
        return Electricity.DISCONNECTED;
    }

}
