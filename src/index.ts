import "./extensions";

import Electricity from "./components/Electricity";
import decimalToTwoComplementVoltages from "./utils/DecimalToVoltage";
import VoltageToBinary from "./utils/VoltageToBinary";
import ALU from "./components/generalized/ALU";

const alu = new ALU();

const input1 = 23;
const input2 = 5;

const ans = ~(input1 & input2);

const op = 5;

alu.setInputs(decimalToTwoComplementVoltages(input1, 8),
             decimalToTwoComplementVoltages(input2, 8),
             decimalToTwoComplementVoltages(op, 8));

console.log(ans == VoltageToBinary(alu.getOutput()).toSignedInt());