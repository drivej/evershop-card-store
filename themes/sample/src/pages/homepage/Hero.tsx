import React from 'react';

export default function OnlyHomePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md mt-10">
      <div className="max-w-md flex flex-col md:flex-row gap-8 mx-auto justify-center items-center">
        <h2 className=" text-gray-700 text-center">
          Welcome
        </h2>
        <img src="/images/motorcycle.jpg" alt="Hero" className="w-100 h-auto" style={{maxWidth: '250px'}} />
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
