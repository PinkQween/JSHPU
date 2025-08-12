import FullAdder from "../src/components/FullAdder";
import Electricity from "../src/components/Electricity";

describe('FullAdder', () => {
    let fullAdder: FullAdder;

    beforeEach(() => {
        fullAdder = new FullAdder();
    });

    test('initial state is disconnected', () => {
        expect(fullAdder.getOutput()).toEqual([Electricity.DISCONNECTED, Electricity.DISCONNECTED]);
    });

    test('adding inputs produces correct outputs', () => {
        fullAdder.setInputs(Electricity.HIGH, Electricity.LOW, Electricity.LOW);
        expect(fullAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.LOW]);

        fullAdder.setInputs(Electricity.LOW, Electricity.HIGH, Electricity.LOW);
        expect(fullAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.LOW]);

        fullAdder.setInputs(Electricity.HIGH, Electricity.HIGH, Electricity.LOW);
        expect(fullAdder.getOutput()).toEqual([Electricity.LOW, Electricity.HIGH]);

        fullAdder.setInputs(Electricity.LOW, Electricity.LOW, Electricity.HIGH);
        expect(fullAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.LOW]);

        fullAdder.setInputs(Electricity.HIGH, Electricity.HIGH, Electricity.HIGH);
        expect(fullAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.HIGH]);
    });
});