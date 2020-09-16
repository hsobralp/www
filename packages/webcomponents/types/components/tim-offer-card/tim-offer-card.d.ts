import { EventEmitter } from "../../stencil-public-runtime";
export declare class TimOfferCard {
    /**
     * The label of the header of the card
     * @type {string}
     */
    headerLabel: string;
    /**
     * The text of the header of the card
     * @type {string}
     */
    headerText: string;
    /**
     * The image of the header of the card
     * @type {string}
     */
    headerImage?: string;
    /**
     * The value of the card
     * @type {string, number}
     */
    value: string | number;
    /**
     * Event of pressing the "next" button
     * @type {EventEmitter}
     */
    nextClick: EventEmitter;
    private nextClickHandler;
    render(): any;
}
