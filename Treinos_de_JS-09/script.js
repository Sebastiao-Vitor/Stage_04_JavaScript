/* 
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do pacinete e Y é o IMC desse paciente

    Crie uma função para fazer o calculo do IMC
*/

// const patients = [
//     {
//         name: "Luiz",
//         age: 20,
//         weight: 86,
//         height: 176
//     },
//     {
//         name: "Luiza",
//         age: 18,
//         weight: 64,
//         height: 157
//     },
//     {
//         name: "Lizz",
//         age: 10,
//         weight: 36,
//         height: 110
//     },
// ]

// function IMC(weight, height) {
//     return (weight / ((height / 100) ** 2)).toFixed(2)
// }

// function printPatientIMC(patient) {
//     return `
//         Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
//     `
// }

// for (let patient of patients) {
//     let IMCmessage = printPatientIMC(patient)
//     alert(IMCmessage)
// }


// Minha resolução 

const gymClients = [
    {
        name: "Amanda Medeiros",
        age: 21,
        weight: 48,
        height: 155
    },
    {
        name: "Sebastião Vitor",
        age: 22,
        weight: 101,
        height: 178
    },
    {
        name: "Eduardo Santos",
        age: 22,
        weight: 106,
        height: 181
    },
]

function IMC(weight, height) {
    return ( weight / ((height / 100) ** 2)).toFixed(1)
}  

function IMCclient(client) {
    return `
        Cliente de nome: ${client.name}, possui o IMC de: ${IMC(client.weight, client.height)}
    `
}

for(let client of gymClients) {
    let myMessage = IMCclient(client)
    alert(myMessage)
}