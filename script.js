
let refrigerante = prompt(`Valor do refrigerante`)
let quantidadeRefrigerante = prompt(`Quantia`)
let Macarrão     = prompt(`Valor do Macarrão`)
let quantidadeMacarrão = prompt(`Quantia`)
let Ervilha      = prompt(`Valor do Ervilha`)
let quantidadeErvilha = prompt(`Quantia`)
let Arroz        = prompt(`Valor do Arroz`)
let quantidadeArroz = prompt(`Quantia`)
let Feijão       = prompt(`Valor do Feijão`)
let quantidadeFeijão = prompt(`Quantia`)
let Vinho	     = prompt(`Valor do Vinho`)
let quantidadeVinho = prompt(`Quantia`)
let vinhoTotal   = (Vinho*quantidadeVinho)
let total = (refrigerante*quantidadeRefrigerante) + (Macarrão*quantidadeMacarrão) + (Ervilha*quantidadeErvilha) + (Arroz*quantidadeArroz) + (Vinho*quantidadeVinho) + (Feijão*quantidadeFeijão)
let metade = total/2
let voce = metade
let amigo = metade
 if (total % 2 == 0){

    voce = (metade - vinhoTotal)
    amigo = (metade + vinhoTotal)

 }else{}
alert(`Valor total ser pago por você é: ${voce}`)
alert(`Valor total ser pago pelo seu amigo é: ${amigo}`)

