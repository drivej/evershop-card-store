import React from 'react';
export default function Cardistry() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "container mx-auto px-4 py-8"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "font-dmsans text-4xl font-bold mb-4"
    }, "Cardistry with DM Sans"), /*#__PURE__*/ React.createElement("p", {
        className: "font-dmsans text-lg"
    }, "This text should be in DM Sans font."), /*#__PURE__*/ React.createElement("p", {
        className: "text-lg mt-4"
    }, "This text uses the default font."));
}
export const layout = {
    areaId: 'content',
    sortOrder: 31
};
