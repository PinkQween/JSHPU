export { }; // ensure this file is a module

export { }; // mark this as a module

declare global {
    interface String {
        /**
         * Converts a binary string to a signed integer.
         * @returns The signed integer value of the binary string.
         */
        toSignedInt(): number;

        /**
         * Appends a suffix to the string.
         * @param suffix The string to append.
         * @returns The concatenated string.
         */
        append(suffix: string): string;
    }
}

String.prototype.toSignedInt = function (): number {
    let binStr = this.toString();
    if (binStr.startsWith("0b")) {
        binStr = binStr.slice(2);
    }
    const bitLength = binStr.length;
    const unsignedValue = parseInt(binStr, 2);

    const signBit = 1 << (bitLength - 1);
    if ((unsignedValue & signBit) !== 0) {
        return unsignedValue - (1 << bitLength);
    }
    return unsignedValue;
};


String.prototype.append = function (suffix: string): string {
    return this.toString() + suffix;
};