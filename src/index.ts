import Electricity from './components/Electricity';
import NOT from './standard cells/NOT';
import NAND from './standard cells/NAND';
import AND from './standard cells/AND';
import NOR from './standard cells/NOR';
import OR from './standard cells/OR';
import XOR from './standard cells/XOR';
import XNOR from './standard cells/XNOR';

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

console.log('=== AND ===');

const andGate = new AND();

andGate.setInputs(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', andGate.getOutput());  // Expect HIGH
andGate.setInputs(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', andGate.getOutput()); // Expect LOW
andGate.setInputs(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', andGate.getOutput()); // Expect LOW
andGate.setInputs(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', andGate.getOutput()); // Expect LOW

console.log('=== NOR ===');

const norGate = new NOR();

norGate.setInput(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', norGate.getOutput());  // Expect LOW
norGate.setInput(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', norGate.getOutput()); // Expect LOW
norGate.setInput(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', norGate.getOutput()); // Expect LOW
norGate.setInput(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', norGate.getOutput()); // Expect HIGH

console.log('=== OR ===');

const orGate = new OR();

orGate.setInputs(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', orGate.getOutput());  // Expect HIGH
orGate.setInputs(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', orGate.getOutput()); // Expect HIGH
orGate.setInputs(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', orGate.getOutput()); // Expect HIGH
orGate.setInputs(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', orGate.getOutput()); // Expect LOW

console.log('=== XOR ===');

const xorGate = new XOR();

xorGate.setInputs(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', xorGate.getOutput());  // Expect LOW
xorGate.setInputs(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', xorGate.getOutput()); // Expect HIGH
xorGate.setInputs(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', xorGate.getOutput()); // Expect HIGH
xorGate.setInputs(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', xorGate.getOutput()); // Expect LOW

console.log('=== XNOR ===');

const xnorGate = new XNOR();

xnorGate.setInputs(Electricity.HIGH, Electricity.HIGH);
console.log('Input: HIGH, HIGH → Output:', xnorGate.getOutput());  // Expect HIGH
xnorGate.setInputs(Electricity.HIGH, Electricity.LOW);
console.log('Input: HIGH, LOW → Output:', xnorGate.getOutput()); // Expect LOW
xnorGate.setInputs(Electricity.LOW, Electricity.HIGH);
console.log('Input: LOW, HIGH → Output:', xnorGate.getOutput()); // Expect LOW
xnorGate.setInputs(Electricity.LOW, Electricity.LOW);
console.log('Input: LOW, LOW → Output:', xnorGate.getOutput()); // Expect HIGH