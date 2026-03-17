// teorema p vs np

function verificarNumeroPrimo(n){
    let e_primo = true;

    if (n == 0 || n == 1){
        e_primo = false;
    }
    if (n != 2 && n % 2 == 0){
        e_primo = false;
    }
    for(let i = 3; i < n; i += 2){
        if(n % i == 0){
            e_primo = false;
        }
    }
    console.log(e_primo);
    return e_primo;
}

console.log(`primo(2) = ${verificarNumeroPrimo(2)}`);
console.log(`primo(4) = ${verificarNumeroPrimo(4)}`);