import AND from "../../src/components/standard cells/AND";
import Electricity from "../../src/components/Electricity";

describe('AND Gate', () => {
    let andGate: AND;

    beforeEach(() => {
        andGate = new AND();
    });

    test('initial state is disconnected', () => {
        expect(andGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('AND gate outputs HIGH only when both inputs are HIGH', () => {
        andGate.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(andGate.getOutput()).toBe(Electricity.HIGH);

        andGate.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(andGate.getOutput()).toBe(Electricity.LOW);

        andGate.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(andGate.getOutput()).toBe(Electricity.LOW);

        andGate.setInputs(Electricity.LOW, Electricity.LOW);
        expect(andGate.getOutput()).toBe(Electricity.LOW);
    });
});