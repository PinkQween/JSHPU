export { }; // ensure this file is a module

declare global {
    interface String {
        append(suffix: string): string;
    }
}

String.prototype.append = function (suffix: string): string {
    return this.toString() + suffix;
};