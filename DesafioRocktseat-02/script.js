//  Desafio da Rocktseat 02 

const students = [
  {
    name: "Amanda Medeiros",
    gradeOne: 8,
    gradeTwo: 7
  },
  {
    name: "Sebastião Vitor",
    gradeOne: 5,
    gradeTwo: 8.5
  },
  {
    name: "Eduardo Santos",
    gradeOne: 10,
    gradeTwo: 9.4
  },
  {
    name: "Mateus Santana",
    gradeOne: 0,
    gradeTwo: 1
  },
  {
    name: "Bianca Almeida",
    gradeOne: 8,
    gradeTwo: 0
  },
]

let average = function(gradeOne, gradeTwo) {
  return ((gradeOne + gradeTwo) / 2)
}

for(let student of students) {
  let resultGrade = average(student.gradeOne, student.gradeTwo)
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
