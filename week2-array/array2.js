let orang = [
    ["bryan", "indonesia", "22 tahun"],
    ["john", "inggrins","25 tahun"]
];

console.log('-----------Biodata orang----------')
for (let i = 0; i < orang.length; i++){
    for (let j = 0; j < orang[i].length; j++){
        if(j === 0){
            console.log(`nama: ${orang[i][j]}`)
        } else if ( j === 1){
            console.log(`lokasi: ${orang[i][j]}`)
        }else{
            console.log(`umur: ${orang[i][j]}`)
        }
    }
    console.log('')
}