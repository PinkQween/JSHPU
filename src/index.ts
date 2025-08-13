import "./extensions";

import decimalToTwoComplementVoltages from "./utils/DecimalToVoltage";
import VoltageToBinary from "./utils/VoltageToBinary";
import ALU from "./components/generalized/ALU";
import ALUOps from "./data/ALUOps";
import Electricity from "./components/Electricity";
import GeneralizedAdder from "./components/generalized/Adder";

const alu = new GeneralizedAdder();

const input1 = 23;
const input2 = 5;

const ans = input1 + input2; // Change this to test different operations

const op = ALUOps.ADD;

alu.setInputs([Electricity.DISCONNECTED],
             [Electricity.HIGH], Electricity.DISCONNECTED);

// console.log(ans == VoltageToBinary(alu.getOutput()).toSignedInt());

console.log(alu.getOutput());