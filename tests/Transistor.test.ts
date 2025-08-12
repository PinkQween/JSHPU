import { describe, test, expect, beforeEach } from '@jest/globals';
import Transistor from '../src/components/Transistor';
import Electricity from '../src/components/Electricity';

describe('Transistor', () => {
    let npn: Transistor;
    let pnp: Transistor;

    beforeEach(() => {
        npn = new Transistor('NPN');
        pnp = new Transistor('PNP');
    });

    describe('NPN behavior', () => {
        test('ON when base HIGH and emitter LOW', () => {
            npn.base = Electricity.HIGH;
            npn.emitter = Electricity.LOW;
            expect(npn.compute()).toBe(Electricity.LOW); // Collector pulled LOW
        });

        test('OFF when base LOW', () => {
            npn.base = Electricity.LOW;
            npn.emitter = Electricity.LOW;
            expect(npn.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });

        test('OFF when emitter HIGH', () => {
            npn.base = Electricity.HIGH;
            npn.emitter = Electricity.HIGH;
            expect(npn.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });

        test('OFF when disconnected', () => {
            npn.base = Electricity.DISCONNECTED;
            npn.emitter = Electricity.LOW;
            expect(npn.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });
    });

    describe('PNP behavior', () => {
        test('ON when base LOW and emitter HIGH', () => {
            pnp.base = Electricity.LOW;
            pnp.emitter = Electricity.HIGH;
            expect(pnp.compute()).toBe(Electricity.HIGH); // Collector tied to emitter
        });

        test('OFF when base HIGH', () => {
            pnp.base = Electricity.HIGH;
            pnp.emitter = Electricity.HIGH;
            expect(pnp.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });

        test('OFF when emitter LOW', () => {
            pnp.base = Electricity.LOW;
            pnp.emitter = Electricity.LOW;
            expect(pnp.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });

        test('OFF when disconnected', () => {
            pnp.base = Electricity.DISCONNECTED;
            pnp.emitter = Electricity.HIGH;
            expect(pnp.compute()).toBe(Electricity.HIGH); // Pulled HIGH
        });
    });
});
