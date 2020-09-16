import { Component, h, Host, Prop } from "@stencil/core";
import icons from "@tim-ds/icons/dist";
export class TimCard {
    render() {
        return (h(Host, { class: "tim-card" },
            h("div", { class: "tim-card__header" },
                h("div", { class: "tim-card__header__icon", innerHTML: icons.barcode.content }),
                this.header ? (h("p", { class: "tim-card__header__text heading-xl" }, this.header)) : null),
            h("p", { class: "tim-card__label label-lg" },
                h("slot", null))));
    }
    static get is() { return "tim-card"; }
    static get originalStyleUrls() { return {
        "$": ["tim-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tim-card.css"]
    }; }
    static get properties() { return {
        "header": {
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
                "text": "Text of the header of the card"
            },
            "attribute": "header",
            "reflect": false
        }
    }; }
}
