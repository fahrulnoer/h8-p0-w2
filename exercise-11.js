// Nama : Fahrul Muhammad Noer
// exercise 11 week 2 phase 0

function balikKata(kata) {
    var kebalikan = ''
    for (var i = kata.length -1; i >= 0; i --) {
        kebalikan += kata[i] 
    }
    return kebalikan
  }
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS