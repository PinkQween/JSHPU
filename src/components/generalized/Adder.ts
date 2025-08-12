import Electricity from "../Electricity";
import FullAdder from "../FullAdder";

/**
 * GeneralizedAdder adds multiple bit arrays of equal length.
 * It uses chained FullAdder instances per bit position to handle any number of input bits.
 */
export default class GeneralizedAdder {
    /** 2D array of FullAdders, indexed by [bitIndex][adderIndexInChain] */
    private adders: FullAdder[][] = [];

    /** Number of bits in each input array */
    private bitCount: number = 0;

    /** Number of input arrays to add */
    private inputCount: number = 0;

    /** Cached sum bits after last addition */
    private _sum: Electricity[] = [];

    /** Cached final carry bit after last addition */
    private _carry: Electricity = Electricity.LOW;

    /**
     * Sets the inputs to add and performs the addition.
     * Uses chained FullAdders per bit to sum all inputs plus carry-in.
     * @param cin Initial carry-in (usually Electricity.LOW)
     * @param inputs Variable number of bit arrays to add (each Electricity[] of length bitCount)
     * @throws Error if no inputs provided or input lengths differ
     */
    setInputs(a: Electricity[], b: Electricity[], cin: Electricity) {
        const inputs = [a, b];
        this.inputCount = inputs.length;

        if (this.inputCount === 0) {
            throw new Error("No inputs provided to GeneralizedAdder");
        }

        this.bitCount = inputs[0].length;

        // Validate all inputs have the same length
        for (const input of inputs) {
            if (input.length !== this.bitCount) {
                throw new Error("All input arrays must have the same length");
            }
        }

        this.adders = [];

        // Initialize adders for each bit position
        this.adders = Array.from({ length: this.bitCount }, () => []);

        // Create FullAdders for each bit position
        for (let i = 0; i < this.bitCount; i++) {
            const adder = new FullAdder();
            this.adders[i].push(adder);
        }

        // Perform addition using FullAdders
        let carry = cin;
        for (let i = 0; i < this.bitCount; i++) {
            const aBit = inputs[0][i];
            const bBit = inputs[1][i];
            this.adders[i][0].setInputs(aBit, bBit, carry);
            const [sumBit, carryOut] = this.adders[i][0].getOutput();
            this._sum[i] = sumBit;
            carry = carryOut;
        }

        // Final carry is the last carry output
        this._carry = carry;
    }

    /**
     * Returns the sum bits plus final carry bit after last addition.
     * The returned array length is bitCount + 1 (sum bits + carry out).
     */
    getOutput(): Electricity[] {
        return [...this._sum, this._carry];
    }
}
