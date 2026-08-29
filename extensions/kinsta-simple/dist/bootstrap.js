const config = require('config');
// Keep the legacy remote-media origin compatible with EverShop 2.2's SSRF-safe
// image proxy. The proxy reads IMAGE_ALLOWED_HOSTS for every request, so adding
// the configured host during bootstrap is sufficient and remains narrowly scoped.
module.exports = ()=>{
    console.log('🚀 Simple Kinsta storage extension loaded (using local storage)');
    if (!config.has('system.remote_media_base_url')) {
        return;
    }
    const baseUrl = config.get('system.remote_media_base_url');
    if (typeof baseUrl !== 'string' || baseUrl.trim() === '') {
        return;
    }
    const remoteHost = new URL(baseUrl).hostname.toLowerCase();
    const allowedHosts = new Set((process.env.IMAGE_ALLOWED_HOSTS || '').split(',').map((host)=>host.trim().toLowerCase()).filter(Boolean));
    allowedHosts.add(remoteHost);
    process.env.IMAGE_ALLOWED_HOSTS = [
        ...allowedHosts
    ].join(',');
};
