import Electricity from '../Electricity';
import GeneralizedAdder from './Adder';
import GeneralizedXOR from './GeneralizedXOR';

export default class AdderANDSubtractor {
    private generalizedAdder: GeneralizedAdder;
    private generalizedXOR: GeneralizedXOR;
    
    constructor() {
        this.generalizedAdder = new GeneralizedAdder();
        this.generalizedXOR = new GeneralizedXOR();
    }

    /**
     * Set inputs for the Adder and Subtractor.
     * @param input1 First input signal
     * @param input2 Second input signal
     * @param subtractorMode If true, performs subtraction; otherwise, performs addition
     */
    setInputs(input1: Electricity[], input2: Electricity[], subtractorMode: Electricity) {
        const xorMask = Array(input2.length).fill(subtractorMode); // same length, all bits set to subtractorMode
        this.generalizedXOR.setInputs(input2, xorMask);
        const xorOutput = this.generalizedXOR.getOutput();
        this.generalizedAdder.setInputs(input1, xorOutput, subtractorMode);
    }

    /**
     * Get output signal from the Adder and Subtractor.
     * @returns Electricity state output
     */
    getOutput(): Electricity[] {
        return this.generalizedAdder.getOutput();
    }
}