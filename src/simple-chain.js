/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this._chain.length;
  },
  addLink(value = '') {
    this._chain = this._chain || (this._chain = []);
    this._chain.push(String(value))
    return this;
  },
  removeLink(position) {
    if (
      parseInt(position) !== Number(position) ||
      (position < 1 || position > this.getLength())
    ) {
      this.resetChain();
      throw Error("You can't remove incorrect link!");
    }

    this._chain.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this._chain;
    this.resetChain();
    return chain.map(i => `( ${i} )`).join('~~')
  },

  resetChain() {
    this._chain = [];
    return this;
  }
};

module.exports = {
  chainMaker
};
