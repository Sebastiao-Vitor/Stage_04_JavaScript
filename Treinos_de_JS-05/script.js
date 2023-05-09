/* 
    Capture 10 items para compor a lista de um supermercado.

    Após capturar os 10 items, imprima-os, separando por vírgula.

*/

/*  Feito esclusivamente por mim mesmo kkkk

        alert("Pegaremos 10 items para formar uma lista de compras")

        let lisaDoSupermercado = [
          prompt('item 01'), 
          prompt('item 02'),
          prompt('item 03'),
          prompt('item 04'),
          prompt('item 05'),
          prompt('item 06'),
          prompt('item 07'),
          prompt('item 08'),
          prompt('item 09'),
          prompt('item 10')
        ]

        console.log(lisaDoSupermercado.join(", "))
        alert(lisaDoSupermercado.join(', '))
*/

// Feito pelo Maykão

// let items = [];

// for(let item = 0; item < 10; item++) {
//   let itemName = prompt("Digite o item " + (item + 1))

//   items [item] = itemName
// }

// alert(items.join(', '))


let RoupasNova = []

for(let GuardaRoupa = 0; GuardaRoupa < 4; GuardaRoupa++) {
  let Roupas = prompt("Peças de roupas " + (GuardaRoupa + 1))

  RoupasNova [GuardaRoupa] = Roupas
}

alert(RoupasNova.join(`, `))