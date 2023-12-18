const fazerTabuada = (array: number[]): void => {

    for (const num of array) {
        for (let multiplier: number = 0; multiplier <= 10; multiplier++) {
            console.log(`${num} x ${multiplier} = ${num*multiplier}`)
        }
        console.log('---------------')
    }
}

fazerTabuada([2, 3])