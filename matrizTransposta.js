function transporMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j < A[0].length; j++){
            linha += A[i][j] + "\t";
        }
        linha  += "\n";
        console.log(linha);
    }

    A = [
        [1, 2],
        [3, 4],
        [5, 6]
    ]   

    for(let j = 0; j < A[0].length; j++){
        let linha = "";
        for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t";
        }
        linha  += "\n";
        console.log(linha);
    }
}