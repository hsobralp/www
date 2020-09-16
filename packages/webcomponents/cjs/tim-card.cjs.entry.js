'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5596716.js');
const index$1 = require('./index-a33ec7e4.js');

const timCardCss = ".tim-card{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:justify;justify-content:space-between;background:#ffffff;color:#3152ef;fill:#3152ef;border-radius:1rem;padding:1.5rem;-webkit-box-shadow:0.125rem 0.125rem 0.75rem rgba(0, 0, 0, 0.07);box-shadow:0.125rem 0.125rem 0.75rem rgba(0, 0, 0, 0.07);width:15rem;height:15rem}.tim-card:hover,.tim-card:active,.tim-card:focus{-webkit-box-shadow:0 0 0 rgba(0, 0, 0, 0.07);box-shadow:0 0 0 rgba(0, 0, 0, 0.07)}.tim-card__header{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-pack:justify;justify-content:space-between;color:#eb0028}.tim-card__header__icon{width:2rem;height:2rem}.tim-card__header__text{margin:0;padding:0}.tim-card__label{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;width:100%;height:5rem;margin:0}.tim-card:hover,.tim-card:active,.tim-card:focus{background:#5270fe}.tim-card:hover .tim-card,.tim-card:hover .tim-card__header,.tim-card:hover .tim-card__label,.tim-card:active .tim-card,.tim-card:active .tim-card__header,.tim-card:active .tim-card__label,.tim-card:focus .tim-card,.tim-card:focus .tim-card__header,.tim-card:focus .tim-card__label{-webkit-transition:0.1s ease-out;transition:0.1s ease-out;-webkit-transition-property:color, fill, background, -webkit-box-shadow;transition-property:color, fill, background, -webkit-box-shadow;transition-property:color, fill, background, box-shadow;transition-property:color, fill, background, box-shadow, -webkit-box-shadow}.tim-card:hover .tim-card__header,.tim-card:hover .tim-card__label,.tim-card:active .tim-card__header,.tim-card:active .tim-card__label,.tim-card:focus .tim-card__header,.tim-card:focus .tim-card__label{color:white;fill:white}";

const TimCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "tim-card" }, index.h("div", { class: "tim-card__header" }, index.h("div", { class: "tim-card__header__icon", innerHTML: index$1.icons.barcode.content }), this.header ? (index.h("p", { class: "tim-card__header__text heading-xl" }, this.header)) : null), index.h("p", { class: "tim-card__label label-lg" }, index.h("slot", null))));
    }
};
TimCard.style = timCardCss;

exports.tim_card = TimCard;
