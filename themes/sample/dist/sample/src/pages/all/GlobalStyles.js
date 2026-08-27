import React from 'react';
export default function GlobalStyles() {
    return /*#__PURE__*/ React.createElement("style", null, `
      body {
        background-image: url(/images/RCH_bg_blue.png);
        background-repeat: repeat;
      }

      /* Fix font sizes after EverShop 2.1+ upgrade to Tailwind v4 */
      /* EverShop uses prose-xl in Editor component which is 1.25rem (20px) */
      /* This resets it to match the previous prose-base size of 1rem (16px) */

      /* Override prose-xl to match prose-base sizing */
      .prose-xl {
        font-size: 1rem !important;
        line-height: 1.75rem !important;
      }

      .prose-xl p {
        font-size: 1rem !important;
        line-height: 1.75rem !important;
        margin-top: 1.25em !important;
        margin-bottom: 1.25em !important;
      }

      /* Fix prose-xl headings to match prose-base */
      .prose-xl h1 {
        font-size: 2.25em !important;
        margin-top: 0 !important;
        margin-bottom: 0.8888889em !important;
        line-height: 1.1111111 !important;
      }

      .prose-xl h2 {
        font-size: 1.5em !important;
        margin-top: 2em !important;
        margin-bottom: 1em !important;
        line-height: 1.3333333 !important;
      }

      .prose-xl h3 {
        font-size: 1.25em !important;
        margin-top: 1.6em !important;
        margin-bottom: 0.6em !important;
        line-height: 1.6 !important;
      }

      .prose-xl h4 {
        font-size: 1em !important;
        margin-top: 1.5em !important;
        margin-bottom: 0.5em !important;
        line-height: 1.5 !important;
      }

      /* Also fix prose-base to ensure consistency */
      .prose-base {
        font-size: 1rem !important;
        line-height: 1.75rem !important;
      }
      /* Fix image sizing in product list */
      .product__list__image img {
        object-fit: contain !important;
        aspect-ratio: auto !important;
        height: auto !important;
      }
      .product-media-container .main-image-container .product-image {
        background-color: transparent !important;
      }
      .product-media-container .slick-dots.slick-thumb li .thumbnail-wrapper {
        background: transparent !important;
      }
      .product-media-container .custom-arrow svg {
        color: #000000 !important;
      }

      /* Allow the product image hover scale to extend beyond the card. */
      .product__list__item {
        position: relative;
      }

      .product__list__item:hover {
        z-index: 10;
      }

      .product__list__item__inner,
      .product__list__image {
        overflow: visible !important;
      }
    `);
}
export const layout = {
    areaId: 'head',
    sortOrder: 5
};
