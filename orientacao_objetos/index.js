//Sintaxe
class Cliente {
    //é um método que recebe os parâmetros do que eu vou receber de valor
    constructor(nome, email, cpf){
        //o this é uma refeência ao objeto.. a class Cliente
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }
}

const cliente1 = new Cliente('Amanda', 'amanda@email.com.br', '123.456.789-98');

console.table(cliente1);

// class Celular {
//     constructor(nome, modelo, valor) {
//         this.nome = nome;
//         this.modelo = modelo;
//         this.valor = valor;
//     }
// }