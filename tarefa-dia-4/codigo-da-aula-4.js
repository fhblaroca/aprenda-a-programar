let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
//executa se for verdadeiro
let preço = produtoA.valor
//20% = 0.2
let imposto = 0.2

let valorComImposto = preço + preço * imposto

console.log("O produto é internacional;", 'Valor com imposto:', valorComImposto)

} else { 
    //executa se for falso
    console.log("O produto é nacional;", "Valor sem imposto:",produtoA.valor + produtoA.valor * 0.12)
}

if (produtoB.internacional == true) 
    {console.log("O produto é internacional;", "Valor com imposto:", produtoB.valor + produtoB.valor * 0.2)}
    else (console.log("O produto é nacional;", "Valor sem imposto:", produtoB.valor + produtoB.valor * 0.12))

if (produtoC.internacional == true) 
    {console.log("O produto é internacional;", "Valor com imposto:", produtoC.valor + produtoC.valor * 0.2)}
    else (console.log("O produto é nacional;", "Valor sem imposto:", produtoC.valor + produtoC.valor * 0.12))

//Função começo

function imprimirNome () {
    //o código que vem aqui dentro é executado quando eu chamo a função.
    console.log('O Thiago é legal.')
}

console.log("A Jô ensina muito bem.")
imprimirNome ()

function somar (x, y) {
    console.log(x + y)
}

somar (20, 10)

function Impostos (produto) {
if (produto.internacional == true) {console.log("O produto", produto.nome, "é internacional;", "Valor com imposto:", produto.valor + produto.valor * 0.2)}
    else {(console.log("O produto", produto.nome, "é nacional;", "Valor sem imposto:", produto.valor + produto.valor * 0.12))
}}

Impostos (produtoA)
Impostos (produtoB)
Impostos (produtoC)

