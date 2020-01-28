// Nama : Fahrul Muhammad Noer
// exercise 3 week 2 phase 0

var nama = 'Haris';
var peran = 'Tabib';

if (nama == '') {
    console.log('"Nama harus diisi!"');
}
else if (nama == nama && peran == '') {
    console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!" \n"Silahkan pilih Ksatria, Tabib, atau Penyihir !"`);
} 
else if (nama == nama && peran == 'Ksatria') {
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}" \n"Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"`)
}
else if (nama == nama && peran == 'Tabib') {
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}" \n"Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka."`)
}
else if (nama == nama && peran == 'Penyihir') {
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}" \n"Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`)
}
else {
    console.log("Peran Anda Tidak Tersedia, Silahkan pilih Ksatria, Tabib, atau Penyihir !")
}