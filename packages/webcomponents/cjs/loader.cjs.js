'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5596716.js');
const patch = require('./patch-0e77e491.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["tim-card.cjs",[[4,"tim-card",{"header":[1]}]]],["tim-input.cjs",[[0,"tim-input",{"type":[1],"placeholder":[1],"icon":[1],"submit":[4]}]]],["tim-offer-card.cjs",[[4,"tim-offer-card",{"headerLabel":[1,"header-label"],"headerText":[1,"header-text"],"headerImage":[1,"header-image"],"value":[8]}]]],["tim-price.cjs",[[0,"tim-price",{"value":[8],"range":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
