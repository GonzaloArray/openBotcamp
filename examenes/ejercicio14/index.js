const num = (num) =>{

    let array = []

    for (let i = 0; i < num; i++) {
        array = [...array, i]
    }

    return array

}

console.log(num(4));