'use strict';

import cdn from '../cdn';

const cdnImageUrl = 'https://cdn.test.io';

process.env.CDN_IMAGE_URL = cdnImageUrl;

test('returns_image_withouth_resizing', () => {
    expect(cdn('/yoda.jpeg')).toBe(cdnImageUrl + '/yoda.jpeg');
});

test('returns_url_with_dimensions', () => {
    expect(cdn('/yoda.jpeg', 'h200')).toBe(cdnImageUrl + '/size:h200,mode:crop,quality:70/yoda.jpeg');
});

test('returns_url_with_dimensions', () => {
    expect(cdn('/yoda.jpeg', '200x200')).toBe(cdnImageUrl + '/size:200x200,mode:crop,quality:70/yoda.jpeg');
});

test('removes_url_frompath', () => {
    expect(cdn(cdnImageUrl + 'yoda.jpeg', '200x200')).toBe(cdnImageUrl + '/size:200x200,mode:crop,quality:70/yoda.jpeg');
});

test('expects_error', () => {
    process.env.CDN_IMAGE_URL = null;

    expect(() => {
        cdn('/yoda.jpeg', '200x200');
    }).toThrow("MIX_CDN_IMAGE_URL or CDN_IMAGE_URL not available in project environment");
});
