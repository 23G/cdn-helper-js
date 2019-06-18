'use strict';

module.exports = (path, dimensions = null, mode = 'crop') => {
    let url = process.env.MIX_CDN_IMAGE_URL || process.env.CDN_IMAGE_URL;

    if (!url || url == 'null') throw new Error('MIX_CDN_IMAGE_URL or CDN_IMAGE_URL not available in project environment');

    path = path.replace(/^\//, '');
    url = url.replace(/\/$/, '') + '/';

    if (!dimensions) return url + path;

    return `${url}size:${dimensions},mode:${mode}/${path}`;
};
