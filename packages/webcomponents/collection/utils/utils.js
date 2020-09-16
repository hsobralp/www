/**
 * Receives a number or strig and formarts to currency value to:
 * /\d+\,\d{2}/
 *
 * @export
 * @param {(number | string)} input
 * @returns {string}
 */
export function formatCurrency(input) {
    const value = typeof input === "number" ? input.toString() : input;
    const valueReplaced = value.replace(".", ",").split(",");
    const full = valueReplaced[0];
    let decimals = valueReplaced[1] ? valueReplaced[1].substr(0, 2) : "00";
    if (decimals.length !== 2) {
        decimals += "0";
    }
    return `${full},${decimals}`;
}
export function checkValidProp(prop, optionsProp) {
    return optionsProp.includes(prop) ? prop : undefined;
}
