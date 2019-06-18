'use strict';

module.exports = (path, dimensions = null, mode = 'crop') => {
    let url = process.env.MIX_CDN_URL || process.env.CDN_URL;

    if (!url || url == 'null') throw new Error('MIX_CDN_URL or CDN_URL not available in project environment');

    path = path.replace(/^\//, '');
    url = url.replace(/\/$/, '') + '/';

    if (!dimensions) return url + path;

    return `${url}size:${dimensions},mode:${mode}/${path}`;
};
