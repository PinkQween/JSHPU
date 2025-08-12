import Electricity from "../components/Electricity";
import '../extensions';

/**
 * Converts an array of Electricity states to a binary string.
 * @param input Array of Electricity states (HIGH or LOW)
 * @returns Binary string representation of the input
 */
export default (input: Electricity[]) => {
    let number = '0b';

    input.forEach(volt => {
        if (volt !== Electricity.HIGH && volt !== Electricity.LOW) {
            throw new Error("Invalid voltage input. Must be HIGH or LOW.");
        }

        if (volt === Electricity.HIGH) {
            number = number.append('1');
        } else if (volt === Electricity.LOW) {
            number = number.append('0');
        }
    });

    return number;
}