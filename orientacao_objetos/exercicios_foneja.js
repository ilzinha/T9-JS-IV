class Clientes {
    constructor(nome, cpf, dataCompra, valor, modeloCelular, anoCelular, corCelular, loja, nomeAtendente) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataCompra = dataCompra
        this.valor = valor;
        this.modeloCelular = modeloCelular;
        this.anoCelular = anoCelular;
        this.corCelular = corCelular;
        this.loja = loja;
        this.nomeAtendente = nomeAtendente;
    }
    
    descontar() {

        const desconto = this.valor < 1500 ? `Terá um desconto de 10%` : `Não terá desconto`;

        //precisa de um retorno pra mostrar na tela
        return desconto;

        //Bloco com if/else
        // if(this.valor < 1500){
        //     return `Terá um desconto de 10%`
        // } else {
        //     return `Não terá desconto`
        // }
    }

    //Cria um método de verificar a cor
    verificaCor() {
        const celular = this.corCelular.toLowerCase();
        const celularCor = celular !== 'roxo' ? `Cor indisponível` : `Cor disponível`;

        return celularCor;

    }
}


const cliente1 = new Clientes('Dora Barreto', '223.001.221-29', '01/06/2020', '2000', 'XXX-12', '2020', 'Amarelo', 'RJ-BR', 'Joana Maria');

console.table(cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificaCor())


console.log('-------------------------------')


const cliente2 = new Clientes('Janino Silva', '321.101.231-29', '25/05/2020', '1300', 'XXM-y', '2019', 'Roxo', 'SP-BR', 'Drielly Gomes Almeida');

console.table(cliente2)
console.log(cliente2.descontar())
console.log(cliente2.verificaCor())
console.log('-------------------------------')


const cliente3 = new Clientes('Raquel Borges Figueredo', '910.311.425-01', '30/05/2020', '4000', 'MDM-PRO', '2020', 'Azul', 'MG-BR', 'Fran Carneiro de Pinha');

console.table(cliente3)
console.log(cliente3.descontar())
console.log(cliente3.verificaCor())