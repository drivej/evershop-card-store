import React from 'react';
export default function AdminImageStyles() {
    return /*#__PURE__*/ React.createElement("style", null, `
      .grid-thumbnail img {
        width: auto !important;
        height: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: contain !important;
        aspect-ratio: auto !important;
      }
    `);
}
export const layout = {
    areaId: 'head',
    sortOrder: 10
};
