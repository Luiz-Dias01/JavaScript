export default function Febre(temp) {

    if (temp >= 41) {
        console.log('Vá ao hospital você está sofrendo com Hipertemia!!')
    } else if (temp >= 39.6) {
        console.log('Você está com febre Alta vá ao medico!!')
    } else if (temp >= 37.6) {
        console.log('Você está com febre se cuide!! ')
    } else if (temp >= 36) {
        console.log('Você está com a temperatura normal')
    } else {
        console.log('Vá ao hospital você está sofrendo com Hipotermia!!')
    }

    return temp;
}