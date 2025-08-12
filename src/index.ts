import FullAdder from "./components/FullAdder";
import Electricity from "./components/Electricity";
import VoltageToBinary from "./utils/VoltageToBinary";

const fullAdder = new FullAdder();

fullAdder.setInputs(Electricity.LOW, Electricity.LOW, Electricity.HIGH);

const output = fullAdder.getOutput();

// Extract carry as last bit
const carry = output[output.length - 1];

// Extract sum as the rest
const sum = output.slice(0, output.length - 1);

console.log(`Sum: ${VoltageToBinary(sum)}, Carry: ${!!carry}`);