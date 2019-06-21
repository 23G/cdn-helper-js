# @23g/cdn-helper
[![build_status](https://api.travis-ci.org/23G/cdn-helper-js.svg?branch=master)](https://travis-ci.org/23G/cdn-helper-js)

CDN helper

- [Installation](#installation)
- [Testing](#testing)

## Installation

First install the package in your project.

`npm install @23g/cdn-helper`

or

`yarn install @23g/cdn-helper`


After installing make sure in your environment CDN_IMAGE_URL or MIX_CDN_IMAGE_URL (with laravel mix projects) is set with the url to the CDN.

## Usage

Within our project you can use the cdn() helper function which accepts 3 parameters:

```javascript

import cdn from 'cdn-helper';

/**
 * {String} path
 * {String} dimensions | (width)x(height), w(width), h(height)
 * {String} mode | crop is default, can be left empty
 **/
cdn('/yoda.jpeg', '200x200', 'crop');

```

### Resize options

The possibel resize options passed along in the "dimensions" param are as following:

|Value|Action|
|---|---|
|(width)x(height)| Resize an image using both dimensions
|h(height)| To scale an image based on height
|w(width)| To scale an image based on width
