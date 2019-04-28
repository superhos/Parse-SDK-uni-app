# Parse SDK for Uni-app

A Parse Uni-app SDK base on [Parse Javascript SDK](http://parseplatform.org/Parse-SDK-JS/api/)(2.4.0).

# What is Uni-app

[Uni-app](https://uniapp.dcloud.io) is a powerful cross-platform front-end framework base on Vue.js. One code can release to IOS, android, H5, wechat mini-program and so on.

# Difference between JS SDK and Uni-app SDK

Uni-app runs on V8 environment instead of browser. That means it's not allow to use the **Web API**, such as LocalStorage, fetch, XMLHttpRequest.

In Parse Uni-app SDK. We update the Web API to Uni-app fixieble by rewrite the Web API classes.

## Usage

Same as Parse Javascript SDK. You don't need to make any extra changes. The SDK will detect the environment and change the SDK autmatic.

## License

```
Copyright (c) 2015-present, Parse, LLC.
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. An additional grant
of patent rights can be found in the PATENTS file in the same directory.
```

-----
As of April 5, 2017, Parse, LLC has transferred this code to the parse-community organization, and will no longer be contributing to or distributing this code.

 [build-status-svg]: https://travis-ci.org/parse-community/Parse-SDK-JS.svg?branch=master
 [build-status-link]: https://travis-ci.org/parse-community/Parse-SDK-JS
 [coverage-status-svg]: http://codecov.io/github/parse-community/Parse-SDK-JS/coverage.svg?branch=master
 [coverage-status-link]: http://codecov.io/github/parse-community/Parse-SDK-JS?branch=master
 [npm-svg]: https://badge.fury.io/js/parse.svg
 [npm-link]: https://npmjs.org/parse
 [cdn-svg]: https://img.shields.io/cdnjs/v/parse.svg
 [cdn-link]: https://cdnjs.com/libraries/parse
 [discourse-svg]: https://img.shields.io/discourse/https/community.parseplatform.org/topics.svg
 [discourse-link]: https://community.parseplatform.org/c/sdk/js
 [license-svg]: https://img.shields.io/badge/license-BSD-lightgrey.svg
 [license-link]: https://github.com/parse-community/Parse-SDK-JS/blob/master/LICENSE
 [greenkeeper-svg]: https://badges.greenkeeper.io/parse-community/Parse-SDK-JS.svg
 [greenkeeper-link]: https://greenkeeper.io/
 [types-parse]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/parse
 [open-collective-link]: https://opencollective.com/parse-server
