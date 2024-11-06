/*
The Bridge pattern separates an object’s abstraction from its implementation, allowing them to vary independently.

*/
class RemoteControl {
  constructor(device) {
    this.device = device;
  }
  togglePower() {
    this.device.power = !this.device.power;
    console.log(`${this.device.name} is ${this.device.power ? "ON" : "OFF"}`);
  }
}
class TV {
  constructor(name) {
    (this.name = name), (this.power = false);
  }
}
class AC {
  constructor(name) {
    (this.name = name), (this.power = false);
  }
}
const ac = new AC("AC");
const tv = new TV("TV");

const tvRemoteControl = new RemoteControl(tv);
tvRemoteControl.togglePower();
tvRemoteControl.togglePower();

const acRemoteControl = new RemoteControl(ac);
acRemoteControl.togglePower();
acRemoteControl.togglePower();
