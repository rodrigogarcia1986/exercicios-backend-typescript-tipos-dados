const soletrar = (palavra: string): void => {

    let result: string = palavra[0]

    for (const letra of palavra.slice(1)) {
        result += `-${letra}`
    }

    console.log(result)    
}

soletrar('backend')