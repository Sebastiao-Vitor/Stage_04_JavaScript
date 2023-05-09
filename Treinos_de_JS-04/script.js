/* 
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
/* 
    Eu que fiz esse sozinho kkk grato por conseguir

    Programa
      alert("Iremos requerir nome do aluno e suas notas do Bimestre!")

      let alunoName = prompt("Nome do aluno:")
      let notaOne = prompt("Nota Prova 1")
      let notaTwo = prompt("Nota Prova 2")
      let notaThree = prompt("Nota Prova 3")

      alert('Nome e notas coletados, media para passar 6,5')

      notaOne = Number(notaOne)
      notaTwo = Number(notaTwo)
      notaThree = Number(notaThree)

      let resultProva = (notaOne + notaTwo + notaThree) / 3


      if (resultProva >= 6.5) {
          alert(`Parabéns você foi aprovado ${alunoName} com a nota: ${resultProva}`)
      } else if(resultProva < 6.5) {
          alert(`O aluno ${alunoName} foi reprovado com a nota:${resultProva}, porém de o seu melhor na prova de recuperação`)
      }

*/ 

// Resolução do Mayk

// let student = prompt("Qual o nome do(a) aluno(a)?")
// let n1 = prompt("Qual a nota da primeira prova?")
// let n2 = prompt("Qual a nota da segunda prova?")
// let n3 = prompt("Qual a nota da terceira prova?")

// let average = (Number(n1) + Number(n2) + Number(n3)) / 3

// let result = average > 6 

// average = average.toFixed(2)

// if (result) {
//   alert("Parabéns, " + student + " !Sua média foi de: " + average)
// } else {
//   alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average)
// }




/*
      1 aluno
      6 notas
      3 média resultados
        1 aprovado  7 a 10
        2 recuperação  4 a 7
        3 reprovado   0 a 4
*/

alert("Formulario da média dos alunos")

let alunoName = prompt("Nome do aluno a ser avaliado.")
let n1 = prompt("Nota da Primeira Prova")
let n2 = prompt("Nota da Segunda Prova")
let n3 = prompt("Nota da Terceira Prova")
let n4 = prompt("Nota da Quarta Prova")
let n5 = prompt("Nota da Quinta Prova")
let n6 = prompt("Nota da Sexta Prova")

let average = (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5) + Number(n6)) / 6

average = average.toFixed(2)

if(average >= 10) {
  alert(`Parabéns aluno: ${alunoName}, você foi aprovado com a melhor nota possivel: ${average}`)
} else if(average >= 6.90) {
  alert(`Parabéns aluno: ${alunoName}, você fou aprovado com a nota: ${average}`)
} else if(average >= 4) {
  alert(`Aluno: ${alunoName}, você ficou de recuperação com a nota: ${average}, se esforce para tirar uma otima nota na prova!`)
} else if(average <= 3.99) {
  alert(`Aluno: ${alunoName}, você foi reprovado, nota: ${average}`)
}

alert("Fim da avaliação, Obg a todos. 😁😁😁")