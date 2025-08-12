import XNOR from "../../src/components/standard cells/XNOR";
import Electricity from "../../src/components/Electricity";

describe('XOR Gate', () => {
    let xnorGate: XNOR;

    beforeEach(() => {
        xnorGate = new XNOR();
    });

    test('initial state is disconnected', () => {
        expect(xnorGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('XOR gate outputs HIGH when inputs are different', () => {
        xnorGate.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(xnorGate.getOutput()).toBe(Electricity.LOW);

        xnorGate.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(xnorGate.getOutput()).toBe(Electricity.LOW);

        xnorGate.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(xnorGate.getOutput()).toBe(Electricity.HIGH);

        xnorGate.setInputs(Electricity.LOW, Electricity.LOW);
        expect(xnorGate.getOutput()).toBe(Electricity.HIGH);
    });
});