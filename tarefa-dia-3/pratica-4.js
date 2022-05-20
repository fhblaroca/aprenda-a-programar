let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

function Impostos (produto) {
    if (produto.internacional == true) {console.log("O produto", produto.nome, "é internacional;", "Valor com imposto:", produto.valor + produto.valor * 0.2)}
        else {(console.log("O produto", produto.nome, "é nacional;", "Valor sem imposto:", produto.valor + produto.valor * 0.12))
    }}
    
    Impostos (produtoA)
    Impostos (produtoB)
    Impostos (produtoC)
    