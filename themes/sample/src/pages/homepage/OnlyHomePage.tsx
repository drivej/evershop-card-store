import React from 'react';

export default function OnlyHomePage() {
  return (
    <div className='container mx-auto p-10 bg-gray-100 rounded-xl shadow-md mt-10 text-center'>
      {/* <h1 className="font-bold text-center mb-6">Home Page Only React Component</h1> */}
      <h2 className='text-3xl mb-3'>We're excited to share our love for Pokémon with you. </h2>
      <p>Each piece is a labor of love, meticulously crafted to capture the essence of your favorite characters. Whether you're a seasoned collector or a casual fan, our collection is sure to impress.</p>
      {/* <p className=" text-gray-700 text-center">
        This component is only rendered on the home page.
      </p>
      <p className=" text-gray-700 text-center">
        You can modify this component at{' '}
        <code>`themes/sample/src/pages/homepage/OnlyHomePage.tsx`</code>
      </p>
      <p className=" text-gray-700 text-center">
        You can also remove this by disabling the theme `sample`.
      </p> */}
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
