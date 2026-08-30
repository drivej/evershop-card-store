import React from 'react';
import pkg from '../../../../../package.json';
export default function AppVersion() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "p-2 bg-gray-300 text-grey-100 text-center"
    }, pkg.version);
}
export const layout = {
    areaId: 'body',
    sortOrder: 1000
};
