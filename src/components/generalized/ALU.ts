import VoltageToBinary from '../../utils/VoltageToBinary';
import Electricity from '../Electricity';
import AdderANDSubtractor from './AdderANDSubtractor';
import GeneralizedAND from './GeneralizedAND';
import GeneralizedOR from './GeneralizedOR';
import GeneralizedXOR from './GeneralizedXOR';
import GeneralizedNAND from './GeneralizedNAND';

export default class ALU {
    private adderANDSubtractor: AdderANDSubtractor;
    private generalizedAND: GeneralizedAND;
    private generalizedOR: GeneralizedOR;
    private generalizedXOR: GeneralizedXOR;
    private generalizedNAND: GeneralizedNAND;
    private res = new Array<Electricity>(0);

    constructor() {
        this.adderANDSubtractor = new AdderANDSubtractor();
        this.generalizedAND = new GeneralizedAND();
        this.generalizedOR = new GeneralizedOR();
        this.generalizedXOR = new GeneralizedXOR();
        this.generalizedNAND = new GeneralizedNAND()
    }

    /**
     * Get the output of the ALU.
     * @returns Array of output signals
     */
    public setInputs(input1: Electricity[], input2: Electricity[], operation: Electricity[]) {
        let res = [];

        switch (Number(VoltageToBinary(operation))) {
            case 0:
                this.adderANDSubtractor.setInputs(input1, input2, Electricity.LOW);
                res = this.adderANDSubtractor.getOutput();
                this.res = res.slice(0, res.length - 1);
                break;
            case 1:
                this.adderANDSubtractor.setInputs(input1, input2, Electricity.HIGH);
                res = this.adderANDSubtractor.getOutput();
                this.res = res.slice(0, res.length - 1);
                break;
            case 2:
                this.generalizedAND.setInputs(input1, input2);
                this.res = this.generalizedAND.getOutput();
                break;
            case 3:
                this.generalizedOR.setInputs(input1, input2);
                this.res = this.generalizedOR.getOutput();
                break;
            case 4:
                this.generalizedXOR.setInputs(input1, input2);
                this.res = this.generalizedXOR.getOutput();
                break;
            case 5:
                this.generalizedNAND.setInputs(input1, input2);
                this.res = this.generalizedNAND.getOutput();
                break;
            default:
                throw new Error("Unsupported operation for ALU.");
        }
    }

    /**
     * Get the output of the ALU.
     * @returns Array of output signals
     */
    public getOutput(): Electricity[] {
        return this.res;
    }
}