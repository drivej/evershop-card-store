import React from 'react';
const CATEGORY_URL_KEY = 'cards';
export default function CardsCategoryContent({ product }) {
    const category = product?.category;
    const categoryPath = category?.path ?? [];
    const belongsToCardsCategory = category?.urlKey === CATEGORY_URL_KEY || categoryPath.some(({ urlKey })=>urlKey === CATEGORY_URL_KEY);
    if (!belongsToCardsCategory) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("section", {
        className: "mt-12 rounded-lg border border-border bg-background/90 p-6 shadow-sm md:p-8",
        "aria-labelledby": "cards-category-content-heading"
    }, /*#__PURE__*/ React.createElement("h2", {
        id: "cards-category-content-heading",
        className: "mb-4 text-2xl font-semibold"
    }, "Find us on Instagram:"), /*#__PURE__*/ React.createElement("ul", {
        className: "mb-6 space-y-2"
    }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.instagram.com/stainedglasspokemon",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "font-semibold underline underline-offset-4"
    }, "@stainedglasspokemon"), ' ', "— For customs only"), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.instagram.com/rarecardhunterz",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "font-semibold underline underline-offset-4"
    }, "@rarecardhunterz"), ' ', "— For all TCGs including customs")), /*#__PURE__*/ React.createElement("p", {
        className: "mb-6 leading-7"
    }, "Our cards are printed on a Heidelberg Versafire LV printer with holographic texture and high-density cardstock that feels like any other TCG card yet more durable."), /*#__PURE__*/ React.createElement("p", {
        className: "font-semibold"
    }, "Official Card Store of RareCardHunterz"));
}
export const layout = {
    areaId: 'productPageBottom',
    sortOrder: 10
};
export const query = `
  query Query {
    product: currentProduct {
      category {
        urlKey
        path {
          urlKey
        }
      }
    }
  }
`;
