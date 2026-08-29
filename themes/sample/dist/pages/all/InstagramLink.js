import { Instagram } from 'lucide-react';
import React from 'react';
const INSTAGRAM_URL = 'https://www.instagram.com/stainedglasspokemon';
export default function InstagramLink() {
    return /*#__PURE__*/ React.createElement("a", {
        href: INSTAGRAM_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Rare Card Hunterz on Instagram",
        className: "rounded-md p-2 text-foreground/80 hover:bg-muted hover:text-foreground"
    }, /*#__PURE__*/ React.createElement(Instagram, {
        className: "h-5 w-5",
        "aria-hidden": "true"
    }));
}
export const layout = {
    areaId: 'headerMiddleRight',
    sortOrder: 5
};
