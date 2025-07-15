let x = [5, 8, 9, 1, 3 ]

// Maneira 'tradicional' de fazer o percurso de vetores
/*
for (let pos=0; pos<x.length; pos++){
    console.log(`A posição ${pos} tem o valor ${x[pos]}`)
}
*/

// Maneira mais atualizada bomba patch 3.0

for (let pos in x){
    console.log(`A posição ${pos} tem o valor ${x[pos]}`)
}
