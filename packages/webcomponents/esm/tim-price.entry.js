import { r as registerInstance, h, H as Host } from './index-dc2e99e1.js';

/**
 * Receives a number or strig and formarts to currency value to:
 * /\d+\,\d{2}/
 *
 * @export
 * @param {(number | string)} input
 * @returns {string}
 */
function formatCurrency(input) {
    const value = typeof input === "number" ? input.toString() : input;
    const valueReplaced = value.replace(".", ",").split(",");
    const full = valueReplaced[0];
    let decimals = valueReplaced[1] ? valueReplaced[1].substr(0, 2) : "00";
    if (decimals.length !== 2) {
        decimals += "0";
    }
    return `${full},${decimals}`;
}

const timPriceCss = ".tim-price{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-align:center;align-items:center;color:#0026d9}.tim-price__text{margin:0}.tim-price__info{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;padding-top:3px;padding-left:3px}.tim-price__info__text{margin:0}.tim-price__info__text:first-of-type{padding-bottom:3px}";

const TimPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Text of the subdivision
         */
        this.range = "mês";
    }
    /**
     * Formats the input value to [fullValue, decimal]
     */
    getValue() {
        return formatCurrency(this.value).split(",");
    }
    render() {
        const [full, decimal] = this.getValue();
        return (h(Host, { class: "tim-price" }, h("span", { class: "tim-price__text price-4xl" }, full), h("div", { class: "tim-price__info" }, h("span", { class: "tim-price__info__text price-xs" }, ",", decimal), h("span", { class: "tim-price__info__text price-xs" }, "/", this.range))));
    }
};
TimPrice.style = timPriceCss;

export { TimPrice as tim_price };
