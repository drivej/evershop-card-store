// HeroPokemonGrid.jsx
import React, { useMemo, useRef, useState } from 'react';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';
const pokemonCards = [
    // '/pokemon/ex-card-4.webp',
    {
        img: '/pokemon/UmbreonVmaxSG.webp',
        href: '/cards/Shiny-Umbreon'
    },
    {
        img: '/pokemon/UmbreonVmaxVangogh.webp',
        href: '/cards/Umbreon-Starry-Night'
    },
    {
        img: '/pokemon/NinetalesVmaxSG.webp',
        href: '/cards/Shiny-Ninetales'
    },
    {
        img: '/pokemon/DittoVmaxSG.webp',
        href: '/cards/Shiny-Ditto'
    },
    {
        img: '/pokemon/MewVmaxSG.webp',
        href: '/cards/Shiny-Mew'
    },
    {
        img: '/pokemon/UmbreonVSG.webp',
        href: '/cards/Umbreon'
    }
];
console.log({
    pokemonCards
});
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const defaultCardConfig = {
    totalCards: 200,
    width: 180,
    height: 250,
    overlap: 0.8
};
function spiralCards(rect, config) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    let radius = config.height * 0.5;
    let radiusStep = config.height * 0.06;
    let x = 0;
    let y = 0;
    let rotation = 0;
    let angle = 0;
    const RAD = Math.PI / 180;
    const cards = [];
    let visible = true;
    let cardId = 0;
    for(let i = 0; i < 200; i++){
        x = centerX + radius * Math.cos(angle * RAD);
        y = centerY + radius * Math.sin(angle * RAD);
        rotation = ((angle + 90) % 360 + 360) % 360; // Normalize to 0-360
        if (rotation > 180) rotation -= 360; // Convert to -180 to 180
        visible = x > -config.width && x < rect.width + config.width && y > -config.height && y < rect.height + config.height;
        if (visible) {
            cards.push({
                id: cardId++,
                x,
                y,
                rotation,
                transitionDelay: i * 30
            });
        }
        radius += radiusStep;
        angle += 180 * (config.width * 0.95) / (Math.PI * radius);
    }
    return cards;
}
function gridCards(rect, config) {
    const spacing = 10;
    const _cardWidth = config.width + spacing;
    const _cardHeight = config.height + spacing;
    const rows = Math.floor(rect.height / _cardHeight) + 1;
    const cols = Math.floor(rect.width / _cardWidth) + 2;
    const totalCards = rows * cols;
    const cards = [];
    const offset = {
        x: config.width * -0.3,
        y: config.height * -0.3
    };
    for(let i = 0; i < totalCards; i++){
        const c = i % cols;
        const r = Math.floor(i / cols);
        const y = offset.y + r * _cardHeight;
        const x = offset.x + c * _cardWidth;
        cards.push({
            id: i,
            x,
            y,
            rotation: 0,
            transitionDelay: i * 30
        });
    }
    return cards;
}
function messyCards(rect, config) {
    const cards = [];
    for(let i = 0; i < 50; i++){
        const y = rand(-config.height, rect.height);
        const x = rand(-config.width, rect.width);
        const rotation = rand(-30, 30);
        cards.push({
            id: i,
            x,
            y,
            rotation,
            transitionDelay: i * 30
        });
    }
    return cards;
}
function fanCards(rect, config) {
    const cards = [];
    const centerX = rect.width / 2;
    const centerY = rect.height * 2; // 1 rectangle height below the bottom
    const radius = rect.height * 1.8; // Radius reaches 66% above the bottom (2 - 0.34 = 1.66)
    const totalCards = 30; // More cards for closer spacing
    const arcSpan = 160; // degrees - wider arc span
    for(let i = 0; i < totalCards; i++){
        const angle = -90 - arcSpan / 2 + i / (totalCards - 1) * arcSpan;
        const rad = angle * Math.PI / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);
        let rotation = angle + 90;
        // Normalize rotation to -180 to 180
        rotation = (rotation % 360 + 360) % 360;
        if (rotation > 180) rotation -= 360;
        cards.push({
            id: i,
            x,
            y,
            rotation
        });
    }
    return cards;
}
function stackCards(rect, config) {
    const cards = [];
    const centerX = rect.width * 0.5;
    const centerY = rect.height * 0.5;
    const y = centerY - config.height / 2;
    const x = centerX - config.width / 2;
    for(let i = 0; i < 30; i++){
        cards.push({
            id: i,
            x,
            y,
            rotation: 0
        });
    }
    return cards;
}
function fallCards(rect, config) {
    const cards = [];
    const spacing = 10;
    const _cardWidth = config.width + spacing;
    const _cardHeight = config.height + spacing;
    const rows = Math.floor(rect.height / _cardHeight) + 1;
    const cols = Math.floor(rect.width / _cardWidth) + 2;
    const totalCards = rows * cols;
    const offset = {
        x: config.width * -0.3,
        y: config.height * -0.3
    };
    const fallDistance = rect.height * 1.5; // Cards fall 1.5x the rectangle height below
    for(let i = 0; i < totalCards; i++){
        const c = i % cols;
        const r = Math.floor(i / cols);
        const _y = offset.y + r * _cardHeight;
        const x = offset.x + c * _cardWidth;
        // Keep the left position, but move cards down by fallDistance
        const y = _y + fallDistance;
        const rotation = rand(-15, 15); // Slight random rotation as they fall
        cards.push({
            id: i,
            x,
            y,
            rotation,
            transitionDelay: i * 10
        });
    }
    return cards;
}
function getOffstageAngles() {
    const angles = [];
    for(let i = 0; i < defaultCardConfig.totalCards; i++){
        angles.push(rand(0, 360));
    }
    return angles;
}
const offstageAngles = getOffstageAngles();
function offstageCards(rect, config) {
    const cards = [];
    const radius = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) + config.height + 100;
    for(let i = 0; i < defaultCardConfig.totalCards; i++){
        const a = offstageAngles[i]; // rand(0, 360);
        const y = radius * Math.sin(a);
        const x = radius * Math.cos(a);
        cards.push({
            id: i,
            x,
            y,
            rotation: rand(-30, 30),
            transitionDelay: i * 3
        });
    }
    return cards;
}
export default function HeroPokemonGrid() {
    const ref = useRef(null);
    const [{ width = 0, height = 0 }, setSize] = useState({
        width: undefined,
        height: undefined
    });
    const onResize = useDebounceCallback(setSize, 200);
    useResizeObserver({
        ref,
        onResize
    });
    function shuffleCards() {
        setLayoutModeIndex((index)=>{
            let next = index;
            while(next === index){
                next = ~~(Math.random() * layoutModes.length);
            }
            return next;
        });
    }
    const cardWidth = defaultCardConfig.width; // 180;
    const [layoutModeIndex, setLayoutModeIndex] = useState(0);
    // Generate all layout card positions
    const offstageLayout = useMemo(()=>offstageCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    const spiralLayout = useMemo(()=>spiralCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    const gridLayout = useMemo(()=>gridCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    const messyLayout = useMemo(()=>messyCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    const fanLayout = useMemo(()=>fanCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    const stackLayout = useMemo(()=>stackCards({
            width,
            height
        }, defaultCardConfig), [
        width,
        height
    ]);
    // const fallLayout = useMemo(() => fallCards({ width, height }, defaultCardConfig), [width, height]);
    const layoutModes = [
        spiralLayout,
        gridLayout,
        messyLayout,
        fanLayout,
        stackLayout
    ];
    const currentLayout = layoutModes[layoutModeIndex];
    // Combine current layout with offstage cards for any missing cards
    const cards = useMemo(()=>{
        const combined = [];
        for(let i = 0; i < 200; i++){
            if (i < currentLayout.length) {
                combined.push({
                    ...currentLayout[i],
                    id: i
                });
            } else {
                combined.push({
                    ...offstageLayout[i],
                    id: i
                });
            }
        }
        return combined;
    }, [
        currentLayout,
        offstageLayout
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        ref: ref
    }, /*#__PURE__*/ React.createElement("style", null, `
        .section-inset-shadow {
          position: relative;
          overflow: hidden;
          // overflow-y: visible;
          // height: 80vh;
        }
        .section-inset-shadow::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
        }
        .pokemon-card {
          position: absolute;
          max-width: ${cardWidth}px;
          height: auto;
          zindex: 0;
          filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
          border-radius: 10px;
        }
        .pokemon-card:hover {
          // transform: rotate(0deg) scale(1.1) !important;
          z-index: 1000;
          filter: drop-shadow(15px 15px 12px rgba(0, 0, 0, 0.5));
        }
      `), /*#__PURE__*/ React.createElement("section", {
        className: "section-inset-shadow bg-gradient-to-b from-gray-200 to-gray-50"
    }, cards.map((card)=>/*#__PURE__*/ React.createElement("a", {
            key: card.id,
            href: pokemonCards[card.id % pokemonCards.length].href
        }, /*#__PURE__*/ React.createElement("img", {
            src: pokemonCards[card.id % pokemonCards.length].img,
            alt: `Pokemon ${card.id}`,
            className: "pokemon-card",
            style: {
                transform: `translate(${card.x}px, ${card.y}px) rotate(${card.rotation}deg)`,
                transition: `transform 0.5s ease-in-out ${card.transitionDelay ?? card.id * 3}ms`
            }
        }))), /*#__PURE__*/ React.createElement("div", {
        className: "Xborder-r-8 Xborder-blue-500 z-50 relative backdrop-blur-xl bg-stone-800/50 text-white my-28 p-20 lg:w-[33%] inline-block lg:rounded-r-3xl mb-[20%]"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "text-3xl font-bold mb-6"
    }, "Welcome to the shop!"), /*#__PURE__*/ React.createElement("h1", {
        className: "text-5xl font-dmsans-400 leading-tight tracking-normal mb-6"
    }, "We specialize in artistic interpretations of your favorite characters in our exclusive stained glass style."), /*#__PURE__*/ React.createElement("div", {
        className: "border-white/30 border-b-2 my-5"
    }), /*#__PURE__*/ React.createElement("p", {
        className: "mb-10"
    }, "We're excited to share our love for Pokémon with you. Each piece is a labor of love, meticulously crafted to capture the essence of your favorite characters. Whether you're a seasoned collector or a casual fan, our collection is sure to impress."), /*#__PURE__*/ React.createElement("button", {
        className: "text-4xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-7 rounded-lg shadow-lg transition duration-150 ease-in-out"
    }, "Shop Now"), /*#__PURE__*/ React.createElement("button", {
        className: "ms-3 text-4xl bg-emerald-600 hover:bg-emerald-500 text-white Xfont-bold py-4 px-7 rounded-lg shadow-lg transition duration-150 ease-in-out",
        onClick: shuffleCards
    }, "Shuffle"))));
}
