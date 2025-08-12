import OR from "../../src/components/standard cells/OR";
import Electricity from "../../src/components/Electricity";

describe('OR Gate', () => {
    let orGate: OR;

    beforeEach(() => {
        orGate = new OR();
    });

    test('initial state is disconnected', () => {
        expect(orGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('OR gate outputs HIGH when at least one input is HIGH', () => {
        orGate.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(orGate.getOutput()).toBe(Electricity.HIGH);

        orGate.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(orGate.getOutput()).toBe(Electricity.HIGH);

        orGate.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(orGate.getOutput()).toBe(Electricity.HIGH);

        orGate.setInputs(Electricity.LOW, Electricity.LOW);
        expect(orGate.getOutput()).toBe(Electricity.LOW);
    });
});