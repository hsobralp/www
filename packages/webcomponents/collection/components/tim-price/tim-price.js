import { Component, h, Host, Prop } from "@stencil/core";
import { formatCurrency } from "../../utils/utils";
export class TimPrice {
    constructor() {
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
        return (h(Host, { class: "tim-price" },
            h("span", { class: "tim-price__text price-4xl" }, full),
            h("div", { class: "tim-price__info" },
                h("span", { class: "tim-price__info__text price-xs" },
                    ",",
                    decimal),
                h("span", { class: "tim-price__info__text price-xs" },
                    "/",
                    this.range))));
    }
    static get is() { return "tim-price"; }
    static get originalStyleUrls() { return {
        "$": ["tim-price.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tim-price.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Value that will be shown on the component"
            },
            "attribute": "value",
            "reflect": false
        },
        "range": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Text of the subdivision"
            },
            "attribute": "range",
            "reflect": false,
            "defaultValue": "\"m\u00EAs\""
        }
    }; }
}
