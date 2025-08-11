import NOT from './NOT';

const notGate = new NOT();

notGate.setInput(true);
console.log('Input: true → Output:', notGate.getOutput());  // Expect false

notGate.setInput(false);
console.log('Input: false → Output:', notGate.getOutput()); // Expect true
