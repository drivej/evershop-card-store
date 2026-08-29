import { Instagram } from 'lucide-react';
import React from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/stainedglasspokemon';

export default function InstagramLink() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rare Card Hunterz on Instagram"
      className="rounded-md p-2 text-foreground/80 hover:bg-muted hover:text-foreground"
    >
      <Instagram className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

export const layout = {
  areaId: 'headerMiddleRight',
  sortOrder: 5
};
