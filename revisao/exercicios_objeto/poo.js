// //Dessa forma estamos criando um objeto de forma literal
// const cliente1 = {
//     nome: 'Maria',
//     idade: 32,
//     profissao: ['Desenvolvedora', 'Professora']
// }

//Podemos criar classes que a gente utiliza as propriedades para adicionar novos clientes sem precisar diretamente criar um objeto.
//ex:
class Clientes {
    nome;
    idade;
    profissao;
}

//para adicionar um novo objeto cliente, fazemos assim:
const cliente1 = new Clientes('Maria', 32, ['Desenvolvedora', 'Professora']);
const cliente2 = new Clientes('Ana', 58, ['Contadora', 'Escritora'])

//só com o código acima os campos do objeto fica undefined, por isso que se usa os construtores, para passar os parâmetros que vão ser recebidos
class Clientes {
    constructor(nome, idade, profissao) {
        //usa o this para referenciar ao construtor
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}


//sem o construtor, ele sempre retorna undefined pq eu não passei os parâmetros que deve receber

class Signos {
    //o construtor define os parâmatros que devem ser recebido ao criar um novo objeto, como no exemplo de pessoa 1
    constructor(nome, elemento, regente) {
        this.nome = nome;
        this.elemento = elemento;
        this.regente = regente;
    }
}

const pessoa1 = new Signos('Touro', 'Terra', 'Marte');
const pessoa2 = new Signos('capricornio', 'Agua', 'Saturno' )