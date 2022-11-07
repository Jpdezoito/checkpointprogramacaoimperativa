
let pipoca = 10
let macarrao = 8
let carne = 15
let feijao = 12
let brigadeiro = 8
let prato1 = 'A comida queimou'
let prato2 = 'Kabumm!!'
let prato3 = 'tempo insuficiente'

function menu(tempo ,comida){


if (tempo == comida){
    return 'Prato pronto bom apetite!'    
}else if (tempo >= comida * 3 && tempo <= comida *3) {
    return  prato1;
} else if (tempo >= comida * 4){
    return prato2;
}else if (tempo < comida) {
    return prato3;
}
else if(tempo > comida && tempo < comida *3){
    return 'Passou do ponto'
}
// não consegui não listado
}



console.log(menu(10, macarrao))
console.log(menu(10, pipoca))
console.log(menu(10, carne))
console.log(menu(10, feijao))
console.log(menu(10, brigadeiro))
