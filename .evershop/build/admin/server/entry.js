import React from 'react';
import { Area, setAreaComponents } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e30aa464b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e49456c19 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/FormCss.js';
import e6b9a27c6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e626ab3be from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e3a3880bd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e15d4b4fb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/TailwindCss.js';
import e1d67b957 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/all/BlogMenuGroup.js';
import e3c01ff6d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit+blogCategoryNew/BlogCategoryCustomFields.js';
import e50d4edef from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit+blogCategoryNew/General.js';
import e32402d7c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit+blogCategoryNew/PageHeading.js';
import e0cae7a5a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit+blogCategoryNew/Seo.js';
import e3e640f87 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit+blogCategoryNew/Setting.js';
import e740ba770 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryNew/CategoryNewForm.js';
import e0f794687 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e5ca7632a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogSettingMenu.js';
import e33206416 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e7bb05ede from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingProvidersMenu.js';
import e11f1cc90 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e549793a7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e7d9a04b7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e71f0b3bb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e21dac384 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e6040d805 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e77bfda3c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e3be79bdb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e1976c5f6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Survey.js';
import e15a757a6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e0743c9d7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e4c259b8f from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e295d3036 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e16d822ec from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/LandingPageMenuItem.js';
import e47334809 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e0539e0b2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e27991419 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e473cc2e9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e2cc45809 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SystemSettingMenu.js';
import e4d0c6ece from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e67d61f7d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/pageBuilder/pages/admin/all/StorefrontMenuGroup.js';
import e38280a90 from 'file:///Users/jasoncontento/lab/my-evershop-app/extensions/sample/dist/pages/admin/all/AdminImageStyles.js';
import e0189c42b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/components/admin/FeaturedBlogsSetting.js';
import e4108aa82 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/components/admin/FeaturedBlogsPreview.js';
import e21c10aa3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RecommendationWidgetSetting.js';
import e7d1fb73a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RelatedProductsPreview.js';
import e59fc226b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RecommendationWidgetSetting.js';
import e5ee0f96c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/FrequentlyBoughtTogetherPreview.js';
import e1418b015 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RecommendationWidgetSetting.js';
import e63bacb8c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/UpsellProductsPreview.js';
import e38938d1e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/RecommendationWidgetSetting.js';
import e03913fa7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CartFrequentlyBoughtTogetherPreview.js';
import e281f9e5a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import e0989e99d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsPreview.js';
import e377af6ae from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionStackSetting.js';
import e23e3b5e9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionStackPreview.js';
import e1c4fa0e2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionSpotlightSetting.js';
import e1fd717cb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionSpotlightPreview.js';
import e4d1fd58b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/ProductHeroSetting.js';
import e1f3d4574 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/components/ProductHeroPreview.js';
import e382997d2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/ColumnsSetting.js';
import e1f4aeaa5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/ColumnsPreview.js';
import e5077e91a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import e702dc0bd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockPreview.js';
import e15549945 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import e54aeef6e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuPreview.js';
import e3695a108 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FooterMenuSetting.js';
import e1d79f001 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FooterMenuPreview.js';
import e5a2d2c97 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import e7718a612 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BannerPreview.js';
import e221633bd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
import e6c593f0c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowPreview.js';
import e7379a3b2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BrandStorySetting.js';
import e3876cb45 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BrandStoryPreview.js';
import e06845220 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CategoryMosaicSetting.js';
import e56266d97 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CategoryMosaicPreview.js';
import e3c689b31 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TieredCategoriesSetting.js';
import e2bf1b4e8 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TieredCategoriesPreview.js';
import e714c9476 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BentoGridSetting.js';
import e4f591561 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/BentoGridPreview.js';
import e44a94666 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SeparatorSetting.js';
import e6ef8f8e3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SeparatorPreview.js';
import e74fd7eda from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SectionSetting.js';
import e1d88fc63 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SectionPreview.js';
import e5d8cf706 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SplitFeatureSetting.js';
import e14039631 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/SplitFeaturePreview.js';
import e0076df3a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/AnnouncementBarSetting.js';
import e5ae7cd5d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/AnnouncementBarPreview.js';
import e0ff183a1 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CouponBlockSetting.js';
import e1df10c76 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/CouponBlockPreview.js';
import e3b079f27 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FaqBlockSetting.js';
import e789aa022 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/FaqBlockPreview.js';
import e294f801a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TrustStripSetting.js';
import e2ac010ef from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/components/TrustStripPreview.js';
import e5d75edaf from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit+blogPostNew/General.js';
import e1250602c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit+blogPostNew/Organize.js';
import e61a50dbc from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit+blogPostNew/PageHeading.js';
import e5d81d1cd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit+blogPostNew/PostCustomFields.js';
import e03455a1a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit+blogPostNew/Seo.js';
import e47dce954 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostNew/PostNewForm.js';
import e5aff567d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagEdit+blogTagNew/General.js';
import e74474412 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagEdit+blogTagNew/PageHeading.js';
import e4770a618 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagEdit+blogTagNew/Seo.js';
import e62dc9baa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagNew/TagNewForm.js';
import e303bade8 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryGrid/Grid.js';
import e05e53ea0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryGrid/NewCategoryButton.js';
import e2875819d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryGrid/PageHeading.js';
import e04bf922b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCommentGrid/Grid.js';
import e358cd8c0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCommentGrid/PageHeading.js';
import e27b313ba from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostGrid/Grid.js';
import e4e438da4 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostGrid/NewPostButton.js';
import e281a05bb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostGrid/PageHeading.js';
import e2e332a70 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagGrid/Grid.js';
import e2c759196 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagGrid/NewTagButton.js';
import e38f0a725 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagGrid/PageHeading.js';
import e522aebd4 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/Avaibility.js';
import e5db4f46c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/General.js';
import e39f1ad7f from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/PageHeading.js';
import e432e0973 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeNew/AttributeNewForm.js';
import e0f781d91 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/catalogSetting/CatalogSetting.js';
import e2a3a1928 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/CategoryCustomFields.js';
import e1a9ce66a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/General.js';
import e6fc189fd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Image.js';
import e2d8e2d55 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/PageHeading.js';
import e60fa9181 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Seo.js';
import e3093ce5e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Status.js';
import e313ec987 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryNew/CategoryNewForm.js';
import e23d13588 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/CollectionCustomFields.js';
import e712372aa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/General.js';
import e768b666b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/PageHeading.js';
import e33fe46f9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionNew/CollectionNewForm.js';
import e44f4da1d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js';
import e09db3fae from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js';
import e4423669e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js';
import e1afe5c96 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js';
import e37b64499 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js';
import e1b9dacff from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/ProductCustomFields.js';
import e6ccb09c3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js';
import e2491ba5a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Shipping.js';
import e49e46022 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js';
import e12a568b5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productNew/DuplicateBanner.js';
import e68bf526d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productNew/ProductNewForm.js';
import e54cdc6fb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/shippingProviders/CoreShippingSetting.js';
import e5f93fbaa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/shippingProviders/ShippingProviders.js';
import e5c639172 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/shippingSetting/ShippingSetting.js';
import e47681994 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/General.js';
import e56255c57 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/PageHeading.js';
import e56f4bf81 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Seo.js';
import e07fd2110 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageNew/PageNewForm.js';
import e14c6a10b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/CustomerCondition.js';
import e0e7f0db5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/DiscountType.js';
import e54f9d060 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/General.js';
import e449353f9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/OrderCondition.js';
import e6923eb8b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/PageHeading.js';
import e2eee6033 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponNew/CouponNewForm.js';
import e26dfdf8a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit+landingPageNew/General.js';
import e248d8161 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit+landingPageNew/PageHeading.js';
import e74b73c1b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit+landingPageNew/Schedule.js';
import e61107175 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit+landingPageNew/Seo.js';
import e222c79ea from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit+landingPageNew/Status.js';
import e5f233643 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageNew/LandingPageNewForm.js';
import e5ed9419c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/paymentSetting/CODSetting.js';
import e7a9164c0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/paymentSetting/PaypalSetting.js';
import e68c1ed1a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/paymentSetting/PaymentSetting.js';
import e7e5e987e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/paymentSetting/StripePayment.js';
import e64bad346 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/storeSetting/StoreSetting.js';
import e50bd64c1 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/systemSetting/FileStorageSetting.js';
import e6b68e8aa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/systemSetting/SystemSetting.js';
import e17e6d2ff from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/taxSetting/TaxSetting.js';
import e3bb60d6b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/adminLogin/LoginForm.js';
import e21e83736 from 'file:///Users/jasoncontento/lab/my-evershop-app/extensions/sample/dist/pages/admin/adminLogin/HelloLogin.js';
import e1a5e77c5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeGrid/Grid.js';
import e7d92add3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeGrid/NewAttributeButton.js';
import e1cc751e6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeGrid/PageHeading.js';
import e50ddc431 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryGrid/Grid.js';
import e17b51649 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryGrid/NewCategoryButton.js';
import e15b973fa from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryGrid/PageHeading.js';
import e0f53372f from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionGrid/Grid.js';
import e585350c9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionGrid/NewCollectionButton.js';
import e5079fb5a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionGrid/PageHeading.js';
import e55f177ce from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productGrid/Grid.js';
import e37fa018d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productGrid/NewProductButton.js';
import e2b3aa327 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productGrid/PageHeading.js';
import e400c44d8 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/adminNotFound/Meta.js';
import e7808a282 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/adminNotFound/NotFound.js';
import e52c471f9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageGrid/Grid.js';
import e5788ce60 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageGrid/NewPageButton.js';
import e67aecace from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageGrid/PageHeading.js';
import e16630cdb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetGrid/Grid.js';
import e6212f601 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetGrid/Heading.js';
import e09181f2d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetGrid/NewWidgetButton.js';
import e5b4c497a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Grid.js';
import e0542838c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Heading.js';
import e7775f6a9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderGrid/Grid.js';
import e5b3313fd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderGrid/Heading.js';
import e5202816d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponGrid/Grid.js';
import e243b62b9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponGrid/Heading.js';
import e0c7b5443 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponGrid/NewCouponButton.js';
import e2bf73baf from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageGrid/Grid.js';
import e158d96c9 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageGrid/Heading.js';
import e5b001b5d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageGrid/NewLandingPageButton.js';
import e0a863c4e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/pageBuilder/pages/admin/pageBuilder/Heading.js';
import e48ad9179 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/pageBuilder/pages/admin/pageBuilder/RoutePicker.js';
import e65bb1be7 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/dashboard/Layout.js';
import e6095a698 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/dashboard/PageHeading.js';
import e0b4175ef from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Bestsellers.js';
import e69b90a9c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Lifetimesales.js';
import e540212f1 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Statistic.js';
import e406578d6 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogCategoryEdit/CategoryEditForm.js';
import e070dd116 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogPostEdit/PostEditForm.js';
import e77eddc8c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/blog/pages/admin/blogTagEdit/TagEditForm.js';
import e436f75bf from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit/AttributeEditForm.js';
import e432877f3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit/CategoryEditForm.js';
import e29cf16b5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit/Products.js';
import e7153eb11 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit/RelatedProductsRules.js';
import e79f5c54d from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/CollectionEditForm.js';
import e37ac9deb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/Products.js';
import e210ed77a from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/Collection.js';
import e306429bd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/HeadingDuplicateButton.js';
import e72e42367 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/ProductEditForm.js';
import e78409864 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/Recommendations.js';
import e12251ca2 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/VariantGroup.js';
import e419c56ec from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit/PageEditForm.js';
import e5cfeb8a3 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit/WidgetEditForm.js';
import e53775f46 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/General.js';
import e13743fa5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/PageHeading.js';
import e410680de from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/Setting.js';
import e4731ce23 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetNew/WidgetNewForm.js';
import e0b8305bc from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit/CustomerCustomFields.js';
import e6dc01e58 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit/CustomerEditForm.js';
import e10332495 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/General.js';
import e1604430b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/OrderHistory.js';
import e2bcca200 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/PageHeading.js';
import e64e298a0 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import e79e8c266 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import e30daff59 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import e370f242b from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import e79f62498 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import e59846ac5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import e55af7c09 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import e72a827fd from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/OrderCustomFields.js';
import e7cbc84a8 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import e53e9d3cb from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import e02a631be from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Shipments.js';
import e2c371241 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import e68c36e08 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import e3f4ee448 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import e4cfe3464 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import e5417fc83 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit/CouponEditForm.js';
import e552d522e from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit/BuildInPageBuilderButton.js';
import e2e519661 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/landingPageEdit/LandingPageEditForm.js';
import e33d1bea5 from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/pageBuilder/pages/admin/pageBuilderEdit/Editor.js';
import e6d0ed91c from 'file:///Users/jasoncontento/lab/my-evershop-app/node_modules/@evershop/evershop/dist/modules/pageBuilder/pages/admin/pageBuilderEdit/Heading.js';
export default renderHtml;
setAreaComponents('blogCategoryNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  leftSide: {
    e3c01ff6d: {
      id: 'e3c01ff6d',
      sortOrder: 15,
      component: { default: e3c01ff6d }
    },
    e50d4edef: {
      id: 'e50d4edef',
      sortOrder: 10,
      component: { default: e50d4edef }
    },
    e0cae7a5a: {
      id: 'e0cae7a5a',
      sortOrder: 20,
      component: { default: e0cae7a5a }
    }
  },
  content: {
    e32402d7c: {
      id: 'e32402d7c',
      sortOrder: 5,
      component: { default: e32402d7c }
    },
    e740ba770: {
      id: 'e740ba770',
      sortOrder: 10,
      component: { default: e740ba770 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  rightSide: {
    e3e640f87: {
      id: 'e3e640f87',
      sortOrder: 20,
      component: { default: e3e640f87 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogPostNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  leftSide: {
    e5d75edaf: {
      id: 'e5d75edaf',
      sortOrder: 10,
      component: { default: e5d75edaf }
    },
    e5d81d1cd: {
      id: 'e5d81d1cd',
      sortOrder: 15,
      component: { default: e5d81d1cd }
    },
    e03455a1a: {
      id: 'e03455a1a',
      sortOrder: 20,
      component: { default: e03455a1a }
    }
  },
  rightSide: {
    e1250602c: {
      id: 'e1250602c',
      sortOrder: 10,
      component: { default: e1250602c }
    }
  },
  content: {
    e61a50dbc: {
      id: 'e61a50dbc',
      sortOrder: 5,
      component: { default: e61a50dbc }
    },
    e47dce954: {
      id: 'e47dce954',
      sortOrder: 10,
      component: { default: e47dce954 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogTagNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  wideScreen: {
    e5aff567d: {
      id: 'e5aff567d',
      sortOrder: 10,
      component: { default: e5aff567d }
    },
    e4770a618: {
      id: 'e4770a618',
      sortOrder: 30,
      component: { default: e4770a618 }
    }
  },
  content: {
    e74474412: {
      id: 'e74474412',
      sortOrder: 5,
      component: { default: e74474412 }
    },
    e62dc9baa: {
      id: 'e62dc9baa',
      sortOrder: 10,
      component: { default: e62dc9baa }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('adminLoginJson', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('adminLogoutJson', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogCategoryGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e303bade8: {
      id: 'e303bade8',
      sortOrder: 20,
      component: { default: e303bade8 }
    },
    e2875819d: {
      id: 'e2875819d',
      sortOrder: 10,
      component: { default: e2875819d }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e05e53ea0: {
      id: 'e05e53ea0',
      sortOrder: 10,
      component: { default: e05e53ea0 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogCommentGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e04bf922b: {
      id: 'e04bf922b',
      sortOrder: 20,
      component: { default: e04bf922b }
    },
    e358cd8c0: {
      id: 'e358cd8c0',
      sortOrder: 10,
      component: { default: e358cd8c0 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogPostGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e27b313ba: {
      id: 'e27b313ba',
      sortOrder: 20,
      component: { default: e27b313ba }
    },
    e281a05bb: {
      id: 'e281a05bb',
      sortOrder: 10,
      component: { default: e281a05bb }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e4e438da4: {
      id: 'e4e438da4',
      sortOrder: 10,
      component: { default: e4e438da4 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogTagGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e2e332a70: {
      id: 'e2e332a70',
      sortOrder: 20,
      component: { default: e2e332a70 }
    },
    e38f0a725: {
      id: 'e38f0a725',
      sortOrder: 10,
      component: { default: e38f0a725 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e2c759196: {
      id: 'e2c759196',
      sortOrder: 10,
      component: { default: e2c759196 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('attributeNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  rightSide: {
    e522aebd4: {
      id: 'e522aebd4',
      sortOrder: 10,
      component: { default: e522aebd4 }
    }
  },
  leftSide: {
    e5db4f46c: {
      id: 'e5db4f46c',
      sortOrder: 10,
      component: { default: e5db4f46c }
    }
  },
  content: {
    e39f1ad7f: {
      id: 'e39f1ad7f',
      sortOrder: 5,
      component: { default: e39f1ad7f }
    },
    e432e0973: {
      id: 'e432e0973',
      sortOrder: 10,
      component: { default: e432e0973 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('catalogSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e0f781d91: {
      id: 'e0f781d91',
      sortOrder: 10,
      component: { default: e0f781d91 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('categoryNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  leftSide: {
    e2a3a1928: {
      id: 'e2a3a1928',
      sortOrder: 70,
      component: { default: e2a3a1928 }
    },
    e1a9ce66a: {
      id: 'e1a9ce66a',
      sortOrder: 10,
      component: { default: e1a9ce66a }
    },
    e60fa9181: {
      id: 'e60fa9181',
      sortOrder: 60,
      component: { default: e60fa9181 }
    }
  },
  rightSide: {
    e6fc189fd: {
      id: 'e6fc189fd',
      sortOrder: 10,
      component: { default: e6fc189fd }
    },
    e3093ce5e: {
      id: 'e3093ce5e',
      sortOrder: 15,
      component: { default: e3093ce5e }
    }
  },
  content: {
    e2d8e2d55: {
      id: 'e2d8e2d55',
      sortOrder: 5,
      component: { default: e2d8e2d55 }
    },
    e313ec987: {
      id: 'e313ec987',
      sortOrder: 10,
      component: { default: e313ec987 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('collectionNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  collectionFormInner: {
    e23d13588: {
      id: 'e23d13588',
      sortOrder: 50,
      component: { default: e23d13588 }
    },
    e712372aa: {
      id: 'e712372aa',
      sortOrder: 10,
      component: { default: e712372aa }
    }
  },
  content: {
    e768b666b: {
      id: 'e768b666b',
      sortOrder: 5,
      component: { default: e768b666b }
    },
    e33fe46f9: {
      id: 'e33fe46f9',
      sortOrder: 10,
      component: { default: e33fe46f9 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('productNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  rightSide: {
    e44f4da1d: {
      id: 'e44f4da1d',
      sortOrder: 30,
      component: { default: e44f4da1d }
    },
    e4423669e: {
      id: 'e4423669e',
      sortOrder: 15,
      component: { default: e4423669e }
    },
    e2491ba5a: {
      id: 'e2491ba5a',
      sortOrder: 15,
      component: { default: e2491ba5a }
    },
    e49e46022: {
      id: 'e49e46022',
      sortOrder: 10,
      component: { default: e49e46022 }
    }
  },
  leftSide: {
    e09db3fae: {
      id: 'e09db3fae',
      sortOrder: 10,
      component: { default: e09db3fae }
    },
    e1afe5c96: {
      id: 'e1afe5c96',
      sortOrder: 15,
      component: { default: e1afe5c96 }
    },
    e1b9dacff: {
      id: 'e1b9dacff',
      sortOrder: 45,
      component: { default: e1b9dacff }
    },
    e6ccb09c3: {
      id: 'e6ccb09c3',
      sortOrder: 60,
      component: { default: e6ccb09c3 }
    },
    e12a568b5: {
      id: 'e12a568b5',
      sortOrder: 5,
      component: { default: e12a568b5 }
    }
  },
  content: {
    e37b64499: {
      id: 'e37b64499',
      sortOrder: 5,
      component: { default: e37b64499 }
    },
    e68bf526d: {
      id: 'e68bf526d',
      sortOrder: 10,
      component: { default: e68bf526d }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('shippingProviders', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  shippingProviderSetting: {
    e54cdc6fb: {
      id: 'e54cdc6fb',
      sortOrder: 5,
      component: { default: e54cdc6fb }
    }
  },
  content: {
    e5f93fbaa: {
      id: 'e5f93fbaa',
      sortOrder: 10,
      component: { default: e5f93fbaa }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('shippingSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e5c639172: {
      id: 'e5c639172',
      sortOrder: 10,
      component: { default: e5c639172 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('cmsPageNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e56255c57: {
      id: 'e56255c57',
      sortOrder: 5,
      component: { default: e56255c57 }
    },
    e07fd2110: {
      id: 'e07fd2110',
      sortOrder: 10,
      component: { default: e07fd2110 }
    }
  },
  wideScreen: {
    e47681994: {
      id: 'e47681994',
      sortOrder: 10,
      component: { default: e47681994 }
    },
    e56f4bf81: {
      id: 'e56f4bf81',
      sortOrder: 30,
      component: { default: e56f4bf81 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('couponNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e6923eb8b: {
      id: 'e6923eb8b',
      sortOrder: 5,
      component: { default: e6923eb8b }
    },
    e2eee6033: {
      id: 'e2eee6033',
      sortOrder: 10,
      component: { default: e2eee6033 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  couponEditRight: {
    e14c6a10b: {
      id: 'e14c6a10b',
      sortOrder: 10,
      component: { default: e14c6a10b }
    }
  },
  couponEditDiscountType: {
    e0e7f0db5: {
      id: 'e0e7f0db5',
      sortOrder: 30,
      component: { default: e0e7f0db5 }
    }
  },
  couponEditGeneral: {
    e54f9d060: {
      id: 'e54f9d060',
      sortOrder: 10,
      component: { default: e54f9d060 }
    }
  },
  couponEditLeft: {
    e449353f9: {
      id: 'e449353f9',
      sortOrder: 10,
      component: { default: e449353f9 }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('landingPageNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e248d8161: {
      id: 'e248d8161',
      sortOrder: 5,
      component: { default: e248d8161 }
    },
    e5f233643: {
      id: 'e5f233643',
      sortOrder: 10,
      component: { default: e5f233643 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  leftSide: {
    e26dfdf8a: {
      id: 'e26dfdf8a',
      sortOrder: 10,
      component: { default: e26dfdf8a }
    },
    e61107175: {
      id: 'e61107175',
      sortOrder: 20,
      component: { default: e61107175 }
    }
  },
  rightSide: {
    e74b73c1b: {
      id: 'e74b73c1b',
      sortOrder: 20,
      component: { default: e74b73c1b }
    },
    e222c79ea: {
      id: 'e222c79ea',
      sortOrder: 10,
      component: { default: e222c79ea }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('paymentSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e68c1ed1a: {
      id: 'e68c1ed1a',
      sortOrder: 10,
      component: { default: e68c1ed1a }
    }
  },
  paymentSetting: {
    e5ed9419c: {
      id: 'e5ed9419c',
      sortOrder: 20,
      component: { default: e5ed9419c }
    },
    e7a9164c0: {
      id: 'e7a9164c0',
      sortOrder: 15,
      component: { default: e7a9164c0 }
    },
    e7e5e987e: {
      id: 'e7e5e987e',
      sortOrder: 10,
      component: { default: e7e5e987e }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('storeSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e64bad346: {
      id: 'e64bad346',
      sortOrder: 10,
      component: { default: e64bad346 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('systemSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e6b68e8aa: {
      id: 'e6b68e8aa',
      sortOrder: 10,
      component: { default: e6b68e8aa }
    }
  },
  systemSetting: {
    e50bd64c1: {
      id: 'e50bd64c1',
      sortOrder: 10,
      component: { default: e50bd64c1 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('taxSetting', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e17e6d2ff: {
      id: 'e17e6d2ff',
      sortOrder: 10,
      component: { default: e17e6d2ff }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('adminLogin', {
  content: {
    e3bb60d6b: {
      id: 'e3bb60d6b',
      sortOrder: 10,
      component: { default: e3bb60d6b }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e21e83736: {
      id: 'e21e83736',
      sortOrder: 0,
      component: { default: e21e83736 }
    }
  },
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('attributeGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e1a5e77c5: {
      id: 'e1a5e77c5',
      sortOrder: 20,
      component: { default: e1a5e77c5 }
    },
    e1cc751e6: {
      id: 'e1cc751e6',
      sortOrder: 10,
      component: { default: e1cc751e6 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e7d92add3: {
      id: 'e7d92add3',
      sortOrder: 10,
      component: { default: e7d92add3 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('categoryGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e50ddc431: {
      id: 'e50ddc431',
      sortOrder: 20,
      component: { default: e50ddc431 }
    },
    e15b973fa: {
      id: 'e15b973fa',
      sortOrder: 10,
      component: { default: e15b973fa }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e17b51649: {
      id: 'e17b51649',
      sortOrder: 10,
      component: { default: e17b51649 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('collectionGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e0f53372f: {
      id: 'e0f53372f',
      sortOrder: 20,
      component: { default: e0f53372f }
    },
    e5079fb5a: {
      id: 'e5079fb5a',
      sortOrder: 10,
      component: { default: e5079fb5a }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e585350c9: {
      id: 'e585350c9',
      sortOrder: 10,
      component: { default: e585350c9 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('productGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e55f177ce: {
      id: 'e55f177ce',
      sortOrder: 20,
      component: { default: e55f177ce }
    },
    e2b3aa327: {
      id: 'e2b3aa327',
      sortOrder: 10,
      component: { default: e2b3aa327 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  pageHeadingRight: {
    e37fa018d: {
      id: 'e37fa018d',
      sortOrder: 10,
      component: { default: e37fa018d }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('adminNotFound', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e400c44d8: {
      id: 'e400c44d8',
      sortOrder: 1,
      component: { default: e400c44d8 }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e7808a282: {
      id: 'e7808a282',
      sortOrder: 10,
      component: { default: e7808a282 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('cmsPageGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e52c471f9: {
      id: 'e52c471f9',
      sortOrder: 20,
      component: { default: e52c471f9 }
    },
    e67aecace: {
      id: 'e67aecace',
      sortOrder: 10,
      component: { default: e67aecace }
    }
  },
  pageHeadingRight: {
    e5788ce60: {
      id: 'e5788ce60',
      sortOrder: 10,
      component: { default: e5788ce60 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('widgetGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e16630cdb: {
      id: 'e16630cdb',
      sortOrder: 20,
      component: { default: e16630cdb }
    },
    e6212f601: {
      id: 'e6212f601',
      sortOrder: 10,
      component: { default: e6212f601 }
    }
  },
  pageHeadingRight: {
    e09181f2d: {
      id: 'e09181f2d',
      sortOrder: 10,
      component: { default: e09181f2d }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('customerGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e5b4c497a: {
      id: 'e5b4c497a',
      sortOrder: 20,
      component: { default: e5b4c497a }
    },
    e0542838c: {
      id: 'e0542838c',
      sortOrder: 10,
      component: { default: e0542838c }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('orderGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e7775f6a9: {
      id: 'e7775f6a9',
      sortOrder: 20,
      component: { default: e7775f6a9 }
    },
    e5b3313fd: {
      id: 'e5b3313fd',
      sortOrder: 10,
      component: { default: e5b3313fd }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('couponGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e5202816d: {
      id: 'e5202816d',
      sortOrder: 20,
      component: { default: e5202816d }
    },
    e243b62b9: {
      id: 'e243b62b9',
      sortOrder: 10,
      component: { default: e243b62b9 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  pageHeadingRight: {
    e0c7b5443: {
      id: 'e0c7b5443',
      sortOrder: 10,
      component: { default: e0c7b5443 }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('landingPageGrid', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e2bf73baf: {
      id: 'e2bf73baf',
      sortOrder: 20,
      component: { default: e2bf73baf }
    },
    e158d96c9: {
      id: 'e158d96c9',
      sortOrder: 10,
      component: { default: e158d96c9 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  pageHeadingRight: {
    e5b001b5d: {
      id: 'e5b001b5d',
      sortOrder: 10,
      component: { default: e5b001b5d }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('pageBuilder', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e0a863c4e: {
      id: 'e0a863c4e',
      sortOrder: 10,
      component: { default: e0a863c4e }
    },
    e48ad9179: {
      id: 'e48ad9179',
      sortOrder: 20,
      component: { default: e48ad9179 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('dashboard', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e65bb1be7: {
      id: 'e65bb1be7',
      sortOrder: 10,
      component: { default: e65bb1be7 }
    },
    e6095a698: {
      id: 'e6095a698',
      sortOrder: 5,
      component: { default: e6095a698 }
    }
  },
  leftSide: {
    e0b4175ef: {
      id: 'e0b4175ef',
      sortOrder: 20,
      component: { default: e0b4175ef }
    },
    e540212f1: {
      id: 'e540212f1',
      sortOrder: 10,
      component: { default: e540212f1 }
    }
  },
  rightSide: {
    e69b90a9c: {
      id: 'e69b90a9c',
      sortOrder: 10,
      component: { default: e69b90a9c }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogCategoryEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e406578d6: {
      id: 'e406578d6',
      sortOrder: 10,
      component: { default: e406578d6 }
    },
    e32402d7c: {
      id: 'e32402d7c',
      sortOrder: 5,
      component: { default: e32402d7c }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  leftSide: {
    e3c01ff6d: {
      id: 'e3c01ff6d',
      sortOrder: 15,
      component: { default: e3c01ff6d }
    },
    e50d4edef: {
      id: 'e50d4edef',
      sortOrder: 10,
      component: { default: e50d4edef }
    },
    e0cae7a5a: {
      id: 'e0cae7a5a',
      sortOrder: 20,
      component: { default: e0cae7a5a }
    }
  },
  rightSide: {
    e3e640f87: {
      id: 'e3e640f87',
      sortOrder: 20,
      component: { default: e3e640f87 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogPostEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e070dd116: {
      id: 'e070dd116',
      sortOrder: 10,
      component: { default: e070dd116 }
    },
    e61a50dbc: {
      id: 'e61a50dbc',
      sortOrder: 5,
      component: { default: e61a50dbc }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  leftSide: {
    e5d75edaf: {
      id: 'e5d75edaf',
      sortOrder: 10,
      component: { default: e5d75edaf }
    },
    e5d81d1cd: {
      id: 'e5d81d1cd',
      sortOrder: 15,
      component: { default: e5d81d1cd }
    },
    e03455a1a: {
      id: 'e03455a1a',
      sortOrder: 20,
      component: { default: e03455a1a }
    }
  },
  rightSide: {
    e1250602c: {
      id: 'e1250602c',
      sortOrder: 10,
      component: { default: e1250602c }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('blogTagEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  content: {
    e77eddc8c: {
      id: 'e77eddc8c',
      sortOrder: 10,
      component: { default: e77eddc8c }
    },
    e74474412: {
      id: 'e74474412',
      sortOrder: 5,
      component: { default: e74474412 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  wideScreen: {
    e5aff567d: {
      id: 'e5aff567d',
      sortOrder: 10,
      component: { default: e5aff567d }
    },
    e4770a618: {
      id: 'e4770a618',
      sortOrder: 30,
      component: { default: e4770a618 }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('attributeEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e436f75bf: {
      id: 'e436f75bf',
      sortOrder: 10,
      component: { default: e436f75bf }
    },
    e39f1ad7f: {
      id: 'e39f1ad7f',
      sortOrder: 5,
      component: { default: e39f1ad7f }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  rightSide: {
    e522aebd4: {
      id: 'e522aebd4',
      sortOrder: 10,
      component: { default: e522aebd4 }
    }
  },
  leftSide: {
    e5db4f46c: {
      id: 'e5db4f46c',
      sortOrder: 10,
      component: { default: e5db4f46c }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('categoryEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e432877f3: {
      id: 'e432877f3',
      sortOrder: 10,
      component: { default: e432877f3 }
    },
    e2d8e2d55: {
      id: 'e2d8e2d55',
      sortOrder: 5,
      component: { default: e2d8e2d55 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  leftSide: {
    e29cf16b5: {
      id: 'e29cf16b5',
      sortOrder: 15,
      component: { default: e29cf16b5 }
    },
    e7153eb11: {
      id: 'e7153eb11',
      sortOrder: 55,
      component: { default: e7153eb11 }
    },
    e2a3a1928: {
      id: 'e2a3a1928',
      sortOrder: 70,
      component: { default: e2a3a1928 }
    },
    e1a9ce66a: {
      id: 'e1a9ce66a',
      sortOrder: 10,
      component: { default: e1a9ce66a }
    },
    e60fa9181: {
      id: 'e60fa9181',
      sortOrder: 60,
      component: { default: e60fa9181 }
    }
  },
  rightSide: {
    e6fc189fd: {
      id: 'e6fc189fd',
      sortOrder: 10,
      component: { default: e6fc189fd }
    },
    e3093ce5e: {
      id: 'e3093ce5e',
      sortOrder: 15,
      component: { default: e3093ce5e }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('collectionEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  content: {
    e79f5c54d: {
      id: 'e79f5c54d',
      sortOrder: 10,
      component: { default: e79f5c54d }
    },
    e768b666b: {
      id: 'e768b666b',
      sortOrder: 5,
      component: { default: e768b666b }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  collectionFormInner: {
    e37ac9deb: {
      id: 'e37ac9deb',
      sortOrder: 20,
      component: { default: e37ac9deb }
    },
    e23d13588: {
      id: 'e23d13588',
      sortOrder: 50,
      component: { default: e23d13588 }
    },
    e712372aa: {
      id: 'e712372aa',
      sortOrder: 10,
      component: { default: e712372aa }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('productEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  rightSide: {
    e210ed77a: {
      id: 'e210ed77a',
      sortOrder: 15,
      component: { default: e210ed77a }
    },
    e44f4da1d: {
      id: 'e44f4da1d',
      sortOrder: 30,
      component: { default: e44f4da1d }
    },
    e4423669e: {
      id: 'e4423669e',
      sortOrder: 15,
      component: { default: e4423669e }
    },
    e2491ba5a: {
      id: 'e2491ba5a',
      sortOrder: 15,
      component: { default: e2491ba5a }
    },
    e49e46022: {
      id: 'e49e46022',
      sortOrder: 10,
      component: { default: e49e46022 }
    }
  },
  pageHeadingRight: {
    e306429bd: {
      id: 'e306429bd',
      sortOrder: 10,
      component: { default: e306429bd }
    }
  },
  content: {
    e72e42367: {
      id: 'e72e42367',
      sortOrder: 10,
      component: { default: e72e42367 }
    },
    e37b64499: {
      id: 'e37b64499',
      sortOrder: 5,
      component: { default: e37b64499 }
    },
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    }
  },
  leftSide: {
    e78409864: {
      id: 'e78409864',
      sortOrder: 50,
      component: { default: e78409864 }
    },
    e12251ca2: {
      id: 'e12251ca2',
      sortOrder: 70,
      component: { default: e12251ca2 }
    },
    e09db3fae: {
      id: 'e09db3fae',
      sortOrder: 10,
      component: { default: e09db3fae }
    },
    e1afe5c96: {
      id: 'e1afe5c96',
      sortOrder: 15,
      component: { default: e1afe5c96 }
    },
    e1b9dacff: {
      id: 'e1b9dacff',
      sortOrder: 45,
      component: { default: e1b9dacff }
    },
    e6ccb09c3: {
      id: 'e6ccb09c3',
      sortOrder: 60,
      component: { default: e6ccb09c3 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('cmsPageEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e419c56ec: {
      id: 'e419c56ec',
      sortOrder: 10,
      component: { default: e419c56ec }
    },
    e56255c57: {
      id: 'e56255c57',
      sortOrder: 5,
      component: { default: e56255c57 }
    }
  },
  wideScreen: {
    e47681994: {
      id: 'e47681994',
      sortOrder: 10,
      component: { default: e47681994 }
    },
    e56f4bf81: {
      id: 'e56f4bf81',
      sortOrder: 30,
      component: { default: e56f4bf81 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('widgetEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e5cfeb8a3: {
      id: 'e5cfeb8a3',
      sortOrder: 10,
      component: { default: e5cfeb8a3 }
    },
    e13743fa5: {
      id: 'e13743fa5',
      sortOrder: 5,
      component: { default: e13743fa5 }
    }
  },
  rightSide: {
    e53775f46: {
      id: 'e53775f46',
      sortOrder: 15,
      component: { default: e53775f46 }
    }
  },
  leftSide: {
    e410680de: {
      id: 'e410680de',
      sortOrder: 30,
      component: { default: e410680de }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('widgetNew', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e13743fa5: {
      id: 'e13743fa5',
      sortOrder: 5,
      component: { default: e13743fa5 }
    },
    e4731ce23: {
      id: 'e4731ce23',
      sortOrder: 10,
      component: { default: e4731ce23 }
    }
  },
  rightSide: {
    e53775f46: {
      id: 'e53775f46',
      sortOrder: 15,
      component: { default: e53775f46 }
    }
  },
  leftSide: {
    e410680de: {
      id: 'e410680de',
      sortOrder: 30,
      component: { default: e410680de }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('customerEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e6dc01e58: {
      id: 'e6dc01e58',
      sortOrder: 10,
      component: { default: e6dc01e58 }
    },
    e2bcca200: {
      id: 'e2bcca200',
      sortOrder: 5,
      component: { default: e2bcca200 }
    }
  },
  leftSide: {
    e0b8305bc: {
      id: 'e0b8305bc',
      sortOrder: 80,
      component: { default: e0b8305bc }
    },
    e1604430b: {
      id: 'e1604430b',
      sortOrder: 10,
      component: { default: e1604430b }
    }
  },
  rightSide: {
    e10332495: {
      id: 'e10332495',
      sortOrder: 10,
      component: { default: e10332495 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('orderEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e55af7c09: {
      id: 'e55af7c09',
      sortOrder: 10,
      component: { default: e55af7c09 }
    },
    e7cbc84a8: {
      id: 'e7cbc84a8',
      sortOrder: 5,
      component: { default: e7cbc84a8 }
    }
  },
  orderPaymentActions: {
    e64e298a0: {
      id: 'e64e298a0',
      sortOrder: 10,
      component: { default: e64e298a0 }
    },
    e68c36e08: {
      id: 'e68c36e08',
      sortOrder: 10,
      component: { default: e68c36e08 }
    },
    e3f4ee448: {
      id: 'e3f4ee448',
      sortOrder: 10,
      component: { default: e3f4ee448 }
    },
    e4cfe3464: {
      id: 'e4cfe3464',
      sortOrder: 10,
      component: { default: e4cfe3464 }
    }
  },
  leftSide: {
    e79e8c266: {
      id: 'e79e8c266',
      sortOrder: 30,
      component: { default: e79e8c266 }
    },
    e59846ac5: {
      id: 'e59846ac5',
      sortOrder: 10,
      component: { default: e59846ac5 }
    },
    e72a827fd: {
      id: 'e72a827fd',
      sortOrder: 25,
      component: { default: e72a827fd }
    },
    e53e9d3cb: {
      id: 'e53e9d3cb',
      sortOrder: 20,
      component: { default: e53e9d3cb }
    },
    e02a631be: {
      id: 'e02a631be',
      sortOrder: 15,
      component: { default: e02a631be }
    }
  },
  pageHeadingRight: {
    e30daff59: {
      id: 'e30daff59',
      sortOrder: 35,
      component: { default: e30daff59 }
    }
  },
  rightSide: {
    e370f242b: {
      id: 'e370f242b',
      sortOrder: 15,
      component: { default: e370f242b }
    },
    e79f62498: {
      id: 'e79f62498',
      sortOrder: 10,
      component: { default: e79f62498 }
    }
  },
  pageHeadingLeft: {
    e2c371241: {
      id: 'e2c371241',
      sortOrder: 200,
      component: { default: e2c371241 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('couponEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e5417fc83: {
      id: 'e5417fc83',
      sortOrder: 10,
      component: { default: e5417fc83 }
    },
    e6923eb8b: {
      id: 'e6923eb8b',
      sortOrder: 5,
      component: { default: e6923eb8b }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  couponEditRight: {
    e14c6a10b: {
      id: 'e14c6a10b',
      sortOrder: 10,
      component: { default: e14c6a10b }
    }
  },
  couponEditDiscountType: {
    e0e7f0db5: {
      id: 'e0e7f0db5',
      sortOrder: 30,
      component: { default: e0e7f0db5 }
    }
  },
  couponEditGeneral: {
    e54f9d060: {
      id: 'e54f9d060',
      sortOrder: 10,
      component: { default: e54f9d060 }
    }
  },
  couponEditLeft: {
    e449353f9: {
      id: 'e449353f9',
      sortOrder: 10,
      component: { default: e449353f9 }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('landingPageEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e2e519661: {
      id: 'e2e519661',
      sortOrder: 10,
      component: { default: e2e519661 }
    },
    e248d8161: {
      id: 'e248d8161',
      sortOrder: 5,
      component: { default: e248d8161 }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  pageHeadingRight: {
    e552d522e: {
      id: 'e552d522e',
      sortOrder: 10,
      component: { default: e552d522e }
    }
  },
  leftSide: {
    e26dfdf8a: {
      id: 'e26dfdf8a',
      sortOrder: 10,
      component: { default: e26dfdf8a }
    },
    e61107175: {
      id: 'e61107175',
      sortOrder: 20,
      component: { default: e61107175 }
    }
  },
  rightSide: {
    e74b73c1b: {
      id: 'e74b73c1b',
      sortOrder: 20,
      component: { default: e74b73c1b }
    },
    e222c79ea: {
      id: 'e222c79ea',
      sortOrder: 10,
      component: { default: e222c79ea }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
setAreaComponents('pageBuilderEdit', {
  header: {
    e30aa464b: {
      id: 'e30aa464b',
      sortOrder: 50,
      component: { default: e30aa464b }
    },
    e71f0b3bb: {
      id: 'e71f0b3bb',
      sortOrder: 10,
      component: { default: e71f0b3bb }
    },
    e3be79bdb: {
      id: 'e3be79bdb',
      sortOrder: 20,
      component: { default: e3be79bdb }
    }
  },
  head: {
    e49456c19: {
      id: 'e49456c19',
      sortOrder: 5,
      component: { default: e49456c19 }
    },
    e6b9a27c6: {
      id: 'e6b9a27c6',
      sortOrder: 5,
      component: { default: e6b9a27c6 }
    },
    e3a3880bd: {
      id: 'e3a3880bd',
      sortOrder: 5,
      component: { default: e3a3880bd }
    },
    e15d4b4fb: {
      id: 'e15d4b4fb',
      sortOrder: 1,
      component: { default: e15d4b4fb }
    },
    e38280a90: {
      id: 'e38280a90',
      sortOrder: 10,
      component: { default: e38280a90 }
    }
  },
  body: {
    e626ab3be: {
      id: 'e626ab3be',
      sortOrder: 10,
      component: { default: e626ab3be }
    },
    e6040d805: {
      id: 'e6040d805',
      sortOrder: 10,
      component: { default: e6040d805 }
    }
  },
  adminMenu: {
    e1d67b957: {
      id: 'e1d67b957',
      sortOrder: 25,
      component: { default: e1d67b957 }
    },
    e0f794687: {
      id: 'e0f794687',
      sortOrder: 20,
      component: { default: e0f794687 }
    },
    e549793a7: {
      id: 'e549793a7',
      sortOrder: 60,
      component: { default: e549793a7 }
    },
    e77bfda3c: {
      id: 'e77bfda3c',
      sortOrder: 10,
      component: { default: e77bfda3c }
    },
    e0743c9d7: {
      id: 'e0743c9d7',
      sortOrder: 40,
      component: { default: e0743c9d7 }
    },
    e4c259b8f: {
      id: 'e4c259b8f',
      sortOrder: 30,
      component: { default: e4c259b8f }
    },
    e295d3036: {
      id: 'e295d3036',
      sortOrder: 50,
      component: { default: e295d3036 }
    },
    e27991419: {
      id: 'e27991419',
      sortOrder: 500,
      component: { default: e27991419 }
    },
    e67d61f7d: {
      id: 'e67d61f7d',
      sortOrder: 65,
      component: { default: e67d61f7d }
    }
  },
  settingPageMenu: {
    e5ca7632a: {
      id: 'e5ca7632a',
      sortOrder: 7,
      component: { default: e5ca7632a }
    },
    e7bb05ede: {
      id: 'e7bb05ede',
      sortOrder: 16,
      component: { default: e7bb05ede }
    },
    e11f1cc90: {
      id: 'e11f1cc90',
      sortOrder: 15,
      component: { default: e11f1cc90 }
    },
    e0539e0b2: {
      id: 'e0539e0b2',
      sortOrder: 10,
      component: { default: e0539e0b2 }
    },
    e473cc2e9: {
      id: 'e473cc2e9',
      sortOrder: 5,
      component: { default: e473cc2e9 }
    },
    e2cc45809: {
      id: 'e2cc45809',
      sortOrder: 30,
      component: { default: e2cc45809 }
    },
    e4d0c6ece: {
      id: 'e4d0c6ece',
      sortOrder: 20,
      component: { default: e4d0c6ece }
    }
  },
  quickLinks: {
    e33206416: {
      id: 'e33206416',
      sortOrder: 20,
      component: { default: e33206416 }
    },
    e47334809: {
      id: 'e47334809',
      sortOrder: 30,
      component: { default: e47334809 }
    }
  },
  footerLeft: {
    e7d9a04b7: {
      id: 'e7d9a04b7',
      sortOrder: 10,
      component: { default: e7d9a04b7 }
    },
    e15a757a6: {
      id: 'e15a757a6',
      sortOrder: 20,
      component: { default: e15a757a6 }
    }
  },
  adminNavigation: {
    e21dac384: {
      id: 'e21dac384',
      sortOrder: 10,
      component: { default: e21dac384 }
    }
  },
  content: {
    e1976c5f6: {
      id: 'e1976c5f6',
      sortOrder: 999,
      component: { default: e1976c5f6 }
    },
    e33d1bea5: {
      id: 'e33d1bea5',
      sortOrder: 10,
      component: { default: e33d1bea5 }
    },
    e6d0ed91c: {
      id: 'e6d0ed91c',
      sortOrder: 5,
      component: { default: e6d0ed91c }
    }
  },
  couponMenuGroup: {
    e16d822ec: {
      id: 'e16d822ec',
      sortOrder: 20,
      component: { default: e16d822ec }
    }
  },
  '*': {
    e0189c42b: {
      id: 'e0189c42b',
      sortOrder: 0,
      component: { default: e0189c42b }
    },
    e4108aa82: {
      id: 'e4108aa82',
      sortOrder: 0,
      component: { default: e4108aa82 }
    },
    e21c10aa3: {
      id: 'e21c10aa3',
      sortOrder: 0,
      component: { default: e21c10aa3 }
    },
    e7d1fb73a: {
      id: 'e7d1fb73a',
      sortOrder: 0,
      component: { default: e7d1fb73a }
    },
    e59fc226b: {
      id: 'e59fc226b',
      sortOrder: 0,
      component: { default: e59fc226b }
    },
    e5ee0f96c: {
      id: 'e5ee0f96c',
      sortOrder: 0,
      component: { default: e5ee0f96c }
    },
    e1418b015: {
      id: 'e1418b015',
      sortOrder: 0,
      component: { default: e1418b015 }
    },
    e63bacb8c: {
      id: 'e63bacb8c',
      sortOrder: 0,
      component: { default: e63bacb8c }
    },
    e38938d1e: {
      id: 'e38938d1e',
      sortOrder: 0,
      component: { default: e38938d1e }
    },
    e03913fa7: {
      id: 'e03913fa7',
      sortOrder: 0,
      component: { default: e03913fa7 }
    },
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e0989e99d: {
      id: 'e0989e99d',
      sortOrder: 0,
      component: { default: e0989e99d }
    },
    e377af6ae: {
      id: 'e377af6ae',
      sortOrder: 0,
      component: { default: e377af6ae }
    },
    e23e3b5e9: {
      id: 'e23e3b5e9',
      sortOrder: 0,
      component: { default: e23e3b5e9 }
    },
    e1c4fa0e2: {
      id: 'e1c4fa0e2',
      sortOrder: 0,
      component: { default: e1c4fa0e2 }
    },
    e1fd717cb: {
      id: 'e1fd717cb',
      sortOrder: 0,
      component: { default: e1fd717cb }
    },
    e4d1fd58b: {
      id: 'e4d1fd58b',
      sortOrder: 0,
      component: { default: e4d1fd58b }
    },
    e1f3d4574: {
      id: 'e1f3d4574',
      sortOrder: 0,
      component: { default: e1f3d4574 }
    },
    e382997d2: {
      id: 'e382997d2',
      sortOrder: 0,
      component: { default: e382997d2 }
    },
    e1f4aeaa5: {
      id: 'e1f4aeaa5',
      sortOrder: 0,
      component: { default: e1f4aeaa5 }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e702dc0bd: {
      id: 'e702dc0bd',
      sortOrder: 0,
      component: { default: e702dc0bd }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e54aeef6e: {
      id: 'e54aeef6e',
      sortOrder: 0,
      component: { default: e54aeef6e }
    },
    e3695a108: {
      id: 'e3695a108',
      sortOrder: 0,
      component: { default: e3695a108 }
    },
    e1d79f001: {
      id: 'e1d79f001',
      sortOrder: 0,
      component: { default: e1d79f001 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e7718a612: {
      id: 'e7718a612',
      sortOrder: 0,
      component: { default: e7718a612 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    },
    e6c593f0c: {
      id: 'e6c593f0c',
      sortOrder: 0,
      component: { default: e6c593f0c }
    },
    e7379a3b2: {
      id: 'e7379a3b2',
      sortOrder: 0,
      component: { default: e7379a3b2 }
    },
    e3876cb45: {
      id: 'e3876cb45',
      sortOrder: 0,
      component: { default: e3876cb45 }
    },
    e06845220: {
      id: 'e06845220',
      sortOrder: 0,
      component: { default: e06845220 }
    },
    e56266d97: {
      id: 'e56266d97',
      sortOrder: 0,
      component: { default: e56266d97 }
    },
    e3c689b31: {
      id: 'e3c689b31',
      sortOrder: 0,
      component: { default: e3c689b31 }
    },
    e2bf1b4e8: {
      id: 'e2bf1b4e8',
      sortOrder: 0,
      component: { default: e2bf1b4e8 }
    },
    e714c9476: {
      id: 'e714c9476',
      sortOrder: 0,
      component: { default: e714c9476 }
    },
    e4f591561: {
      id: 'e4f591561',
      sortOrder: 0,
      component: { default: e4f591561 }
    },
    e44a94666: {
      id: 'e44a94666',
      sortOrder: 0,
      component: { default: e44a94666 }
    },
    e6ef8f8e3: {
      id: 'e6ef8f8e3',
      sortOrder: 0,
      component: { default: e6ef8f8e3 }
    },
    e74fd7eda: {
      id: 'e74fd7eda',
      sortOrder: 0,
      component: { default: e74fd7eda }
    },
    e1d88fc63: {
      id: 'e1d88fc63',
      sortOrder: 0,
      component: { default: e1d88fc63 }
    },
    e5d8cf706: {
      id: 'e5d8cf706',
      sortOrder: 0,
      component: { default: e5d8cf706 }
    },
    e14039631: {
      id: 'e14039631',
      sortOrder: 0,
      component: { default: e14039631 }
    },
    e0076df3a: {
      id: 'e0076df3a',
      sortOrder: 0,
      component: { default: e0076df3a }
    },
    e5ae7cd5d: {
      id: 'e5ae7cd5d',
      sortOrder: 0,
      component: { default: e5ae7cd5d }
    },
    e0ff183a1: {
      id: 'e0ff183a1',
      sortOrder: 0,
      component: { default: e0ff183a1 }
    },
    e1df10c76: {
      id: 'e1df10c76',
      sortOrder: 0,
      component: { default: e1df10c76 }
    },
    e3b079f27: {
      id: 'e3b079f27',
      sortOrder: 0,
      component: { default: e3b079f27 }
    },
    e789aa022: {
      id: 'e789aa022',
      sortOrder: 0,
      component: { default: e789aa022 }
    },
    e294f801a: {
      id: 'e294f801a',
      sortOrder: 0,
      component: { default: e294f801a }
    },
    e2ac010ef: {
      id: 'e2ac010ef',
      sortOrder: 0,
      component: { default: e2ac010ef }
    }
  }
});
