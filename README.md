[![@controlla/nuxt-typeform](https://images.ctfassets.net/co0pvta7hzrh/5A4NiAWcPUDSXrkCH7z2EL/773b8251e22e888aec7fcdf0c4a82f96/meta_Homepage.png_h_250)](https://typeform.controlla.org)

# @controlla/nuxt-typeform

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Typeform](https://www.typeform.com/) module for [Nuxt](https://v3.controlla.org)

- [✨ &nbsp;Release Notes](https://github.com/Controlla/nuxt-typeform/releases)
- [📖 &nbsp;Read the documentation](https://typeform.controlla.org)

## Features

- Nuxt 3 ready
- Easy integration with Typeform
- Support for Vue Widget component
- Support for Typeform Recommend
- TypeScript support

## Setup

```sh
yarn add @controlla/nuxt-typeform # yarn
npm i @controlla/nuxt-typeform # npm
```

## Basic usage

Firstly, you need to add `@controlla/nuxt-typeform` to your Nuxt config.

```javascript
// nuxt.config.js

{
    modules: [
        "@controlla/nuxt-typeform",
    ],
    typeform: {
        formId: "<FORM_ID>"
    }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@controlla/nuxt-typeform/latest.svg
[npm-version-href]: https://npmjs.com/package/@controlla/nuxt-typeform
[npm-downloads-src]: https://img.shields.io/npm/dt/@controlla/nuxt-typeform.svg
[npm-downloads-href]: https://npmjs.com/package/@controlla/nuxt-typeform
[github-actions-ci-src]: https://github.com/Controlla/nuxt-typeform/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/Controlla/nuxt-typeform/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/Controlla/nuxt-typeform.svg
[codecov-href]: https://codecov.io/gh/controlla/nuxt-typeform
[license-src]: https://img.shields.io/npm/l/@controlla/nuxt-typeform.svg
[license-href]: https://npmjs.com/package/@controlla/nuxt-typeform