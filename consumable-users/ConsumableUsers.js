
class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.index = -1;
  }

  nextUser() {
    this.index += 1;
    const next = this.users[this.index];
    return this.done() ? undefined : `user: ${next}`;
  }

  done() {
    return this.index >= this.users.length;
  }
}

export {
  ConsumableUsers,
};
