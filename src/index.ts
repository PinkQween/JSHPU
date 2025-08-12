import AND from './AND';
import NOT from './NOT';

console.log('=== NOT ===');

const notGate = new NOT();

notGate.setInput(true);
console.log('Input: true → Output:', notGate.getOutput());  // Expect false

notGate.setInput(false);
console.log('Input: false → Output:', notGate.getOutput()); // Expect true

console.log('=== AND ===');

const andGate = new AND();

andGate.setInput(true, true);
console.log('Input: true, true → Output:', andGate.getOutput());  // Expect true
andGate.setInput(true, false);
console.log('Input: true, false → Output:', andGate.getOutput()); // Expect false
andGate.setInput(false, true);
console.log('Input: false, true → Output:', andGate.getOutput()); // Expect false
andGate.setInput(false, false);
console.log('Input: false, false → Output:', andGate.getOutput()); // Expect false