const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  if (expr.length < 10) return 0;
  let str = "";
  let result = "";

  for (let i = 0; i < expr.length; i += 2) {
    if (expr.substring(i, i + 2) === "00") {
      str += "!";
    }
    if (expr.substring(i, i + 2) === "10") {
      str += ".";
    }
    if (expr.substring(i, i + 2) === "11") {
      str += "-";
    }
    if (expr.substring(i, i + 10) === "**********") {
      str += "!space!";
      i += 8;
    }
  }
  str.split("!").map((item) => {
    if (MORSE_TABLE[item]) result += MORSE_TABLE[item];
    if (item === "space") result += " ";
  });
  return result;
}

// module.exports = {
//   decode,
// };

decode(
  "00000000100000111010101010111100111011100000001011111110101011111010101010101010"
);
