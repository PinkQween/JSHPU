import type Electricity from "../components/Electricity";
import decimalToTwoComplementVoltages from "../utils/DecimalToVoltage";

const ALUOps: Record<string, Electricity[]> = {
    ADD:  decimalToTwoComplementVoltages(0, 8),
    SUB:  decimalToTwoComplementVoltages(1, 8),
    AND:  decimalToTwoComplementVoltages(2, 8),
    OR:   decimalToTwoComplementVoltages(3, 8),
    XOR:  decimalToTwoComplementVoltages(4, 8),
    NAND: decimalToTwoComplementVoltages(5, 8)
};

export default ALUOps;