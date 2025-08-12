import type Electricity from '../Electricity';
import XOR from '../standard cells/XOR';
import GeneralizedAdder from './Adder';
export default class AdderANDSubtractor {
    private generalizedAdder: GeneralizedAdder;
    private xorGates: XOR[];
    
    constructor() {
        this.generalizedAdder = new GeneralizedAdder();
        this.xorGates = [];
    }

    /**
     * Set inputs for the Adder and Subtractor.
     * @param input1 First input signal
     * @param input2 Second input signal
     * @param subtractorMode If true, performs subtraction; otherwise, performs addition
     */
    setInputs(input1: Electricity[], input2: Electricity[], subtractorMode: Electricity) {
        this.xorGates = []; // Reset the xorGates array

        for (let i = 0; i < input2.length; i++) {
            const xorGate = new XOR();
            xorGate.setInputs(input2[i], subtractorMode);
            this.xorGates.push(xorGate);
        }

        this.generalizedAdder.setInputs(input1, this.xorGates.map(gate => gate.getOutput()), subtractorMode);
    }

    /**
     * Get output signal from the Adder and Subtractor.
     * @returns Electricity state output
     */
    getOutput(): Electricity[] {
        return this.generalizedAdder.getOutput();
    }
}