# 23g/cdn-helper-js
CDN helper

- [Installation](#installation)
- [Testing](#testing)

## Installation

First install the package in your project.

`npm install 23g/cdn-helper`

or

`yarn install 23g/cdn-helper`


After installing make sure in your environment CDN_URL or MIX_CDN_URL (with laravel mix projects) is set with the url to the CDN.

## Usage

Within our project you can use the cdn() helper function which accepts 3 parameters:

```javascript

module.exports = (path, dimensions = null, mode = 'crop') => {
    ...
}

```
## Testing

Run the tests with:

``npm test``
