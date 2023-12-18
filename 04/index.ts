type Produto =  {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}

const gerarEtiqueta = (produto: Produto): void => {
    
    const result: string[] = []

    for (const num of Array.from({length:produto.qtd }, (_, i) => i + 1)) {
        result.push(`${produto.lote.toString()}-${produto.ano.toString()}-${
            num < 10 ? `00${num.toString()}` : 
            num < 100 ? `0${num.toString()}` :
            num.toString()
         }`)
    }

    console.log(result)
}


gerarEtiqueta( {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 101
})