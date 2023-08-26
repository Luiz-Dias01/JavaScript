var agora = new Date()

var hora = agora.getHours()

if (hora >= 5 && hora < 12 ) {
    console.log(`Agora são ${hora} am \n Bom Dia !!`)
}

else if (hora >= 12 && hora <= 18) {
    console.log(`Agora são ${hora} pm \n Boa Tarde !!`)
}

else if (hora >= 19 && hora <= 24) {
    console.log(`Agora são ${hora} pm \n Boa Noite !!`)
}

else {
    console.log(`Agora são ${hora} am \n Boa Madrugada !!`)
}