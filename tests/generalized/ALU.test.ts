import "../../src/extensions";

import ALU from "../../src/components/generalized/ALU";
import ALUOps from "../../src/data/ALUOps";
import decimalToTwoComplementVoltages from "../../src/utils/DecimalToVoltage";
import VoltageToBinary from "../../src/utils/VoltageToBinary";

describe("ALU Operations", () => {
    let alu: ALU;

    beforeAll(() => {
        alu = new ALU();    
    });

    test("ADD operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(32), decimalToTwoComplementVoltages(64), ALUOps.ADD);
        expect(VoltageToBinary(alu.getOutput()).toSignedInt()).toEqual(32+64);
    });

    test("SUB operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(64), decimalToTwoComplementVoltages(32), ALUOps.SUB);
        console.log(alu.getOutput());
        expect(VoltageToBinary(alu.getOutput()).toSignedInt()).toEqual(64-32);
    });

    test("AND operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(5), decimalToTwoComplementVoltages(3), ALUOps.AND);
        expect(VoltageToBinary(alu.getOutput()).toSignedInt()).toEqual(5 & 3);
    });

    test("OR operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(5), decimalToTwoComplementVoltages(3), ALUOps.OR);
        expect(VoltageToBinary(alu.getOutput()).toSignedInt()).toEqual(5 | 3);
    });

    test("XOR operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(5), decimalToTwoComplementVoltages(3), ALUOps.XOR);
        expect(VoltageToBinary(alu.getOutput()).toSignedInt()).toEqual(5 ^ 3);
    });

    test("NAND operation", () => {
        alu.setInputs(decimalToTwoComplementVoltages(5), decimalToTwoComplementVoltages(3), ALUOps.NAND);
        expect(Number(VoltageToBinary(alu.getOutput()))).toEqual(~(5 & 3) & 0xFF); // Assuming 8-bit output
    });
});