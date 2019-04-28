/**
 * Package uni.request to a Fake XMLHttpResult
 */
export default class UniReqeust {
  constructor() {
    this.request = {};
    this.requestHeader = {};
    this.onreadystatechange = null;
    this.readyState = 0;
    this.status = 100;
    this.responseText = '';
    this.response = null;
  }

  open(method, url, async) {
    this.request.method = method;
    this.request.url = url;
    this.readyState = 1;
  }

  setRequestHeader(key, val) {
    this.requestHeader[key] = val;
  }

  send(data) {
    this.request.header = this.requestHeader;
    this.request.data = data;
    uni.request(this.request).then(data => {
      var [error, res] = data;

      if (error) {
        throw new Error(error);
      }

      this.response = res;
      this.readyState = 4;
      this.status = res.statusCode;
      this.responseText = JSON.stringify(res.data);
    }).then(() => {
      if (this.onreadystatechange) {
        this.onreadystatechange();
      }
    }).catch(err => {
      throw new Error(err);
    });
  }

  getResponseHeader(key) {
    if (this.readyState === 4) {
      return this.response.header[key];
    }

    return null;
  }

  getAllResponseHeaders() {
    if (this.readyState === 4) {
      return Object.keys(this.response.header);
    }

    return null;
  } // waiting
  // upload () {}
  // waiting
  // addEventListener(){}


}