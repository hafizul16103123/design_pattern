/**
 * The Facade pattern provides a simplified interface to a complex system.


 */
class CPU {
  freeze() {
    console.log("freeze");
  }
  execute() {
    console.log("executing");
  }
}
class Memory {
  load(position, data) {
    console.log(`${data} loaded from position ${position}`);
  }
}
class HardDrive {
  read(data) {
    return data;
  }
}


class ComputerFaced{
  constructor(){
    this.cpu = new CPU()
    this.memory = new Memory()
    this.harddrive = new HardDrive()
  }
  start(){
    this.cpu.freeze()
    this.memory.load(1,this.harddrive.read('Hafiz'))
    this.cpu.execute()
  }
}

const computer = new ComputerFaced()
computer.start()