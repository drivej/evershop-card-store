const config = require('config');
function remoteMediaUrl(value) {
    if (typeof value !== 'string' || !/^\/?assets\//.test(value)) {
        return value;
    }
    if (!config.has('system.remote_media_base_url')) {
        return value;
    }
    const baseUrl = config.get('system.remote_media_base_url');
    if (typeof baseUrl !== 'string' || baseUrl.trim() === '') {
        return value;
    }
    return new URL(value.replace(/^\/?/, '/'), baseUrl).toString();
}
module.exports = {
    remoteMediaUrl
};
