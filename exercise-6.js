// Nama : Fahrul Muhammad Noer
// exercise 6 week 2 phase 0

// 1. Melakukan Looping Menggunakan While

// Looping Pertama

// console.log("LOOPING PERTAMA");

var loopwhile1 = 2;
while (loopwhile1 <= 20) {
    // console.log(loopwhile1 + " - I love coding")
    loopwhile1++
}


// console.log("LOOPING KEDUA")

var loopwhile2 = 20;
while (loopwhile2 > 1) {
    // console.log(loopwhile2 + " - I will become fullstack developer")
    loopwhile2--
}

// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for (var i = 1; i <= 20; i++) {
    // console.log(i + " - I love coding")
}

console.log("LOOPING KEDUA")
for (var i = 20; i > 0; i--) {
    // console.log(i +" - I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap

console.log('Counter 2')
var counter2 = 1
for (var counter2 = 1; counter2 <= 100; counter2 += 2){
    if (counter2 % 3 == 0)
        console.log(counter2 + ' KELIPATAN 3')
    else {
        console.log(`${counter2}`)
    }
}

// Counter 5
console.log('Counter 5')
var counter5 = 1
for (var counter5 = 1; counter5 <= 100; counter5 += 5){
    if (counter5 % 6 == 0)
        console.log(counter5 + ' KELIPATAN 6')
    else {
        console.log(`${counter5}`)
    }
}

// Counter 9
console.log('Counter 9')
var counter9 = 1
for (var counter9 = 1; counter9 <= 100; counter9 += 9){
    if (counter9 % 10 == 0)
        console.log(counter9 + ' KELIPATAN 10')
    else {
        console.log(`${counter9}`)
    }
}