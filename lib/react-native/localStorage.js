/**
 * rewrite localStorage for uni-app
 */
export default class localStorage {
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