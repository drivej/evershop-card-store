import React from 'react';
import GlobalStyles from './GlobalStyles.js';

const FALLBACK_LOGO = '/assets/images/RCH_badge_big.png';

type LogoProps = {
  setting?: {
    logo?: string | null;
    logoWidth?: string | null;
    logoHeight?: string | null;
    storeName?: string | null;
  };
};

export default function Logo({ setting }: LogoProps) {
  const logo = setting?.logo || FALLBACK_LOGO;
  const width = Number(setting?.logoWidth) || 70;
  const height = Number(setting?.logoHeight) || 70;
  const storeName = setting?.storeName || 'Rare Card Hunterz';
  const optimizedSrc = `/images?src=${encodeURIComponent(logo)}&w=${width}&q=85&f=webp`;

  return (
    <>
      {/* Logo is part of the hydrated body tree in EverShop 2.2, making it a
          reliable mount point for the theme's global style element. */}
      <GlobalStyles />
      <div className="logo flex justify-center items-center">
        <a href="/" className="logo-icon" aria-label={`${storeName} – home`}>
          <img
            src={optimizedSrc}
            alt="Rare Card Hunterz"
            width={width}
            height={height}
            className="max-h-[70px] w-auto max-w-full"
          />
        </a>
      </div>
    </>
  );
}

export const layout = {
  areaId: 'headerMiddleCenter',
  sortOrder: 10
};

export const query = `
  query query {
    setting {
      logo
      logoWidth
      logoHeight
      storeName
    }
  }
`;
