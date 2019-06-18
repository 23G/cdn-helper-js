'use strict';

const cdn = require('../lib/cdn');
const cdnUrl = 'https://cdn.test.io';

process.env.CDN_URL = cdnUrl;

test('returns_image_withouth_resizing', () => {
    expect(cdn('/yoda.jpeg')).toBe(cdnUrl + '/yoda.jpeg');
});

test('returns_url_with_dimensions', () => {
    expect(cdn('/yoda.jpeg', 'h200')).toBe(cdnUrl + '/size:h200,mode:crop/yoda.jpeg');
});

test('returns_url_with_dimensions', () => {
    expect(cdn('/yoda.jpeg', '200x200')).toBe(cdnUrl + '/size:200x200,mode:crop/yoda.jpeg');
});

test('expects_error', () => {
    process.env.CDN_URL = null;

    expect(() => {
        cdn('/yoda.jpeg', '200x200');
    }).toThrow("MIX_CDN_URL or CDN_URL not available in project environment");
});
