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
  let str = "";
  let result = "";

  str = expr
  .replace(/11/g, "-")
  .replace(/10/g, ".")
  .replace(/00/g, "!")
  .replace(/[**********]{10}/g, " ");
  
  for (let i = 0; i <= str.length + 5; i += 5){
    let tenSigns = str.substring(i, i + 5).replace(/!/g, "");
    result += MORSE_TABLE[tenSigns]
  }
  return result;
}

module.exports = {
  decode,
};
