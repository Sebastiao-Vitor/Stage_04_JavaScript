/* 
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada

        1.  Cadastrar um item na lista
        2.  Mostrar itens cadastrados
        3.  Sair do programa.

___
    O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários: 

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem: "Não ixitem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/


            //  Resolução do Maik

/* 
Dados de entrada de usuário
1. número desejado
2. item da lista

Variáveis
1. opção digitada
2. lista de itens

*/

// let option 
// let items = []

// while(option != 3) {

//     option = Number(prompt(`
//         Olá usuário! Digite o número da opção desejada:

//         1. Cadastrar um item na lista.
//         2. Mostrar itens cadastrados.
//         3. Sair do programa
//     `))

//     if(option == 1) {
//         let item = prompt("Digite o nome do item:")
//         items.push(item)
//     } 
//     else if(option == 2) {
//         if(items.length == 0) {
//             alert("Não existem itens cadastrados")
//         } else {
//             alert(items.join(', '))
//         }
//     }
//     else if(option != 3) {
//        alert(`!Somente números são aceitos!`)
//     } 
//     else {
//         alert("Tchau e muito obg!")
//     }

//     console.log(option, items)
// }

//  Modo de resolver usanso o SWITCH

let option 
let items = []

while(option != 3) {

    option = Number(prompt(`
        Olá usuário! Digite o número da opção desejada:

        1. Cadastrar um item na lista.
        2. Mostrar itens cadastrados.
        3. Sair do programa
    `))

    switch(option) {
        case 1:
            let item = prompt("Digite o nome do item:")
            items.push(item)
            break
        case 2:
            if(items.length == 0) {
                alert("Não existem itens cadastrados")
            } else {
                alert(items.join(', '))
            }
            break
        case 3:
            alert("Tchau e muito obg!")
            break
        default:
        alert("!Opção invalida!")
    }
}