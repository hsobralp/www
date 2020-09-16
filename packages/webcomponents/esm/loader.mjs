import { b as bootstrapLazy } from './index-dc2e99e1.js';
import { a as patchEsm } from './patch-23c350ad.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["tim-card",[[4,"tim-card",{"header":[1]}]]],["tim-input",[[0,"tim-input",{"type":[1],"placeholder":[1],"icon":[1],"submit":[4]}]]],["tim-offer-card",[[4,"tim-offer-card",{"headerLabel":[1,"header-label"],"headerText":[1,"header-text"],"headerImage":[1,"header-image"],"value":[8]}]]],["tim-price",[[0,"tim-price",{"value":[8],"range":[1]}]]]], options);
  });
};

export { defineCustomElements };
