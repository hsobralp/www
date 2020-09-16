import { Component, h, Prop } from "@stencil/core";
export class TimInput {
    constructor() {
        /**
         * Type of the input
         * @type {string}
         */
        this.type = "text";
        /**
         * Placeholder of the input
         * @type {string}
         */
        this.placeholder = "Seu número ";
        this.submit = false;
    }
    render() {
        return (h("div", { class: "tim-input" }, [
            false,
            h("input", { class: {
                    "tim-input__field": true,
                    "tim-input__field-icon": !!this.icon,
                }, type: this.type, placeholder: this.placeholder }),
            this.submit && h("button", { type: "button" }, "lado"),
        ]));
    }
    static get is() { return "tim-input"; }
    static get originalStyleUrls() { return {
        "$": ["tim-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tim-input.css"]
    }; }
    static get properties() { return {
        "type": {
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
                "text": "Type of the input"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"text\""
        },
        "placeholder": {
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
                "text": "Placeholder of the input"
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Seu n\u00FAmero \""
        },
        "icon": {
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
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        },
        "submit": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "submit",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
