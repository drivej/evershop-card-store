import React from 'react';
import HeroPokemonGrid from '../../components/HeroPokemonGrid';
export default function OnlyHomePage() {
    return /*#__PURE__*/ React.createElement(HeroPokemonGrid, null);
    return /*#__PURE__*/ React.createElement("div", {
        className: "Xcontainer mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md mt-10"
    }, /*#__PURE__*/ React.createElement(HeroPokemonGrid, null));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
