const arr1 = [12, 17, 15, 19, 22, 17, 19, 12]

function numeroSolitario(array){
    var x = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < array.length; j++){
            if(j!=i){
                if (element==array[j]) {break}
            }
            if(j==array.length-1){x.push(element) }
        }  
    }
    return x
}
console.log(numeroSolitario(arr1))