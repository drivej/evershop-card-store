import React from 'react';
import { Area, setAreaComponents } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
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
import e7d267be4 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/InstagramLink.js';
import e296ac657 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/all/MyFooter.js';
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
import e4ca49068 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/login/LoginPage.js';
import e49749dcf from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/orderList/OrderList.js';
import e7f82dee4 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/register/RegisterPage.js';
import e4a1b0729 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/resetPasswordPage/ResetPasswordPage.js';
import e3a9ff0d1 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/frontStore/blogHome/BlogHome.js';
import e6f27f2c4 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/SearchPage.js';
import e409003eb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/cart/ShoppingCart.js';
import e31f29fcd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/Checkout.js';
import e46fea095 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ZeroCheckout.js';
import e01866a95 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cod/pages/frontStore/checkout/CashOnDelivery.js';
import e5888fd13 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/checkout/Paypal.js';
import e1d1a21d3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/frontStore/checkout/Stripe.js';
import e28e1d967 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/homepage/Hero.js';
import e1763f787 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/homepage/OnlyHomePage.js';
import e3d6b4290 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/notFound/Meta.js';
import e723dfbc6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/notFound/NotFound.js';
import e0d9dfd7b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/account/MyAccount.js';
import e73e107b8 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/about/AboutPage.js';
import e039e71f7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/CheckoutSuccess.js';
import e006c28ee from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/CustomerInfo.js';
import e44695f5a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/ShippingNote.js';
import e625b468e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/Summary.js';
import e40bb39ff from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/orderTracking/OrderTracking.js';
import e56fdffdd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/orderView/OrderView.js';
import e71f5de03 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/paypalReturn/Error.js';
import e140fc551 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/frontStore/blogCategoryView/BlogCategoryView.js';
import e186a0d6f from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/frontStore/blogPostView/BlogPostView.js';
import e65124cad from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/frontStore/blogTagView/BlogTagView.js';
import e1b09e3ea from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/categoryView/CategoryView.js';
import e411eb237 from 'file:///Users/jasoncontento/lab/my-evershop-app/themes/sample/dist/pages/productView/ProductView.js';
import e7a0c2356 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/cmsPageView/CmsPageView.js';
export default renderHtml;
setAreaComponents('blogRss', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('customerLogoutJson', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('login', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e4ca49068: {
      id: 'e4ca49068',
      sortOrder: 10,
      component: { default: e4ca49068 }
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
setAreaComponents('orderList', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e49749dcf: {
      id: 'e49749dcf',
      sortOrder: 10,
      component: { default: e49749dcf }
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
setAreaComponents('register', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e7f82dee4: {
      id: 'e7f82dee4',
      sortOrder: 10,
      component: { default: e7f82dee4 }
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
setAreaComponents('resetPasswordPage', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e4a1b0729: {
      id: 'e4a1b0729',
      sortOrder: 10,
      component: { default: e4a1b0729 }
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
setAreaComponents('stripeReturn', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('blogHome', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e3a9ff0d1: {
      id: 'e3a9ff0d1',
      sortOrder: 10,
      component: { default: e3a9ff0d1 }
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
setAreaComponents('catalogSearch', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e6f27f2c4: {
      id: 'e6f27f2c4',
      sortOrder: 10,
      component: { default: e6f27f2c4 }
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
setAreaComponents('cart', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e409003eb: {
      id: 'e409003eb',
      sortOrder: 10,
      component: { default: e409003eb }
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
setAreaComponents('checkout', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e31f29fcd: {
      id: 'e31f29fcd',
      sortOrder: 10,
      component: { default: e31f29fcd }
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
  checkoutFormAfter: {
    e46fea095: {
      id: 'e46fea095',
      sortOrder: 15,
      component: { default: e46fea095 }
    },
    e01866a95: {
      id: 'e01866a95',
      sortOrder: 10,
      component: { default: e01866a95 }
    },
    e5888fd13: {
      id: 'e5888fd13',
      sortOrder: 10,
      component: { default: e5888fd13 }
    },
    e1d1a21d3: {
      id: 'e1d1a21d3',
      sortOrder: 10,
      component: { default: e1d1a21d3 }
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
setAreaComponents('homepage', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e28e1d967: {
      id: 'e28e1d967',
      sortOrder: 10,
      component: { default: e28e1d967 }
    },
    e1763f787: {
      id: 'e1763f787',
      sortOrder: 10,
      component: { default: e1763f787 }
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
setAreaComponents('images', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('notFound', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e723dfbc6: {
      id: 'e723dfbc6',
      sortOrder: 10,
      component: { default: e723dfbc6 }
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
    },
    e3d6b4290: {
      id: 'e3d6b4290',
      sortOrder: 1,
      component: { default: e3d6b4290 }
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
setAreaComponents('account', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e0d9dfd7b: {
      id: 'e0d9dfd7b',
      sortOrder: 10,
      component: { default: e0d9dfd7b }
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
setAreaComponents('about', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e73e107b8: {
      id: 'e73e107b8',
      sortOrder: 1,
      component: { default: e73e107b8 }
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
setAreaComponents('foo', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('checkoutSuccess', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e039e71f7: {
      id: 'e039e71f7',
      sortOrder: 10,
      component: { default: e039e71f7 }
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
  checkoutSuccessPageLeft: {
    e006c28ee: {
      id: 'e006c28ee',
      sortOrder: 10,
      component: { default: e006c28ee }
    }
  },
  checkoutSuccessSummary: {
    e44695f5a: {
      id: 'e44695f5a',
      sortOrder: 50,
      component: { default: e44695f5a }
    }
  },
  checkoutSuccessPageRight: {
    e625b468e: {
      id: 'e625b468e',
      sortOrder: 10,
      component: { default: e625b468e }
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
setAreaComponents('orderTracking', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e40bb39ff: {
      id: 'e40bb39ff',
      sortOrder: 10,
      component: { default: e40bb39ff }
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
setAreaComponents('orderView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e56fdffdd: {
      id: 'e56fdffdd',
      sortOrder: 10,
      component: { default: e56fdffdd }
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
setAreaComponents('paypalCancel', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
setAreaComponents('paypalReturn', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e71f5de03: {
      id: 'e71f5de03',
      sortOrder: 10,
      component: { default: e71f5de03 }
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
setAreaComponents('blogCategoryView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e140fc551: {
      id: 'e140fc551',
      sortOrder: 10,
      component: { default: e140fc551 }
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
setAreaComponents('blogPostView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e186a0d6f: {
      id: 'e186a0d6f',
      sortOrder: 10,
      component: { default: e186a0d6f }
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
setAreaComponents('blogTagView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e65124cad: {
      id: 'e65124cad',
      sortOrder: 10,
      component: { default: e65124cad }
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
setAreaComponents('categoryView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e1b09e3ea: {
      id: 'e1b09e3ea',
      sortOrder: 10,
      component: { default: e1b09e3ea }
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
setAreaComponents('productView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e411eb237: {
      id: 'e411eb237',
      sortOrder: 10,
      component: { default: e411eb237 }
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
setAreaComponents('cmsPageView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
    }
  },
  content: {
    e5f0a74d0: {
      id: 'e5f0a74d0',
      sortOrder: 0,
      component: { default: e5f0a74d0 }
    },
    e7a0c2356: {
      id: 'e7a0c2356',
      sortOrder: 1,
      component: { default: e7a0c2356 }
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
setAreaComponents('landingPageView', {
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
    e296ac657: {
      id: 'e296ac657',
      sortOrder: 100,
      component: { default: e296ac657 }
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
