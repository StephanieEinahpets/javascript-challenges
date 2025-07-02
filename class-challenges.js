// Create a class that manages an array of items
//    Create a function that will:
//      -splice the managed arrays of items
//      -return each item from alternating sides of the array until the array is empty

class AlternatingArray {
  constructor(items) {
    this.items = items;
    this.start = true;
  }

  pop() {
    if (this.start) {
      this.start = false;
      return this.items.splice(0, 1)[0];
    } else {
      this.start = true;
      return this.items.splice(this.items.length - 1, 1)[0];
    }
  }
}

const arr = new AlternatingArray([1, 2, 3, 4, 5]);
console.log(arr.pop()); // 1
console.log(arr.pop()); // 5
console.log(arr.pop()); // 2
console.log(arr.pop()); // 4
console.log(arr.pop()); // 3
console.log(arr.pop()); // ''
