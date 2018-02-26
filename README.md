[npm-badge]: https://img.shields.io/npm/v/@pigalle/registries.thirdparties.svg
[npm-badge-url]: https://www.npmjs.com/package/@pigalle/registries.thirdparties
[npm-downloads-badge]: https://img.shields.io/npm/dt/@pigalle/registries.thirdparties.svg
[npm-downloads-url]: https://npmjs.org/package/@pigalle/registries.thirdparties
[travis-badge]: https://img.shields.io/travis/pigalle-io/pigalle.registries.thirdparties/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/pigalle-io/pigalle.registries.thirdparties
[circle-badge]: https://circleci.com/gh/pigalle-io/pigalle.registries.thirdparties/tree/master.svg?style=svg&circle-token=
[circle-badge-url]: https://circleci.com/gh/pigalle-io/pigalle.registries.thirdparties/tree/master
[coveralls-badge]: https://coveralls.io/repos/github/pigalle-io/pigalle.registries.thirdparties/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/pigalle-io/pigalle.registries.thirdparties?branch=master
[codeclimate-badge]: https://img.shields.io/codeclimate/github/pigalle-io/pigalle.registries.thirdparties.svg
[codeclimate-badge-url]: https://codeclimate.com/github/pigalle-io/pigalle.registries.thirdparties
[ember-observer-badge]: http://emberobserver.com/badges/pigalle.registries.thirdparties.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/pigalle.registries.thirdparties
[license-badge]: https://img.shields.io/npm/l/@pigalle/registries.thirdparties.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/pigalle-io/pigalle.registries.thirdparties.svg
[dependencies-badge-url]: https://david-dm.org/pigalle-io/pigalle.registries.thirdparties
[devDependencies-badge]: https://img.shields.io/david/dev/pigalle-io/pigalle.registries.thirdparties.svg
[devDependencies-badge-url]: https://david-dm.org/pigalle-io/pigalle.registries.thirdparties#info=devDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/pigalle-io/pigalle.registries.thirdparties.svg
[greenkeeper-badge-url]: https://greenkeeper.io/
[standardjs-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standardjs-badge-url]: https://standardjs.com


# pigalle.registries.thirdparties

A registry to use third party libraries with the Pigalle framework.


---
&#x1F34E; <span style="color:red">**__Warning !__ Work in progress...**</span>
---


[![JavaScript Style Guide][standardjs-badge]][standardjs-badge-url]
[![Latest NPM release][npm-badge]][npm-badge-url]
[![NPM Downloads][npm-downloads-badge]][npm-downloads-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Test Coverage][coveralls-badge]][coveralls-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url] 
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-badge-url]

## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [API Reference](#api-reference)
* [Tests](#tests)
  * [Run unit tests](#tests_run-unit-tests)
* [Build](#build)
  * [Documentation](#build-documentation)
* [Compatibility](#compatibility)
  * [Node](#compatibility_node)
  * [Browser](#compatibility_browser)
* [Issues](#issues)
* [Contributing](#contributing)
* [Credits](#credits)
* [History](#history)
* [License](#license)

## <a name="synopsis"> Synopsis

A registry to use third party libraries with the Pigalle framework.

## <a name="usage"> Usage

```javascript

const {ThirdPartiesRegistry} = require('@pigalle/registries.thirdparties')
const {ThirdPartyPlugin} = require('@pigalle/plugins.thirdparty')

// Create a new registry to store third parties.
const registry = ThirdPartiesRegistry.factory()

// Add express.js to the registry
registry.set(ThirdPartyPlugin.factory('express'))

// Add restify to the registry
registry.set('http-backend', ThirdPartyPlugin.factory('restify'))

// Another way to add restify to registry
registry.set('restify')

// Another way ;-)
registry.set('http-backend', 'restify')

```

## <a name="installation"> Installation

    npm install @pigalle/registries.thirdparties

## <a name="api-reference"> API Reference

Please refer to [API documentation](docs/API.md).

## <a name="test"> Tests

### <a name="tests_run-unit-tests"> Run unit tests

    npm test
    
## <a name="build"> Build

### <a name="build-documentation"> Build documentation

**Be careful!** Documentation ([README](README.md) and [API](docs/API.md)) is generated using templates. Please **only** modify documentation from related [templates](./.templates).

Then you can build documentation using the following command:

   npm run docs
   
or:

   gulp docs


## <a name="compatibility"> Compatibility

### <a name="compatibility_node"> Node

Tested using [Node 9.5.0](https://nodejs.org/dist/v9.5.0/docs/api/).

### <a name="compatibility_browser"> Browser

Untested at this time.

## <a name="issues"> Issues

Feel free to [submit issues](https://github.com/pigalle-io/pigalle.registries.thirdparties/issues) and enhancement requests.

## <a name="contributing"> Contributing

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## <a name="credits"> Credits

### Thanks to the developers of the very useful dependencies...

* [@pigalle/registries.plugins](https://github.com/pigalle-io/registries.plugins) by [pigalle.io](https://github.com/pigalle-io/)
* [@pigalle/plugins.thirdparty](https://github.com/pigalle-io/plugins.thirdparty) by [pigalle.io](https://github.com/pigalle-io/)

## <a name="history"> History

Please refer to [the changelog file](docs/CHANGELOG.md).

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
