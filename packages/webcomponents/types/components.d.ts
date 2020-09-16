/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface TimCard {
        /**
          * Text of the header of the card
         */
        "header"?: string;
    }
    interface TimInput {
        "icon"?: string;
        /**
          * Placeholder of the input
          * @type {string}
         */
        "placeholder"?: string;
        "submit"?: boolean;
        /**
          * Type of the input
          * @type {string}
         */
        "type": string;
    }
    interface TimOfferCard {
        /**
          * The image of the header of the card
          * @type {string}
         */
        "headerImage"?: string;
        /**
          * The label of the header of the card
          * @type {string}
         */
        "headerLabel": string;
        /**
          * The text of the header of the card
          * @type {string}
         */
        "headerText": string;
        /**
          * The value of the card
          * @type {string , number}
         */
        "value": string | number;
    }
    interface TimPrice {
        /**
          * Text of the subdivision
         */
        "range"?: string;
        /**
          * Value that will be shown on the component
         */
        "value": string | number;
    }
}
declare global {
    interface HTMLTimCardElement extends Components.TimCard, HTMLStencilElement {
    }
    var HTMLTimCardElement: {
        prototype: HTMLTimCardElement;
        new (): HTMLTimCardElement;
    };
    interface HTMLTimInputElement extends Components.TimInput, HTMLStencilElement {
    }
    var HTMLTimInputElement: {
        prototype: HTMLTimInputElement;
        new (): HTMLTimInputElement;
    };
    interface HTMLTimOfferCardElement extends Components.TimOfferCard, HTMLStencilElement {
    }
    var HTMLTimOfferCardElement: {
        prototype: HTMLTimOfferCardElement;
        new (): HTMLTimOfferCardElement;
    };
    interface HTMLTimPriceElement extends Components.TimPrice, HTMLStencilElement {
    }
    var HTMLTimPriceElement: {
        prototype: HTMLTimPriceElement;
        new (): HTMLTimPriceElement;
    };
    interface HTMLElementTagNameMap {
        "tim-card": HTMLTimCardElement;
        "tim-input": HTMLTimInputElement;
        "tim-offer-card": HTMLTimOfferCardElement;
        "tim-price": HTMLTimPriceElement;
    }
}
declare namespace LocalJSX {
    interface TimCard {
        /**
          * Text of the header of the card
         */
        "header"?: string;
    }
    interface TimInput {
        "icon"?: string;
        /**
          * Placeholder of the input
          * @type {string}
         */
        "placeholder"?: string;
        "submit"?: boolean;
        /**
          * Type of the input
          * @type {string}
         */
        "type"?: string;
    }
    interface TimOfferCard {
        /**
          * The image of the header of the card
          * @type {string}
         */
        "headerImage"?: string;
        /**
          * The label of the header of the card
          * @type {string}
         */
        "headerLabel"?: string;
        /**
          * The text of the header of the card
          * @type {string}
         */
        "headerText"?: string;
        /**
          * Event of pressing the "next" button
          * @type {EventEmitter}
         */
        "onNextClick"?: (event: CustomEvent<any>) => void;
        /**
          * The value of the card
          * @type {string , number}
         */
        "value"?: string | number;
    }
    interface TimPrice {
        /**
          * Text of the subdivision
         */
        "range"?: string;
        /**
          * Value that will be shown on the component
         */
        "value"?: string | number;
    }
    interface IntrinsicElements {
        "tim-card": TimCard;
        "tim-input": TimInput;
        "tim-offer-card": TimOfferCard;
        "tim-price": TimPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tim-card": LocalJSX.TimCard & JSXBase.HTMLAttributes<HTMLTimCardElement>;
            "tim-input": LocalJSX.TimInput & JSXBase.HTMLAttributes<HTMLTimInputElement>;
            "tim-offer-card": LocalJSX.TimOfferCard & JSXBase.HTMLAttributes<HTMLTimOfferCardElement>;
            "tim-price": LocalJSX.TimPrice & JSXBase.HTMLAttributes<HTMLTimPriceElement>;
        }
    }
}
