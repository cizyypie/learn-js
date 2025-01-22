// array ada 2 dimensi
let dimensi1 = [1,2,3,4,5,6];
let dimensi2 = [[1,2,3][4,5,6]];

// cara akses array adalah menggunakan index
console.log(dimensi1[2]) //3
console.log(dimensi1[4]) //5

console.log(dimensi2[0]) //1,2
console.log(dimensi2[1]) //1,3,4
console.log(dimensi2[2]) //undefined

console.log('looping untuk dimensi 2 :')
for (let i = 0; i < dimensi2.length; i++){
    for(let j = 0; j < dimensi2[i].length; i++){
        console.log(dimensi2[i][j])
    }
}
