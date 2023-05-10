/* 
    Crie uma lista de pacientes 

    Cada paciente dentro da lista, deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lita contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
    {
        name: "Amanda",
        age: 21,
        weight: 48,
        height: 155
    },
    {
        name: "Sebastião",
        age: 22,
        weight: 103,
        height: 179
    },
    {
        name: "Eduardo",
        age: 22,
        weight: 105,
        height: 183
    },
    {
        name: "Bianca",
        age: 21,
        weight: 54,
        height: 159
    },
]

let patientsResgistro = []

for(let patient of patients) {
    patientsResgistro.push(`O paciente de nome: ${patient.name}, tem ${patient.age} anos, medindo: ${patient.height}cm e pesanso: ${patient.weight}kg. `)
}

alert(patientsResgistro.join(`,

`))