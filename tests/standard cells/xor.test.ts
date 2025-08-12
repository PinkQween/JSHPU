import XOR from "../../src/components/standard cells/XOR";
import Electricity from "../../src/components/Electricity";

describe('XOR Gate', () => {
    let xorGate: XOR;

    beforeEach(() => {
        xorGate = new XOR();
    });

    test('initial state is disconnected', () => {
        expect(xorGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('XOR gate outputs HIGH when inputs are different', () => {
        xorGate.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(xorGate.getOutput()).toBe(Electricity.HIGH);

        xorGate.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(xorGate.getOutput()).toBe(Electricity.HIGH);

        xorGate.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(xorGate.getOutput()).toBe(Electricity.LOW);

        xorGate.setInputs(Electricity.LOW, Electricity.LOW);
        expect(xorGate.getOutput()).toBe(Electricity.LOW);
    });
});