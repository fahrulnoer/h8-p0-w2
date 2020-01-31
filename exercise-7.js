// Nama : Fahrul Muhammad Noer
// exercise 7 week 2 phase 0

// 1. Menyusun Barisan Bintang

for (var rowstar1 = 1; rowstar1 <= 5; rowstar1 ++){
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

for (var rowstar2 = 1; rowstar2 <= 5; rowstar2 ++){
    var input2 = ''
    for (var star2 = 1; star2 <= 5; star2 ++){
        input2 += '*'
    }
    console.log(input2)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for (var rowstar3 = 1; rowstar3 <= 5; rowstar3 ++){
    var input3 = ''
    for (var star3 = 1; star3 <= rowstar3; star3 ++){
        input3 += '*'
    }
    console.log(input3)
}