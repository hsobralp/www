import { Component, Event, h, Host, Prop } from "@stencil/core";
import icons from "@tim-ds/icons/dist";
export class TimOfferCard {
    nextClickHandler() {
        this.nextClick.emit();
    }
    render() {
        return (h(Host, { class: "tim-offer-card" },
            h("div", { class: {
                    "tim-offer-card__header": true,
                    "tim-offer-card__header-gradient": !!this.headerImage,
                } },
                h("p", { class: "tim-offer-card__header__text label-sm" }, this.headerLabel),
                h("p", { class: "tim-offer-card__header__text heading-xl" }, this.headerText),
                this.headerImage && (h("div", { class: "tim-offer-card__header__image", style: {
                        backgroundImage: this.headerImage && `url(${this.headerImage})`,
                    } }))),
            h("div", { class: "tim-offer-card__content" },
                h("p", { class: "tim-offer-card__content__text paragraph-sm" },
                    h("slot", null)),
                h("div", { class: "tim-offer-card__content__cta" },
                    h("p", { class: "tim-offer-card__content__cta__value price-xl" },
                        "R$ ",
                        this.value),
                    h("button", { type: "button", class: "tim-offer-card__content__cta__icon", innerHTML: icons["action-right"].content, onClick: () => this.nextClickHandler() })))));
    }
    static get is() { return "tim-offer-card"; }
    static get originalStyleUrls() { return {
        "$": ["tim-offer-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tim-offer-card.css"]
    }; }
    static get properties() { return {
        "headerLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }],
                "text": "The label of the header of the card"
            },
            "attribute": "header-label",
            "reflect": false
        },
        "headerText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }],
                "text": "The text of the header of the card"
            },
            "attribute": "header-text",
            "reflect": false
        },
        "headerImage": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }],
                "text": "The image of the header of the card"
            },
            "attribute": "header-image",
            "reflect": false
        },
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
                "tags": [{
                        "text": "{string , number}",
                        "name": "type"
                    }],
                "text": "The value of the card"
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "nextClick",
            "name": "nextClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [{
                        "text": "{EventEmitter}",
                        "name": "type"
                    }],
                "text": "Event of pressing the \"next\" button"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
