import React, { useEffect } from 'react';
import HeroPokemonGrid from '../../components/HeroPokemonGrid';

interface Product {
  productId: number;
  name: string;
  urlKey: string;
  image: {
    url: string;
    alt: string;
  };
  category: {
    categoryId: number;
    name: string;
  };
  url: string;
}

// interface ProductImage {
//   url: string;
//   alt: string;
// }

// interface ProductCategory {
//   categoryId: number;
//   name: string;
//   // urlKey: string;
// }

// interface ProductLink {
//   view: string;
// }

// interface ProductItem {
//   productId: string;
//   name: string;
//   urlKey: string;
//   image: ProductImage | null;
//   categories: ProductCategory[];
//   links: ProductLink;
// }

// interface ProductsData {
//   products: {
//     items: ProductItem[];
//   };
// }
interface HeroProps {
  products?: {
    items: Product[];
  };
}

export default function Hero({ products }: HeroProps) {
  // console.log(products);
  const productCards =
    products?.items
      ?.filter((product) => product.category?.name?.toLowerCase() === 'cards')
      ?.filter((product) => product.image?.url)
      ?.map((product) => ({
        name: product.name,
        href: product.url,
        img: product.image.url
      }))
      .map((e) => {
        console.log(e);
        return e;
      }) || [];

      const productCardsAll =
    products?.items
      .map((e) => {
        return e;
      }) || [];

      useEffect(() => {
        console.log('productCardsAll', productCardsAll);
      }, [productCardsAll]);  
      
  return <HeroPokemonGrid products={productCards} />;
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
