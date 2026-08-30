import React from 'react';

export default function CustomFooter() {
  return (
    <div className='container mx-auto p-10 bg-gray-100 rounded-xl shadow-md mt-10 text-center'>
      <h2 className='text-3xl mb-3'>CustomFooter</h2>
      <p>xxxxxx</p>
    </div>
  );
}

export const layout = {
  areaId: 'footerBottomRight',
  sortOrder: 10
};
