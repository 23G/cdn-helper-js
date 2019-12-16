export default function (path, dimensions, quality, mode) {
    dimensions = dimensions || null;
    mode = mode || 'crop';
    quality = quality || 70;

    let url = process.env.MIX_CDN_IMAGE_URL || process.env.CDN_IMAGE_URL;

    if (!url || url == 'null') throw new Error('MIX_CDN_IMAGE_URL or CDN_IMAGE_URL not available in project environment');

    path = path.replace(url, '').replace(/^\//, '');
    url = url.replace(/\/$/, '') + '/';

    if (!dimensions) return url + path;

    const values = [
        'size:' + dimensions,
        'quality:' + quality,
        'mode:' + mode,
    ];

    return url + values.join(',') + '/' + path;
};
