console.log("Hello World!")
console.log("Meu primeiro programa da ITuring")

// isso é o comentário de uma linha

/* isso é o comentário
de várias linhas
acabando aqui */

//Declaração de variáveis
let coisa
let coisa_2, coisa_3

//Atribuição de valor à variável
coisa = 'copo'
coisa_2 = 12
coisa_3 = true
console.log(coisa,coisa_2,coisa_3)

let nome = "Fábio Henrique"
let sobrenome = "Bueno Laroca"
let idade = 31
let altura = 1.74
let logada = true
console.log(nome,sobrenome,idade,altura,logada)
console.log(typeof (nome))
console.log(typeof (sobrenome))
console.log(typeof (idade))
console.log(typeof (altura))
console.log(typeof (logada))

//Array
let mala = ["bússola", "mapa", "corda", "chocolate", "lanterna"]
console.log(mala, typeof(mala))
console.log(mala[0])
console.log(mala[1])
console.log(mala[3])

//Objeto
let mapa = {nome : "Fábio", idade : 31}
console.log(mapa, typeof(mapa))

let numero = 13
console.log(numero, typeof(numero))
numero = 'treze'
console.log(numero, typeof(numero))

let nota1 = 8
let nota2 = 10

let media = (nota1 + nota2) /2
console.log('media', media)

let resultado = 10 - 3
console.log("resultado", resultado)

let num1 = 1
let num2 = "2"
let resultadomaluco = num1 + num2
console.log("resultadomaluco", resultadomaluco)

let resultadocorreto = num1 - num2
console.log('resultadocorreto', resultadocorreto)

let ab = "laroca"
let ba = "lar"
let resultadoescrita = ab - ba
console.log("resultadoescrita", resultadoescrita)

//condicionais
if (idade >= 17){
    //se for verdade
    console.log("Pode jogar")
} else{
    //se não for verdade
    console.log("Não pode jogar")
}

console.log(nota1 > nota2)

let senha = "123456"

if (senha = '123456'){
    //se for verdade
    console.log("Seja bem vindo")
} else{
    //se não for verdade
    console.log("Senha incorreta")
}