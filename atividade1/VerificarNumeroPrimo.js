function ehPrimo(numero) {

    if (numero <= 1) {
        return false;
        
    }

    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return false;
        }
    }

    return true;
}

let numero = 3;

if(ehPrimo(numero)){
    console.log(numero + " primo");
}

else{
    console.log(numero + " não primo")
}