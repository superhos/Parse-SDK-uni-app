"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLocalDatastoreKey = isLocalDatastoreKey;
exports.OBJECT_PREFIX = exports.PIN_PREFIX = exports.DEFAULT_PIN = void 0;
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

var DEFAULT_PIN = '_default';
exports.DEFAULT_PIN = DEFAULT_PIN;
var PIN_PREFIX = 'parsePin_';
exports.PIN_PREFIX = PIN_PREFIX;
var OBJECT_PREFIX = 'Parse_LDS_';
exports.OBJECT_PREFIX = OBJECT_PREFIX;

function isLocalDatastoreKey(key
/*: string*/
)
/*: boolean*/
{
  return !!(key && (key === DEFAULT_PIN || key.startsWith(PIN_PREFIX) || key.startsWith(OBJECT_PREFIX)));
}