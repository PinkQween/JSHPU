import Electricity from "../components/Electricity";

/**
 * Converts a decimal number to its two's complement binary representation as Electricity states.
 * @param decimal Decimal number to convert
 * @param bitCount Number of bits for the two's complement representation (e.g., 8, 16, 32)
 * @returns Electricity states (HIGH or LOW) representing bits from MSB (index 0) to LSB (last index)
 */
export default function decimalToTwoComplementVoltages(decimal: number, bitCount: number = 8): Electricity[] {
    if (bitCount <= 0) throw new Error("bitCount must be positive");

    const mask = (1 << bitCount) - 1;
    const twosComplementValue = decimal < 0 ? (decimal & mask) : decimal;
    const binaryString = twosComplementValue.toString(2).padStart(bitCount, '0');

    return Array.from(binaryString)
        .map(bit => (bit === '1' ? Electricity.HIGH : Electricity.LOW))
        .reverse(); // Reverse to match MSB at index 0
}

export const decimalToRegularVoltages = (decimal: number, bitCount: number = 8): Electricity[] => {
    if (bitCount <= 0) throw new Error("bitCount must be positive");

    const binaryString = decimal.toString(2).padStart(bitCount, '0');

    return Array.from(binaryString)
        .map(bit => (bit === '1' ? Electricity.HIGH : Electricity.LOW))
        .reverse();
};