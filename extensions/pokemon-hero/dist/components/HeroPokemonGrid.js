// import { useRef } from 'react';
// // Pokemon image paths (relative to /public/pokemon/)
// const pokemonCards = [
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp',
//   '/pokemon/ex-card-4.webp'
//   // Add more...
// ];
// // Duplicate for seamless infinite scroll
// const doubledCards = [...pokemonCards, ...pokemonCards];
// export default function HeroPokemonGrid() {
//   const containerRef = useRef(null);
//   return (
//     <div>
//       <img src='/pokemon/ex-card-4.webp' />
//     </div>
//   );
//   return (
//     <section className='overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900 py-20'>
//       <style>{`
//         @keyframes scroll-left {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(-80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .scroll-container {
//           animation: scroll-left 30s linear infinite;
//         }
//         .card-fade-up-0 {
//           animation: fade-in-up 0.6s ease-out 0s forwards;
//           opacity: 0;
//         }
//         .card-fade-up-1 {
//           animation: fade-in-up 0.6s ease-out 0.15s forwards;
//           opacity: 0;
//         }
//         .card-fade-up-2 {
//           animation: fade-in-up 0.6s ease-out 0.3s forwards;
//           opacity: 0;
//         }
//         .card-fade-down-0 {
//           animation: fade-in-down 0.6s ease-out 0s forwards;
//           opacity: 0;
//         }
//         .card-fade-down-1 {
//           animation: fade-in-down 0.6s ease-out 0.15s forwards;
//           opacity: 0;
//         }
//         .card-fade-down-2 {
//           animation: fade-in-down 0.6s ease-out 0.3s forwards;
//           opacity: 0;
//         }
//       `}</style>
//       <div className='container mx-auto px-4'>
//         <h1 className='text-center text-5xl font-bold text-white mb-12'>Catch Em All - Animated Grid</h1>
//         {/* ---- INFINITE SCROLL ROW ---- */}
//         <div ref={containerRef} className='flex gap-6 scroll-container'>
//           {doubledCards.map((src, idx) => {
//             const colIdx = idx % pokemonCards.length;
//             const isOdd = colIdx % 2 === 1;
//             return <PokemonColumn key={`${idx}-${src}`} src={src} direction={isOdd ? 'down' : 'up'} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
// // One column (3 cards, 35 degree tilt, staggered entrance)
// function PokemonColumn({ src, direction }) {
//   return (
//     <div className='flex flex-col gap-4' style={{ perspective: '1000px' }}>
//       {[0, 1, 2].map((i) => (
//         <div
//           key={i}
//           className={`relative w-44 h-64 origin-bottom card-fade-${direction}-${i}`}
//           style={{
//             transform: 'rotateX(35deg)',
//             transformStyle: 'preserve-3d'
//           }}
//         >
//           <img src={src} alt='Pokemon card' className='absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl' />
//         </div>
//       ))}
//     </div>
//   );
// }
