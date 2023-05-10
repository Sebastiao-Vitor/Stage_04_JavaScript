//  Desafio da Rocktseat 02 

const students = [
  {
    name: "Amanda Medeiros",
    gradeOne: 8,
    gradeTwo: 7,
    gradeThree: 10
  },
  {
    name: "Sebastião Vitor",
    gradeOne: 5,
    gradeTwo: 8.5,
    gradeThree: 8.3
  },
  {
    name: "Eduardo Santos",
    gradeOne: 10,
    gradeTwo: 9.4,
    gradeThree: 9.8
  },
  {
    name: "Mateus Santana",
    gradeOne: 0,
    gradeTwo: 1,
    gradeThree: 10
  },
  {
    name: "Bianca Almeida",
    gradeOne: 8,
    gradeTwo: 0,
    gradeThree: 9.2
  },
]

let average = function(gradeOne, gradeTwo, gradeThree) {
  return ((gradeOne + gradeTwo + gradeThree) / 3).toFixed(1)
}

for(let student of students) {
  let resultGrade = average(student.gradeOne, student.gradeTwo, student.gradeThree)
  if(resultGrade >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${resultGrade}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${resultGrade}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}
