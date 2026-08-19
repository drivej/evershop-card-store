const { remoteMediaUrl } = require('../../../services/remoteMediaUrl.js');
module.exports = {
    Image: {
        url: ({ url })=>remoteMediaUrl(url)
    },
    CategoryImage: {
        url: ({ url })=>remoteMediaUrl(url)
    },
    BasicBannerWidget: {
        src: ({ src })=>remoteMediaUrl(src)
    },
    Slide: {
        image: ({ image })=>remoteMediaUrl(image)
    }
};
