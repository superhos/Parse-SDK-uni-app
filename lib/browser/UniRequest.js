"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
/**
 * Package uni.request to a Fake XMLHttpResult
 */


var UniReqeust =
/*#__PURE__*/
function () {
  function UniReqeust() {
    (0, _classCallCheck2.default)(this, UniReqeust);
    this.request = {};
    this.requestHeader = {};
    this.onreadystatechange = null;
    this.readyState = 0;
    this.status = 100;
    this.responseText = '';
    this.response = null;
  }

  (0, _createClass2.default)(UniReqeust, [{
    key: "open",
    value: function (method, url) {
      this.request.method = method;
      this.request.url = url;
      this.readyState = 1;
    }
  }, {
    key: "setRequestHeader",
    value: function (key, val) {
      this.requestHeader[key] = val;
    }
  }, {
    key: "send",
    value: function (data) {
      var _this = this;

      this.request.header = this.requestHeader;
      this.request.data = data;
      uni.request(this.request).then(function (data) {
        var _data = (0, _slicedToArray2.default)(data, 2),
            error = _data[0],
            res = _data[1];

        if (error) {
          throw new Error(error);
        }

        _this.response = res;
        _this.readyState = 4;
        _this.status = res.statusCode;
        _this.responseText = JSON.stringify(res.data);
      }).then(function () {
        if (_this.onreadystatechange) {
          _this.onreadystatechange();
        }
      }).catch(function (err) {
        throw new Error(err);
      });
    }
  }, {
    key: "getResponseHeader",
    value: function (key) {
      if (this.readyState === 4) {
        return this.response.header[key];
      }

      return null;
    }
  }, {
    key: "getAllResponseHeaders",
    value: function () {
      if (this.readyState === 4) {
        return Object.keys(this.response.header);
      }

      return null;
    } // waiting
    // upload () {}
    // waiting
    // addEventListener(){}

  }]);
  return UniReqeust;
}();

exports.default = UniReqeust;