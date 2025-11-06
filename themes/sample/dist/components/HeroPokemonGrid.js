// HeroPokemonGrid.jsx
import React, { useRef, useState } from 'react';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';
const pokemonCards = [
    '/pokemon/ex-card-4.webp'
];
const rotations = Array(200).fill(0).map(()=>rand(-30, 30));
const offsets = Array(200).fill(0).map(()=>({
        top: rand(-30, 30),
        left: rand(-30, 30)
    }));
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    const cardWidth = 180;
    const cardHeight = 250;
    const _cardWidth = 180 * 0.8;
    const _cardHeight = 250 * 0.8;
    const rows = Math.floor(height / _cardHeight);
    const cols = Math.floor(width / _cardWidth) + 1;
    const totalCards = rows * cols;
    const cards = Array(totalCards).fill(0);
    function cardOffset(i) {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const _top = r * _cardHeight;
        const _left = c * _cardWidth;
        const top = _top + offsets[i].top;
        const left = _left + offsets[i].left;
        return {
            top,
            left
        };
    }
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
          transition: transform 0.4s ease-out;
          position: absolute;
          max-width: ${cardWidth}px;
          height: auto;
          // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          zindex: 0;
          transition: all 0.4s ease-out;
          filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
        }
        .pokemon-card {}
        .pokemon-card:hover {
          transform: rotate(0deg) scale(1.1) !important;
          z-index: 1000;
          filter: drop-shadow(15px 15px 12px rgba(0, 0, 0, 0.5));
        }
      `), /*#__PURE__*/ React.createElement("section", {
        className: "section-inset-shadow"
    }, cards.map((_, i)=>/*#__PURE__*/ React.createElement("a", {
            key: i,
            href: "/"
        }, /*#__PURE__*/ React.createElement("img", {
            key: `card${i}`,
            src: pokemonCards[i % pokemonCards.length],
            alt: `Pokemon ${i}`,
            className: "pokemon-card",
            style: {
                ...cardOffset(i),
                transform: `rotate(${rotations[i]}deg)`
            }
        }))), /*#__PURE__*/ React.createElement("div", {
        className: "border-r-8 border-blue-500 z-50 relative backdrop-blur-xl bg-stone-800/50 text-white my-28 p-20 lg:w-[50%] inline-block rounded-r-3xl mb-[20%]"
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
    }, "Shop Now"))));
}

