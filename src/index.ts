import Electricity from './Electricity';
import NOT from './NOT';
import NAND from './NAND';

console.log('=== NOT ===');

const notGate = new NOT();

notGate.setInput(Electricity.HIGH);
console.log('Input: HIGH → Output:', notGate.getOutput());  // Expect LOW

notGate.setInput(Electricity.LOW);
console.log('Input: LOW → Output:', notGate.getOutput()); // Expect HIGH

console.log('=== NAND ===');

const nandGate = new NAND();

nandGate.setInput(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', nandGate.getOutput());  // Expect LOW
nandGate.setInput(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', nandGate.getOutput()); // Expect HIGH
nandGate.setInput(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', nandGate.getOutput()); // Expect HIGH
nandGate.setInput(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', nandGate.getOutput()); // Expect HIGH