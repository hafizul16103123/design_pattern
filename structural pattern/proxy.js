/*
The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

*/
class internet {
  connectTo(url) {
    console.log("Connecting to server " + url);
  }
}
class InternetProxy {
  constructor() {
    this.bannedURLS = ["banned.com"];
    this.internet = new internet();
  }

  connectTo(url) {
    if (this.bannedURLS.includes(url)) {
      console.log("connection refused....");
    } else {
      this.internet.connectTo(url);
    }
  }
}

const proxy = new InternetProxy();
proxy.connectTo("banned.com");
proxy.connectTo("google.com");
