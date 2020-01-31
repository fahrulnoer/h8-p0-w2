// Nama : Fahrul Muhammad Noer
// exercise 13 week 2 phase 0

function xo(str) {
    var x = 0
    var o = 0
    for (i = 0; i < str.length; i ++) {
        if (str[i] == 'o') {
            o ++
        }
        else if (str[i] == 'x') {
            x ++
        }
    }
    if (o == x) {
        return true
    }
    return false
  }
  
  // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true