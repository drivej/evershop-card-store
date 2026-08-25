import React from 'react';
import HeroPokemonGrid from '../../components/HeroPokemonGrid';
export default function Hero({ products }) {
    // console.log(products);
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
