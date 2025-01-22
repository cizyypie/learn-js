// function coba(){
//     return "Lanjuttt Trsss"
// }
// console.log(coba)

// function Coba2(){
//     console.log('tes')
// }

// console.log(Coba2())

// // 
// function tambah(angka1,angka2){
//     return angka1 - angka2;
// }
// console.log(tambah(12,3))
// console.log(tambah(12,7))

// fungsi dengan value

function balikKata(kata){
    let balikKata = "";
    for(let i = kata.length-1; i >= 0; i--){
        balikKata +=kata[i]
    }
    return balikKata;
}

console.log(balikKata("gajah"))
console.log(balikKata("Kucing"))
console.log(balikKata("tumblr"))

console.log('')