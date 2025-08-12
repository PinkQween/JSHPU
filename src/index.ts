import Electricity from './Electricity';
import NOT from './NOT';
// import AND from './AND';

console.log('=== NOT ===');

const notGate = new NOT();

notGate.setInput(Electricity.HIGH);
console.log('Input: HIGH → Output:', notGate.getOutput());  // Expect LOW

notGate.setInput(Electricity.LOW);
console.log('Input: LOW → Output:', notGate.getOutput()); // Expect HIGH

// console.log('=== AND ===');

// const andGate = new AND();

// andGate.setInput(Electricity.HIGH, Electricity.HIGH);
// console.log('Input: HIGH, HIGH → Output:', andGate.getOutput());  // Expect HIGH
// andGate.setInput(Electricity.HIGH, Electricity.LOW);
// console.log('Input: HIGH, LOW → Output:', andGate.getOutput()); // Expect LOW
// andGate.setInput(Electricity.LOW, Electricity.HIGH);
// console.log('Input: LOW, HIGH → Output:', andGate.getOutput()); // Expect LOW
// andGate.setInput(Electricity.LOW, Electricity.LOW);
// console.log('Input: LOW, LOW → Output:', andGate.getOutput()); // Expect LOW