/*get the number of characters*/
function charLength() {
  let upperCase = document.getElementById("uppercase").checked;
  let lowerCase = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;

  const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lower = ["abcdefghijklmnopqrstuvwxyz"];
  const number = ["0123456789"];
  const symbol = ["!@#$%^&*()_+{}|:>?<~[];'./"];

  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;

  let final = "";
  for (let i = 0; i < charLength; i++) {
    if (upperCase) {
      final += upper[0].charAt(Math.floor(Math.random() * 10));
    }
    if (lowerCase) {
      final += lower[0].charAt(Math.floor(Math.random() * 10));
    }
    if (numbers) {
      final += number[0].charAt(Math.floor(Math.random() * 10));
    }
    if (symbols) {
      final += symbol[0].charAt(Math.floor(Math.random() * 10));
    }
  }
  const output = final.slice(0, charLength);
  document.getElementById("password__result").value = output;
  return charLength;
}
charLength();
document.getElementById("length").addEventListener("input", charLength);
document.getElementById("btn").addEventListener("click", charLength);
