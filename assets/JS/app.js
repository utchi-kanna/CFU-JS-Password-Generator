/*get the number of characters*/
function charLength() {
  
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  
   const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lower = ["abcdefghijklmnopqrstuvwxyz"];
  const number = ["1234567890"];
  const symbol = [">?<~[];'./!@#$%^&*()_+{}|:"];
  
  let upperCase = document.getElementById("uppercase").checked;
  let lowerCase = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;


  let final = "";
  for (let i = 0; i < charLength; i++) {
    if (upperCase == true) {
      let ran = Math.random() * 10;
      final += upper[0].charAt(Math.ceil(ran));
    }
    if (lowerCase == true) {
      let ran = Math.random() * 10;
      final += lower[0].charAt(Math.ceil(ran));
    }
    if (numbers == true) {
      let ran = Math.random() * 10;
      final += number[0].charAt(Math.ceil(ran));
    }
    if (symbols == true) {
      let ran = Math.random() * 10;
      final += symbol[0].charAt(Math.ceil(ran));
    }
  }
  const output = final.slice(0, charLength);
  document.getElementById("password__result").value = output;
  return charLength;
}
charLength();
document.getElementById("length").addEventListener("input", charLength);
document.getElementById("btn").addEventListener("click", charLength);


