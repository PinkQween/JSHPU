// import type Electricity from './Electricity';
// import Transistor from './Transistor';
// import Wire from './Wire';

// /**
//  * AND gate implemented with a 2 NPN transistor.
//  * 
//  * When both input is HIGH:
//  *   - Transistors conducts → output HIGH
//  * Otherwise:
//  *   - Transistor OFF → output LOW
//  */
// export default class AND {
//     /** The single NPN transistor used in this AND gate */
//     t0: Transistor;
//     t1: Transistor;
//     w0: Wire;

//     constructor() {
//         this.t0 = new Transistor('NPN');
//         this.t1 = new Transistor('NPN');
//         this.w0 = new Wire();
//     }

//     /**
//      * Set input signal to the AND gate.
//      * @param a Electricity state
//      * @param b Electricity state
//      */
//     setInput(a: Electricity, b: Electricity) {
//         this.w0.clearDrivers();
//         this.t0.base = a;
//         this.w0.addDriver(this.t0.compute());
//         this.t1.collector = this.w0.get();
//         this.t1.base = b;
//     }

//     /**
//      * Get output signal from the AND gate.
//      * @returns Electricity state output
//      */
//     getOutput(): Electricity {
//         return this.t1.compute();
//     }
// }