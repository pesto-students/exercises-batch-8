
function ConsumableUsers() {
  this.users = ['user: Alice', 'user: Bob'];
  this.size = 2;
  this.nextUser = function () {
    this.size -= 1;
    return this.users.shift();
  };
  this.done = function () {
    return this.size === -1;
  };
}

export {
  ConsumableUsers,
};
