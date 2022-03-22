const START = 'A'.charCodeAt(0);
const END = 'Z'.charCodeAt(0);
const MOD = 26;

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA ATTACK'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.isReversed = !type;
  }
  encrypt(message, key) {
    return this.crypt(
      message,
      key,
      (charCode, keyCode) => (charCode + keyCode) % MOD
    );
  }
  decrypt(message, key) {
    return this.crypt(
      message,
      key,
      (charCode, keyCode) => (MOD - (keyCode - charCode)) % MOD
    );
  }
  crypt(message, key, calculateCharPosition) {
    if (message == null || key == null) throw Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let cryptoString = '';
    let keyPointer = 0;

    for (let i = 0, char = ''; (char = message.charAt(i++)); ) {
      const charCode = char.charCodeAt(0);

      if (charCode >= START && charCode <= END) {
        const keyCode = key.charCodeAt(keyPointer++ % key.length);
        cryptoString += String.fromCharCode(
          START + calculateCharPosition(charCode, keyCode)
        );
      } else {
        cryptoString += char;
      }
    }
    return this.isReversed ? cryptoString.split``.reverse().join`` : cryptoString;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
