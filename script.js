let carrinho = [
    "Espresso",
    "Cappuccino",
    "Cafe com Leite",
    "Pão de queijo",
    "Bolo de cenoura",
    "Brownie"
]

const ConstCarrinho = document.querySelector(".btn-a");
const ConstCarrinho2 = document.querySelector(".carrinho-amostra");

ConstCarrinho.addEventListener("click", function(){
    ConstCarrinho.textContent = carrinho.join(",");
});




