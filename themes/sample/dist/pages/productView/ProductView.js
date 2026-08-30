import Area from '@components/common/Area.js';
import { Media } from '@components/frontStore/catalog/Media.js';
import { ProductProvider } from '@components/frontStore/catalog/ProductContext.js';
import { ProductSingleDescription } from '@components/frontStore/catalog/ProductSingleDescription.js';
import { ProductSingleForm } from '@components/frontStore/catalog/ProductSingleForm.js';
import { ProductSingleName } from '@components/frontStore/catalog/ProductSingleName.js';
import React from 'react';
const CARDS_CATEGORY_URL_KEY = 'cards';
/**
 * Theme override for EverShop's productView layout.
 *
 * Card products render their description in the right column at sort order
 * 100, after ProductSingleForm (sort order 30), so it appears below Add to
 * Cart. Other products retain EverShop's standard full-width description.
 */ export default function ProductView({ product }) {
    const category = product.category;
    const isCardsProduct = category?.urlKey === CARDS_CATEGORY_URL_KEY || category?.path?.some(({ urlKey })=>urlKey === CARDS_CATEGORY_URL_KEY) === true;
    const description = {
        component: {
            default: /*#__PURE__*/ React.createElement(ProductSingleDescription, null)
        },
        sortOrder: 100,
        id: 'productSingleDescription'
    };
    return /*#__PURE__*/ React.createElement(ProductProvider, {
        product: product
    }, /*#__PURE__*/ React.createElement("div", {
        className: "product__detail"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "productPageTop",
        className: "product__page__top"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "product__page__middle"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 gap-7 md:grid-cols-2"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "productPageMiddleLeft",
        className: "product__detail__left",
        coreComponents: [
            {
                component: {
                    default: /*#__PURE__*/ React.createElement(Media, null)
                },
                sortOrder: 0,
                id: 'media'
            }
        ]
    }), /*#__PURE__*/ React.createElement(Area, {
        id: "productPageMiddleRight",
        className: "product__detail__right",
        coreComponents: [
            {
                component: {
                    default: /*#__PURE__*/ React.createElement(ProductSingleName, null)
                },
                sortOrder: 10,
                id: 'name'
            },
            {
                component: {
                    default: /*#__PURE__*/ React.createElement(ProductSingleForm, null)
                },
                sortOrder: 30,
                id: 'productForm'
            },
            ...isCardsProduct ? [
                description
            ] : []
        ]
    })), !isCardsProduct && /*#__PURE__*/ React.createElement(Area, {
        id: "productSingleDescription",
        coreComponents: [
            {
                ...description,
                sortOrder: 10
            }
        ]
    })), /*#__PURE__*/ React.createElement(Area, {
        id: "productPageBottom",
        className: "product__page__bottom"
    })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    product: currentProduct {
      uuid
      metafields {
        namespace
        key
        type
        value
      }
      name
      description
      sku
      category {
        urlKey
        path {
          urlKey
        }
      }
      price {
        regular {
          value
          text
        }
        special {
          value
          text
        }
      }
      inventory {
        isInStock
      }
      attributes: attributeIndex {
        attributeName
        attributeCode
        optionText
      }
      image {
        alt
        url
      }
      gallery {
        alt
        url
      }
      variantGroup {
        variantAttributes {
          attributeId
          attributeCode
          attributeName
          options {
            optionId
            optionText
            productId
          }
        }
        items {
          attributes {
            attributeCode
            optionId
          }
        }
      }
    }
  }
`;
