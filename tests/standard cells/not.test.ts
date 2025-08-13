import NOT from "../../src/components/standard cells/NOT";
import Electricity from "../../src/components/Electricity";

describe('NOT Gate', () => {
    let notGate: NOT;

    beforeEach(() => {
        notGate = new NOT();
    });

    test('initial state is disconnected', () => {
        expect(notGate.getOutput()).toBe(Electricity.DISCONNECTED);
    });

    test('NOT gate outputs HIGH when input is LOW', () => {
        notGate.setInput(Electricity.LOW);
        expect(notGate.getOutput()).toBe(Electricity.HIGH);
    });

    test('NOT gate outputs LOW when input is HIGH', () => {
        notGate.setInput(Electricity.HIGH);
        expect(notGate.getOutput()).toBe(Electricity.LOW);
    });
});