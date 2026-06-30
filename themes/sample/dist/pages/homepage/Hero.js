import { gql } from '@apollo/client';
import React from 'react';
import HeroPokemonGrid from '../../components/HeroPokemonGrid';
// export default function Hero({ products }: any) {
//   console.log(products);
//   return (
//     <div>
//       <pre>{JSON.stringify({ products }, null, 2)}</pre>
//     </div>
//   );
// }
export default function Hero({ products }) {
    console.log(products);
    const productCards = products?.items?.filter((product)=>product.category?.name?.toLowerCase() === 'cards')?.filter((product)=>product.image?.url)?.map((product)=>({
            name: product.name,
            href: product.url,
            img: product.image.url
        })) || [];
    return /*#__PURE__*/ React.createElement(HeroPokemonGrid, {
        products: productCards
    });
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
// GraphQL query to fetch products
// Filter by type="card" to only show card products
// Note: operation must be one of: eq, neq, gt, gteq, lt, lteq, like, nlike, in, nin
export const Xquery = `
  query Query {
    product (id: "6") {
      name
      sku
      urlKey
      image {
        url
        alt
      }
    }
  }`;
// import { pool } from "@evershop/evershop/lib/postgres";
// Get products from category ID 5
// export const query = getProductsByCategoryBaseQuery(5);
// const products = query
//   .where('status', '=', 1)
//   .execute(pool);
export const query = `
query {
  products {
    items {
    url
      productId
      name
      image {
        url
      }
      category {
        name
        categoryId
      }
    }
  }
}
`;
export const Xxquery = `
  query {
    category(id: 3) {
      name
      products(filters: [
        { key: "limit", operation: eq, value: "8" }
      ]) {
        items {
          productId
          uuid
          name
          sku
          url
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
          image {
            url
            alt
          }
        }
        total
      }
    }
  }
`;
export const Zquery = `
  query GetMenProducts {
    products(filter: {category: {name: {eq: "Men"}}}) {
      items {
        productId
        name
        urlKey
        image {
          url
          alt
        }
        links { 
          view 
        }
        category {
          name
          categoryId
        }
      }
    }
  }
`;
const GET_CARDS_PRODUCTS = gql`
  query GetCardsProducts {
    products(filter: { categoryUrlKey: { eq: "cards" } }) {
      items {
        productId
        name
        urlKey
        image {
          url
          alt
        }
        categories {
          categoryId
          name
          urlKey
        }
        links {
          view
        }
      }
    }
  }
`;

