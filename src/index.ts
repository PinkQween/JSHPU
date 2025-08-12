import "./extensions";

import Electricity from "./components/Electricity";
import AdderANDSubtractor from "./components/generalized/AdderANDSubtractor";
import decimalToTwoComplementVoltages from "./utils/DecimalToVoltage";
import GeneralizedAdder from './components/generalized/Adder';
import VoltageToBinary from "./utils/VoltageToBinary";

const generalizedAdderANDSubtractorInstance = new AdderANDSubtractor();
const generalizedAdder = new GeneralizedAdder();

const input1 = decimalToTwoComplementVoltages(64, 8);
const input2 = decimalToTwoComplementVoltages(32, 8);

generalizedAdder.setInputs(input1, input2, Electricity.LOW);

console.log(Number(VoltageToBinary(generalizedAdder.getOutput())));

generalizedAdderANDSubtractorInstance.setInputs(input2, input1, Electricity.HIGH);

console.log(VoltageToBinary(generalizedAdderANDSubtractorInstance.getOutput().slice(0, 8)).toSignedInt());