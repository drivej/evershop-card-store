
      import React from 'react';
      import { hydrateRoot } from 'react-dom/client.js';
      import { Area, setAreaComponents, reportClientError } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e0b8a7fbe from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Base.js';
import e5f0a74d0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Breadcrumb.js';
import e383c895b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GlobalCss.js';
import e37830ab2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GoogleAnalytics.js';
import e05859dfa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/HeadTags.js';
import e20e02646 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/LanguageSwitcher.js';
import e25537413 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/Logo.js';
import e25e513e8 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Notification.js';
import e43650550 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/TailwindCss.js';
import e426029f0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e0df7cfd2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCartIcon.js';
import e2a913111 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/CustomerIcon.js';
import e20afd2e4 from 'file:///Users/jasoncontento/lab/my-evershop-app/extensions/sample/dist/pages/frontStore/all/FreeShippingMessage.js';
import e28d58679 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/AppVersion.js';
import e0221754e from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/CustomFooter.js';
import e7d267be4 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/InstagramLink.js';
import e1ec9751b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/components/frontStore/FeaturedBlogs.js';
import e1227c06d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RelatedProducts.js';
import e73ee597b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/FrequentlyBoughtTogether.js';
import e769dbcfb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/UpsellProducts.js';
import e0a9225d2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CartFrequentlyBoughtTogether.js';
import e68b9036a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProducts.js';
import e6b63c1be from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionStack.js';
import e49bc63f2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionSpotlight.js';
import e09375765 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/ProductHero.js';
import e106614e2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/Columns.js';
import e56a5bfd6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlock.js';
import e6e36f055 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenu.js';
import e0601d408 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FooterMenu.js';
import e58e4cd87 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/Banner.js';
import e52783d53 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/Slideshow.js';
import e4feee73e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BrandStory.js';
import e7bcde510 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CategoryMosaic.js';
import e7a66cddf from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TieredCategories.js';
import e35d1147a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BentoGrid.js';
import e766832aa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/Separator.js';
import e4d39fbea from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/Section.js';
import e2de497ea from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SplitFeature.js';
import e345faa4a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/AnnouncementBar.js';
import e4665a94f from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CouponBlock.js';
import e7ff62617 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FaqBlock.js';
import e1347f4f6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TrustStrip.js';
setAreaComponents('customerLoginJson', {
  body: {
    e0b8a7fbe: {
      id: 'e0b8a7fbe',
      sortOrder: 1,
      component: { default: e0b8a7fbe }
    },
    e37830ab2: {
      id: 'e37830ab2',
      sortOrder: 1,
      component: { default: e37830ab2 }
    },
    e25e513e8: {
      id: 'e25e513e8',
      sortOrder: 10,
      component: { default: e25e513e8 }
    },
    e20afd2e4: {
      id: 'e20afd2e4',
      sortOrder: 0,
      component: { default: e20afd2e4 }
    },
    e28d58679: {
      id: 'e28d58679',
      sortOrder: 1000,
      component: { default: e28d58679 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    }
  },
  head: {
    e383c895b: {
      id: 'e383c895b',
      sortOrder: 5,
      component: { default: e383c895b }
    },
    e05859dfa: {
      id: 'e05859dfa',
      sortOrder: 5,
      component: { default: e05859dfa }
    },
    e43650550: {
      id: 'e43650550',
      sortOrder: 1,
      component: { default: e43650550 }
    }
  },
  headerMiddleRight: {
    e20e02646: {
      id: 'e20e02646',
      sortOrder: 1,
      component: { default: e20e02646 }
    },
    e426029f0: {
      id: 'e426029f0',
      sortOrder: 5,
      component: { default: e426029f0 }
    },
    e0df7cfd2: {
      id: 'e0df7cfd2',
      sortOrder: 20,
      component: { default: e0df7cfd2 }
    },
    e2a913111: {
      id: 'e2a913111',
      sortOrder: 10,
      component: { default: e2a913111 }
    },
    e7d267be4: {
      id: 'e7d267be4',
      sortOrder: 5,
      component: { default: e7d267be4 }
    }
  },
  headerMiddleCenter: {
    e25537413: {
      id: 'e25537413',
      sortOrder: 10,
      component: { default: e25537413 }
    }
  },
  footerBottomRight: {
    e0221754e: {
      id: 'e0221754e',
      sortOrder: 10,
      component: { default: e0221754e }
    }
  },
  '*': {
    e1ec9751b: {
      id: 'e1ec9751b',
      sortOrder: 0,
      component: { default: e1ec9751b }
    },
    e1227c06d: {
      id: 'e1227c06d',
      sortOrder: 0,
      component: { default: e1227c06d }
    },
    e73ee597b: {
      id: 'e73ee597b',
      sortOrder: 0,
      component: { default: e73ee597b }
    },
    e769dbcfb: {
      id: 'e769dbcfb',
      sortOrder: 0,
      component: { default: e769dbcfb }
    },
    e0a9225d2: {
      id: 'e0a9225d2',
      sortOrder: 0,
      component: { default: e0a9225d2 }
    },
    e68b9036a: {
      id: 'e68b9036a',
      sortOrder: 0,
      component: { default: e68b9036a }
    },
    e6b63c1be: {
      id: 'e6b63c1be',
      sortOrder: 0,
      component: { default: e6b63c1be }
    },
    e49bc63f2: {
      id: 'e49bc63f2',
      sortOrder: 0,
      component: { default: e49bc63f2 }
    },
    e09375765: {
      id: 'e09375765',
      sortOrder: 0,
      component: { default: e09375765 }
    },
    e106614e2: {
      id: 'e106614e2',
      sortOrder: 0,
      component: { default: e106614e2 }
    },
    e56a5bfd6: {
      id: 'e56a5bfd6',
      sortOrder: 0,
      component: { default: e56a5bfd6 }
    },
    e6e36f055: {
      id: 'e6e36f055',
      sortOrder: 0,
      component: { default: e6e36f055 }
    },
    e0601d408: {
      id: 'e0601d408',
      sortOrder: 0,
      component: { default: e0601d408 }
    },
    e58e4cd87: {
      id: 'e58e4cd87',
      sortOrder: 0,
      component: { default: e58e4cd87 }
    },
    e52783d53: {
      id: 'e52783d53',
      sortOrder: 0,
      component: { default: e52783d53 }
    },
    e4feee73e: {
      id: 'e4feee73e',
      sortOrder: 0,
      component: { default: e4feee73e }
    },
    e7bcde510: {
      id: 'e7bcde510',
      sortOrder: 0,
      component: { default: e7bcde510 }
    },
    e7a66cddf: {
      id: 'e7a66cddf',
      sortOrder: 0,
      component: { default: e7a66cddf }
    },
    e35d1147a: {
      id: 'e35d1147a',
      sortOrder: 0,
      component: { default: e35d1147a }
    },
    e766832aa: {
      id: 'e766832aa',
      sortOrder: 0,
      component: { default: e766832aa }
    },
    e4d39fbea: {
      id: 'e4d39fbea',
      sortOrder: 0,
      component: { default: e4d39fbea }
    },
    e2de497ea: {
      id: 'e2de497ea',
      sortOrder: 0,
      component: { default: e2de497ea }
    },
    e345faa4a: {
      id: 'e345faa4a',
      sortOrder: 0,
      component: { default: e345faa4a }
    },
    e4665a94f: {
      id: 'e4665a94f',
      sortOrder: 0,
      component: { default: e4665a94f }
    },
    e7ff62617: {
      id: 'e7ff62617',
      sortOrder: 0,
      component: { default: e7ff62617 }
    },
    e1347f4f6: {
      id: 'e1347f4f6',
      sortOrder: 0,
      component: { default: e1347f4f6 }
    }
  }
});
hydrateRoot(
        document.getElementById('app'),
        React.createElement(HydrateFrontStore, null),
        {
          onUncaughtError: function (error, info) { reportClientError('uncaught', error, info); },
          onRecoverableError: function (error, info) { reportClientError('recoverable', error, info); }
        }
      );