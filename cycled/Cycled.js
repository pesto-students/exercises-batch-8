class cycled {
//   constructor(...array) {
//     this.data = array;
//     this.index = 0;
//   }

//   current() {
//     return this.data[this.index];
//   }

//   previous() {
//     this.getInBound(-1);
//     return this.data[this.index];
//   }

//   next() {
//     this.getInBound(1);
//     return this.data[this.index];
//   }

//   getInBound(factor) {
//     if (this.index - factor < 0) {
//       this.index = this.data.length - 1;
//     }
//     if (this.index + factor > this.data.length) {
//       return (this.index = 0);
//     }
//     return this.index + factor;
//   }
}

export { cycled };
