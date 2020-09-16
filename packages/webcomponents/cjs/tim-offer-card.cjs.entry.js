'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5596716.js');
const index$1 = require('./index-a33ec7e4.js');

const timOfferCardCss = ".tim-offer-card{width:15rem;-webkit-transition:0.1s ease-out;transition:0.1s ease-out;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow;-webkit-box-shadow:0.125rem 0.125rem 0.75rem rgba(0, 0, 0, 0.07);box-shadow:0.125rem 0.125rem 0.75rem rgba(0, 0, 0, 0.07)}.tim-offer-card,.tim-offer-card__header{border-top-left-radius:1rem;border-top-right-radius:1rem}.tim-offer-card,.tim-offer-card__content{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.tim-offer-card,.tim-offer-card__header,.tim-offer-card__content{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.tim-offer-card__header,.tim-offer-card__content{-ms-flex-pack:justify;justify-content:space-between}.tim-offer-card__header{background-color:#002198;height:8.75rem;padding:1.5rem;position:relative;overflow:hidden}.tim-offer-card__header__text{color:#ffffff;margin:0}.tim-offer-card__header__gradient,.tim-offer-card__header__image{position:absolute;top:0;left:0;right:0;bottom:0}.tim-offer-card__header-gradient{background:-webkit-gradient(linear, left bottom, left top, color-stop(10%, rgba(0, 0, 0, 0.8)), color-stop(80%, rgba(0, 0, 0, 0)));background:linear-gradient(0deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 80%)}.tim-offer-card__header__image{background-position:center;background-size:cover;z-index:-1}.tim-offer-card__content{height:9.5rem;background:#ffffff;padding:1.5rem 1.5rem 1rem}.tim-offer-card__content__text{margin:0}.tim-offer-card__content__cta{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.tim-offer-card__content__cta__value{color:#0026d9;margin:0}.tim-offer-card__content__cta__icon{background:#ffffff;border:0;padding:0;margin:0;cursor:auto;stroke:#eb0028;width:3rem;height:3rem}";

const TimOfferCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.nextClick = index.createEvent(this, "nextClick", 7);
    }
    nextClickHandler() {
        this.nextClick.emit();
    }
    render() {
        return (index.h(index.Host, { class: "tim-offer-card" }, index.h("div", { class: {
                "tim-offer-card__header": true,
                "tim-offer-card__header-gradient": !!this.headerImage,
            } }, index.h("p", { class: "tim-offer-card__header__text label-sm" }, this.headerLabel), index.h("p", { class: "tim-offer-card__header__text heading-xl" }, this.headerText), this.headerImage && (index.h("div", { class: "tim-offer-card__header__image", style: {
                backgroundImage: this.headerImage && `url(${this.headerImage})`,
            } }))), index.h("div", { class: "tim-offer-card__content" }, index.h("p", { class: "tim-offer-card__content__text paragraph-sm" }, index.h("slot", null)), index.h("div", { class: "tim-offer-card__content__cta" }, index.h("p", { class: "tim-offer-card__content__cta__value price-xl" }, "R$ ", this.value), index.h("button", { type: "button", class: "tim-offer-card__content__cta__icon", innerHTML: index$1.icons["action-right"].content, onClick: () => this.nextClickHandler() })))));
    }
};
TimOfferCard.style = timOfferCardCss;

exports.tim_offer_card = TimOfferCard;
