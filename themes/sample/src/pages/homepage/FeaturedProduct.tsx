// import { getProductsBaseQuery } from '@evershop/evershop/catalog/services';
import React from 'react';
// import { useQuery } from '@evershop/evershop/src/lib/graphql/useQuery'; // EverShop’s GraphQL hook
// import { Link } from 'react-router-dom';
// import { gql } from '@apollo/client'; // For GraphQL queries

export default function FeaturedProduct() {
  return (
    <div className='container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md mt-10'>
      <h2 className='font-bold text-center mb-6'>Featured Product</h2>
      <p className=' text-gray-700 text-center'>This component is only rendered on the home page.</p>
    </div>
  );
}

// // GraphQL query to fetch a featured product
// const GET_FEATURED_PRODUCT = gql`
//   query getFeaturedProduct($filters: [FilterInput]) {
//     products(filters: $filters) {
//       items {
//         productId
//         name
//         price
//         image {
//           url
//           alt
//         }
//         urlKey
//       }
//     }
//   }
// `;

// interface Product {
//   productId: number;
//   name: string;
//   price: number;
//   image: { url: string; alt: string };
//   urlKey: string;
// }

// const FeaturedProduct: React.FC = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const { data, loading, error } = useQuery(GET_FEATURED_PRODUCT, {
//     variables: {
//       filters: [
//         { key: 'product_id', operation: '=', value: '1' } // Replace '1' with your product ID
//       ]
//     }
//   });

//   useEffect(() => {
//     if (data?.products?.items?.[0]) {
//       setProduct(data.products.items[0]);
//     }
//   }, [data]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!product) return <div>No featured product found.</div>;

//   return (
//     <div className="featured-product">
//       <h2>Featured Pokémon Card</h2>
//       <div style={{ textAlign: 'center', padding: '20px' }}>
//         <img
//           src={product.image.url}
//           alt={product.image.alt || product.name}
//           style={{ maxWidth: '300px', height: 'auto' }}
//         />
//         <h3>{product.name}</h3>
//         <p>${product.price.toFixed(2)}</p>
//         <Link to={`/product/${product.urlKey}`}>
//           <button style={{ padding: '10px 20px', background: '#007bff', color: '#fff' }}>
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;
