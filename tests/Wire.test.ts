import Wire from '../src/components/Wire';
import Electricity from '../src/components/Electricity';

describe('Wire', () => {
    let wire: Wire;

    beforeEach(() => {
        wire = new Wire();
    });

    test('initial state is null', () => {
        expect(wire.get()).toBe(Electricity.DISCONNECTED);
    });

    test('single driver sets value', () => {
        wire.addDriver(Electricity.HIGH);
        expect(wire.get()).toBe(Electricity.HIGH);

        wire.clearDrivers();
        wire.addDriver(Electricity.LOW);
        expect(wire.get()).toBe(Electricity.LOW);
    });

    test('LOW + HIGH gives LOW (realistic bus behavior)', () => {
        wire.addDriver(Electricity.LOW);
        wire.addDriver(Electricity.HIGH);
        expect(wire.get()).toBe(Electricity.LOW); // LOW wins
    });

    test('DISCONNECTED does not override', () => {
        wire.addDriver(Electricity.LOW);
        wire.addDriver(Electricity.DISCONNECTED);
        expect(wire.get()).toBe(Electricity.LOW);
    });

    test('all drivers disconnected => null', () => {
        wire.addDriver(Electricity.DISCONNECTED);
        wire.addDriver(Electricity.DISCONNECTED);
        expect(wire.get()).toBe(Electricity.DISCONNECTED);
    });

    test('clearDrivers resets state', () => {
        wire.addDriver(Electricity.HIGH);
        wire.clearDrivers();
        expect(wire.get()).toBe(Electricity.DISCONNECTED);
    });

    test('adding multiple drivers preserves last set value', () => {
        wire.addDriver(Electricity.LOW);
        wire.addDriver(Electricity.LOW);
        expect(wire.get()).toBe(Electricity.LOW);
    });
});
