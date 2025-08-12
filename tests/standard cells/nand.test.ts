import NAND from "../../src/components/standard cells/NAND";
import Electricity from "../../src/components/Electricity";

describe('AND Gate', () => {
    let nandGate: NAND;

    beforeEach(() => {
        nandGate = new NAND();
    });

    test('initial state is disconnected', () => {
        expect(nandGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('AND gate outputs HIGH only when both inputs are HIGH', () => {
        nandGate.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(nandGate.getOutput()).toBe(Electricity.LOW);

        nandGate.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(nandGate.getOutput()).toBe(Electricity.HIGH);

        nandGate.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(nandGate.getOutput()).toBe(Electricity.HIGH);

        nandGate.setInputs(Electricity.LOW, Electricity.LOW);
        expect(nandGate.getOutput()).toBe(Electricity.HIGH);
    });
});