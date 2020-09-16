/**
 * Receives a number or strig and formarts to currency value to:
 * /\d+\,\d{2}/
 *
 * @export
 * @param {(number | string)} input
 * @returns {string}
 */
export declare function formatCurrency(input: number | string): string;
export declare function checkValidProp(prop: string, optionsProp: string[]): string | void;
