import React from 'react';

export default function AdminImageStyles() {
  return (
    <style>{`
      .grid-thumbnail img {
        width: auto !important;
        height: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: contain !important;
        aspect-ratio: auto !important;
      }
    `}</style>
  );
}

export const layout = {
  areaId: 'head',
  sortOrder: 10
};
