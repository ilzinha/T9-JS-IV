class Conta {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente {
    constructor(agencia) {
        this.agencia = agencia;
        this.saldo = 0;
    }

    l
    depositar(valor) {
        return  this.saldo += valor;

    }

    sacar(valor) {
        if ( this.saldo >= valor) {
            return  this.saldo -= valor;
        } else {
            return`Seu saldo é menos que o valor do saque`
        }
    }
}


const conta1 = new Conta('Mariana', '123.456.789-98')
const conta2 = new Conta('Carla', '987.654.321-12')

const contaCorrente1 = new ContaCorrente('060')
const contaCorrente2 = new ContaCorrente('587')

