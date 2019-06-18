
function ConsumableUsers() {
  this.users = ['Alice', 'Bob'];
  this.size = 2;
  this.nextUser = function () {
    this.size -= 1;
    if (this.users.length === 0) {
      return undefined;
    }
    return `user: ${this.users.shift()}`;
  };
  this.done = function () {
    return this.size === -1;
  };
}

export {
  ConsumableUsers,
};
