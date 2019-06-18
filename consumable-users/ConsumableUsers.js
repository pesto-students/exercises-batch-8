
class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.nextUserIndex = 0;
    this.isDone = false;
  }

  nextUser() {
    let nextUser;
    if (this.nextUserIndex < this.users.length) {
      nextUser = `user: ${this.users[this.nextUserIndex]}`;
      this.nextUserIndex += 1;
    } else {
      this.isDone = true;
      nextUser = undefined;
    }
    return nextUser;
  }

  done() {
    return this.isDone;
  }
}

export {
  ConsumableUsers,
};
