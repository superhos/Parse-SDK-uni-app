"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * rewrite localStorage for uni-app
 */

class localStorage {
  static setItem(key, value) {
    try {
      uni.setStorageSync(key, value);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static getItem(key) {
    try {
      return uni.getStorageSync(key);
    } catch (e) {
      throw new Error(err.message);
    }
  }

  static remove(key) {
    try {
      uni.removeStorageSync(key);
    } catch (e) {
      throw new Error(err.message);
    }
  }

  static clear() {
    try {
      uni.clearStorageSync();
    } catch (e) {
      throw new Error(err.message);
    }
  }

}

exports.default = localStorage;