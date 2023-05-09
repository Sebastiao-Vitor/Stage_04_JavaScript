//  Desafio da Rocktseat

alert("Precisamos de 2 numero seja para operações matemática.")

let numberOne = Number(prompt("Digite um numero?"))
let numberTwo = Number(prompt("Digite um numero?"))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let rest = numberOne % numberTwo

alert(`A soma dos dois números: ${sum}`)
alert(`A subtração dos dois números: ${sub}`)
alert(`A multiplicação dos dois números: ${mult}`)
alert(`A divisão dos dois números: ${div}`)
alert(`O resto da divisão dos dois números: ${rest}`)

let imparOrPar = sum % 2

if(imparOrPar == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
}

let truth = numberOne == numberTwo

if(truth == true) {
  alert(`Os dois números inseridos são iguais, numero 1: ${numberOne} e numero 2: ${numberTwo}`)
} else {
  alert(`Os dois números inseridos são diferentes, numero 1: ${numberOne} e  numero 2: ${numberTwo}`)
}