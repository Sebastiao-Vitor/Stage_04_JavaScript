/* 
    - ** Jogo da advinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie um lógica para gerar número aleatório
    e verigicar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquato o usúario não adivinhar o número, mostrar a mensagem:
    "Erro, tente nobvamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

            // Resolução do Maikão

// let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
// const randomNumber = Math.round(Math.random() * 10)

// let xAttempts = 1

// while(Number(result) != randomNumber) {
//     result = prompt("Erro, tente novamente:")
//     xAttempts++
// }

// alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)


//  Minha resolução

let result = prompt("Advinhe o numero que eu pensarei de 1 a 5:")

const numberRandom = Math.round(Math.random() * 5)

let xAttempts = 1

while(Number(result != numberRandom)) {
    result = prompt("Erro, tente novamente:")
    xAttempts++
}

if(xAttempts > 1) {
    alert(`Parabéns, vc acertou o numero que eu estava pensando que era: ${numberRandom}, em ${xAttempts} tentativas! 😃`)
} else {
    alert(`Parabéns, vc acertou o numero que eu estava pensando que era: ${numberRandom}, em ${xAttempts} tentativa! 😃`)
}
