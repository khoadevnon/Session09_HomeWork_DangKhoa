let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let str = "";
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
str = "";
for (let i = n; i >= 1; i--) {
  for (let j = n; j > i; j--) {
    str += " ";
  }
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
