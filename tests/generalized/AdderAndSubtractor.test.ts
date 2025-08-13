import Electricity from "../../src/components/Electricity";
import GeneralizedAdderANDSubtractor from "../../src/components/generalized/AdderANDSubtractor";
import decimalToTwoComplementVoltages from "../../src/utils/DecimalToVoltage";
import VoltageToBinary from "../../src/utils/VoltageToBinary";

const HIGH = Electricity.HIGH;
const LOW = Electricity.LOW;
const DISCONNECTED = Electricity.DISCONNECTED;

describe("Adding and Subtracting Operations - randomized testing", () => {
    let subtractor = new GeneralizedAdderANDSubtractor();
    const values = [LOW, HIGH, DISCONNECTED];

    // Helper to generate a random combination for a given length
    const randomCombination = (length: number): Electricity[] => {
        return Array.from({ length }, () => values[Math.floor(Math.random() * values.length)]);
    };

    // Generate a number of random test cases for bits 1..maxBits
    const generateRandomCases = (maxBits: number, casesPerBit: number) => {
        const cases: [Electricity[], Electricity[], Electricity, Electricity[]][] = [];
        for (let bits = 1; bits <= maxBits; bits++) {
            for (let i = 0; i < casesPerBit; i++) {
                const a = randomCombination(bits);
                const b = randomCombination(bits);
                const c = values[Math.floor(Math.random() * values.length)];

                const aNum = VoltageToBinary(a.map(v => v === DISCONNECTED ? LOW : v)).toSignedInt();
                const bNum = VoltageToBinary(b.map(v => v === DISCONNECTED ? LOW : v)).toSignedInt();
                const expected = decimalToTwoComplementVoltages(c === HIGH ? aNum - bNum : aNum + bNum, a.length);

                cases.push([a, b, c, expected]);
            }
        }
        return cases;
    };

    // Generate 100 random test cases per bit length, up to 8 bits
    const cases = generateRandomCases(16, 100);

    test.each(cases)(`Input: [%s], [%s], %s`, (a, b, c, expected) => {
        subtractor.setInputs(a, b, c);
        expect(subtractor.getOutput().slice(0, subtractor.getOutput().length-1)).toEqual(expected);
    });
});