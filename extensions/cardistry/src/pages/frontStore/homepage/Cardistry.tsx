import React from 'react';

export default function Cardistry(): React.ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-dmsans text-4xl font-bold mb-4">Cardistry with DM Sans</h1>
      <p className="font-dmsans text-lg">This text should be in DM Sans font.</p>
      <p className="text-lg mt-4">This text uses the default font.</p>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 31
};
