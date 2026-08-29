import React from 'react';

type Category = {
  urlKey?: string | null;
};

type CardsCategoryContentProps = {
  product?: {
    category?: {
      urlKey?: string | null;
      path?: Category[] | null;
    } | null;
  } | null;
};

const CATEGORY_URL_KEY = 'cards';

export default function CardsCategoryContent({
  product
}: CardsCategoryContentProps) {
  const category = product?.category;
  const categoryPath = category?.path ?? [];
  const belongsToCardsCategory =
    category?.urlKey === CATEGORY_URL_KEY ||
    categoryPath.some(({ urlKey }) => urlKey === CATEGORY_URL_KEY);

  if (!belongsToCardsCategory) {
    return null;
  }

  return (
    <section
      className="mt-12 rounded-lg border border-border bg-background/90 p-6 shadow-sm md:p-8"
      aria-labelledby="cards-category-content-heading"
    >
      <h2
        id="cards-category-content-heading"
        className="mb-4 text-2xl font-semibold"
      >
        Find us on Instagram:
      </h2>

      <ul className="mb-6 space-y-2">
        <li>
          <a
            href="https://www.instagram.com/stainedglasspokemon"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            @stainedglasspokemon
          </a>{' '}
          — For customs only
        </li>
        <li>
          <a
            href="https://www.instagram.com/rarecardhunterz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            @rarecardhunterz
          </a>{' '}
          — For all TCGs including customs
        </li>
      </ul>

      <p className="mb-6 leading-7">
        Our cards are printed on a Heidelberg Versafire LV printer with
        holographic texture and high-density cardstock that feels like any
        other TCG card yet more durable.
      </p>

      <p className="font-semibold">Official Card Store of RareCardHunterz</p>
    </section>
  );
}

export const Xlayout = {
  areaId: 'productPageBottom',
  sortOrder: 10
};

export const Xquery = `
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
