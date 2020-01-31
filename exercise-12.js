// Nama : Fahrul Muhammad Noer
// exercise 12 week 2 phase 0

function konversiMenit(menit) {
    var semenit = menit % 60
    var sejam = (menit - semenit) / 60
    
    if (semenit < 10) {
        simenit = '0' + semenit
        return sejam + ':' + simenit
    }
        return sejam + ':' + semenit
  }
  

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00