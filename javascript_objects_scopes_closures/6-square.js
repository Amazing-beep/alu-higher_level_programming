#!/usr/bin/node
const ParentSquare = require("./5-square");

class Square extends ParentSquare {
  charPrint (c) {
    const char = c === undefined ? "X" : c;
    if (this.width && this.height) { // Check if width/height exist (inherited from Rectangle validation)
      for (let i = 0; i < this.height; i++) {
        let row = "";
        for (let j = 0; j < this.width; j++) {
          row += char;
        }
        console.log(row);
      }
    }
  }
}

module.exports = Square;
