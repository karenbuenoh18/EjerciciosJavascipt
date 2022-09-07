/* let nummin = [4, 13, 2, 17, 20];
let n = Math.min(... nummin);
console.log(n) */


let nums = [-1, 3, 4, 2, 6];
           
function Menor (arreglo){

    let vMin = arreglo[0];

    for (let i = 0; i < arreglo.length; i++){

        if( vMin > arreglo [i]){
            vMin = arreglo[i];
        }


    }
    return vMin;
    }


console.log(Menor(nums));