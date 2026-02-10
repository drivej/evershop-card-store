import React from 'react';
import HeroPokemonGrid from '../../components/HeroPokemonGrid';

export default function OnlyHomePage() {
  return <HeroPokemonGrid />;
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
