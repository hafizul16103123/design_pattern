// The Adapter pattern allows two incompatible interfaces to work together. It's like a translator between two objects.

class OldPrinter {
  printing(text) {
    console.log(`Print by old way ${text}`);
  }
}

class NewPrinter {
  print(text) {
    console.log(`Print by new way ${text}`);
  }
}

// print by new printer using print method
const newPrinter = new NewPrinter();
newPrinter.print("Hello");

// old printer does not have method print() so need a adapter to compatible with new printer
// and wrap old printer method with new printer method
class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  print(text) {
    this.oldPrinter.printing(text);
  }
}

const oldPrinter = new OldPrinter();
const printerAdapter = new PrinterAdapter(oldPrinter);
printerAdapter.print("Hello");
