import Electricity from "../components/Electricity";
import '../extensions';

/**
 * Converts an array of Electricity states to a binary string.
 * @param input Array of Electricity states (HIGH or LOW)
 * @returns Binary string representation of the input
 */
export default (input: Electricity[]): string => {
    let number = '0b';

    for (let i = input.length - 1; i >= 0; i--) {
        const volt = input[i];
        if (volt !== Electricity.HIGH && volt !== Electricity.LOW) {
            throw new Error("Invalid voltage input. Must be HIGH or LOW.");
        }

        number += (volt === Electricity.HIGH) ? '1' : '0';
    }

    return number;
}