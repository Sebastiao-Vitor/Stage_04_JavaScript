# Revisão do conteúdo do Stage 04


# Muita lógica e algoritmos
  sintaxe e boas práticas
    JavaScript
      // Ponto e vírgula é facultativo
      const myConst2 = "constante2"

      // escrever com calmelCase
      const myConst2 = "constante2"

      // procurar escrever código em inglês
      // para treinar, aumentar as oportunidade futuras
      function doSomething(myArgument) {}

  Variáveis
    JavaScript
      const
      let
      var

  Tipos de dados
    JavaScript
      String
      Number
      Boolean
      null
      undefined

  Estrutura de dados
    JavaScript
      // Array
        const myArray = [1, 2, "a", "b", true]

      // Object
        const myObject = { property: "value" }

  Funções
    JavaScript
      // 1. Criação e tipos de funções
      // named
        function myFunction() {} 

      // Anonymous 
        const myFunction = function() {}

      // Arrow 
        const myFunction = () => {}

      // arguments & return
        function sum(a, b) {
          return a + b
        }

      const sum = (a, b) => a + b

      // 2. Excecução
      myFunction() 
      sum(1, 2) 

  Fluxo de aplicação
    JavaScript
      // if, else if, else
        const isRainning = true
        if (isRainning ) {
          alert("Está chovendo, pega o guarda chuvas 🌧️")
        } else {
          alert("Dia limpo🌥️")
        }

      // switch
        const water = "com gás"
        switch(water) {
          case "com gás":
            alert("Essa água é com gás")
            break
          case "sem gás"
            alert("Essa água é sem gás")
            break
          case "da fonte":
            alert("Água fresquinha da fonte")
            break
          default:
            alert("cadê minha água?")
        }

  Estrutura de repetição
    JavaScript
      // while
        let play = true
        while(play) {
          // fazer algo até o play ser falso
          // criar uma lógica para o play se tornar falso
          // se não, loop eterno
        }

      // for (tradicional)
        let text = "abc"
        for (let i = 0; i < text.length; i++) {
          alert(tect[i])
        }

      // for..of
        for (let char of text) {
          alert(char)
        }

  Operadores 
    JavaScript
      () // group operator - agrupamento

      // Matemáticos
        * // multiplicação
        **  // exponenciação
        /  // divisão
        %  // resto da divisão
        +  // soma
        -  // subtração

      // Lógicos
        && // E lógico
        || // OU lófico
        ! // Não lógico

      // Comparação - relacional
        > // maior
        < // menor
        >= // maior igual
        <= // menor igual
        == // ugualdade
        === // ugual no valor e do mesmo tipo (estritamente igual) 
        != // desigualdade
        !== // diferente do valor ou do tipo (estritamente diferente)

      // Atribuição
        = // atribuição de valor
        *= // multiplicação e atribuição de valor
        /= // divisão e atribuição de valor
        += // soma e atribui valor
        -= // diminui e atribuir

      // Outros operadores/expressões
        typeof // tipo do dado
        ++ // incremento
        -- // decremento
        {} // objeto vazio ou bloco de código
        [] // array vazio
        ,  // separa elementos de um array, objeto ou criação de multiplas variáveis