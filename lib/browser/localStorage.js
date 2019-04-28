"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
/**
 * rewrite localStorage for uni-app
 */


var localStorage =
/*#__PURE__*/
function () {
  function localStorage() {
    (0, _classCallCheck2.default)(this, localStorage);
  }

  (0, _createClass2.default)(localStorage, null, [{
    key: "setItem",
    value: function (key, value) {
      try {
        uni.setStorageSync(key, value);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  }, {
    key: "getItem",
    value: function (key) {
      try {
        return uni.getStorageSync(key);
      } catch (e) {
        throw new Error(err.message);
      }
    }
  }, {
    key: "remove",
    value: function (key) {
      try {
        uni.removeStorageSync(key);
      } catch (e) {
        throw new Error(err.message);
      }
    }
  }, {
    key: "clear",
    value: function () {
      try {
        uni.clearStorageSync();
      } catch (e) {
        throw new Error(err.message);
      }
    }
  }]);
  return localStorage;
}();

exports.default = localStorage;