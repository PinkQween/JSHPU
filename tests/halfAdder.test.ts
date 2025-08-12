import HalfAdder from "../src/components/HalfAdder";
import Electricity from "../src/components/Electricity";

describe('HalfAdder', () => {
    let halfAdder: HalfAdder;

    beforeEach(() => {
        halfAdder = new HalfAdder();
    });

    test('initial state is disconnected', () => {
        expect(halfAdder.getOutput()).toEqual([Electricity.DISCONNECTED, Electricity.DISCONNECTED]);
    });

    test('adding inputs produces correct outputs', () => {
        halfAdder.setInputs(Electricity.HIGH, Electricity.LOW);
        expect(halfAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.LOW]);

        halfAdder.setInputs(Electricity.LOW, Electricity.HIGH);
        expect(halfAdder.getOutput()).toEqual([Electricity.HIGH, Electricity.LOW]);

        halfAdder.setInputs(Electricity.HIGH, Electricity.HIGH);
        expect(halfAdder.getOutput()).toEqual([Electricity.LOW, Electricity.HIGH]);

        halfAdder.setInputs(Electricity.LOW, Electricity.LOW);
        expect(halfAdder.getOutput()).toEqual([Electricity.LOW, Electricity.LOW]);
    });
});