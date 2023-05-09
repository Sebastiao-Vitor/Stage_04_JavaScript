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
        name: "Vitor",
        age: 22,
        weight: 100,
        height: 178
    },
    {
        name: "Sebastião",
        age: 21,
        weight: 95,
        height: 150
    },
    {
        name: "Santos",
        age: 32,
        weight: 150,
        height: 220
    },
    {
        name: "Abener",
        age: 16,
        weight: 65,
        height: 156
    },
]

let patientsResgistro = []

for(let patient of patients) {
    patientsResgistro.push(`O paciente de nome: ${patient.name}, tem ${patient.age} anos, medindo: ${patient.height}cm e pesanso: ${patient.weight}kg. `)
}

alert(patientsResgistro.join(`,

`))