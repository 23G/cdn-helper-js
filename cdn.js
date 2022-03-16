export default function(path, dimensions, mode) {
    dimensions = dimensions || null;
    mode = mode || 'crop';

    let url = process.env.MIX_CDN_IMAGE_URL || process.env.CDN_IMAGE_URL;

    if (!url && typeof window.Laravel === 'object') {
        url = window.Laravel.cdn_url;
    }

    if (!url || url == 'null') throw new Error('MIX_CDN_IMAGE_URL, CDN_IMAGE_URL or window.Laravel.cdn_url not available in project environment');

    path = path.replace(url, '').replace(/^\//, '');
    url = url.replace(/\/$/, '') + '/';

    if (!dimensions) return url + path;

    return url + 'size:' + dimensions + ',mode:' + mode + '/' + path;
};
