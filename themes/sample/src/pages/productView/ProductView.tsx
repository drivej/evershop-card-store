import Area from '@components/common/Area.js';
import { Media } from '@components/frontStore/catalog/Media.js';
import {
  ProductData,
  ProductProvider
} from '@components/frontStore/catalog/ProductContext.js';
import { ProductSingleDescription } from '@components/frontStore/catalog/ProductSingleDescription.js';
import { ProductSingleForm } from '@components/frontStore/catalog/ProductSingleForm.js';
import { ProductSingleName } from '@components/frontStore/catalog/ProductSingleName.js';
import React from 'react';

type Category = {
  urlKey?: string | null;
};

type CardsProductViewProps = {
  product: ProductData & {
    category?: (Category & { path?: Category[] | null }) | null;
  };
};

const CARDS_CATEGORY_URL_KEY = 'cards';

/**
 * Theme override for EverShop's productView layout.
 *
 * Card products render their description in the right column at sort order
 * 100, after ProductSingleForm (sort order 30), so it appears below Add to
 * Cart. Other products retain EverShop's standard full-width description.
 */
export default function ProductView({ product }: CardsProductViewProps) {
  const category = product.category;
  const isCardsProduct =
    category?.urlKey === CARDS_CATEGORY_URL_KEY ||
    category?.path?.some(
      ({ urlKey }) => urlKey === CARDS_CATEGORY_URL_KEY
    ) === true;

  const description = {
    component: { default: <ProductSingleDescription /> },
    sortOrder: 100,
    id: 'productSingleDescription'
  };

  return (
    <ProductProvider product={product}>
      <div className="product__detail">
        <Area id="productPageTop" className="product__page__top" />
        <div className="product__page__middle">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <Area
              id="productPageMiddleLeft"
              className="product__detail__left"
              coreComponents={[
                {
                  component: { default: <Media /> },
                  sortOrder: 0,
                  id: 'media'
                }
              ]}
            />
            <Area
              id="productPageMiddleRight"
              className="product__detail__right"
              coreComponents={[
                {
                  component: { default: <ProductSingleName /> },
                  sortOrder: 10,
                  id: 'name'
                },
                {
                  component: { default: <ProductSingleForm /> },
                  sortOrder: 30,
                  id: 'productForm'
                },
                ...(isCardsProduct ? [description] : [])
              ]}
            />
          </div>
          {!isCardsProduct && (
            <Area
              id="productSingleDescription"
              coreComponents={[{ ...description, sortOrder: 10 }]}
            />
          )}
        </div>
        <Area id="productPageBottom" className="product__page__bottom" />
      </div>
    </ProductProvider>
  );
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
