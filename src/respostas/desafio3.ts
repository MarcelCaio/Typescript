let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let saldoT = 0
campoSaldo.innerHTML = "0"

function somarAoSaldo(soma: number) {
    saldoT += soma;
    campoSaldo.innerHTML = saldoT.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    saldoT = 0;
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */