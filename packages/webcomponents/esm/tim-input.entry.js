import { r as registerInstance, h } from './index-dc2e99e1.js';

const timInputCss = ".tim-input{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-align:center;align-items:center;position:relative;border-bottom:1px solid #3152ef}.tim-input__field{border:0;line-height:1;padding-top:1rem;padding-bottom:1rem;padding-left:0;padding-right:0;width:100%}.tim-input__field-icon{padding-left:calc(24px + 1rem)}";

const TimInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TimInput.style = timInputCss;

export { TimInput as tim_input };
