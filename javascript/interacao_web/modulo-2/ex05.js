var idade = 15

console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('você ainda não pode votar')
}

else {
    if (idade <= 17) {
        console.log('Seu voto é opcional')
    }

    else {
        if (idade <= 67) {
            console.log('Seu voto é obrigatorio')
        }
       
        else {
            console.log('Seu voto é opcional')
           
        }
    }
}