export class Cliente {
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
        //precisa de um retorno pra mostrar na tela

        const valorPago = this.valor;

        if (valorPago < 1500) {
            const desconto = valorPago * 0.05;
            const valorTotal = valorPago - desconto;
            return `O valor total é $R${valorPago} e com desconto de 5% fica $R${valorTotal}`;

        }
        if (valorPago >= 1500 && valorPago <= 3000) {
            const desconto = valorPago * 0.07;
            const valorTotal = valorPago - desconto;
            return `O valor total é $R${valorPago} e com desconto de 7% fica $R${valorTotal}`;

        } else {
            const desconto = valorPago * 0.1;
            const valorTotal = valorPago - desconto;
            return `O valor total é $R${valorPago} e com desconto de 10% fica $R${valorTotal}`;


        }

    }
    //Cria um método de verificar a cor
    verificaCor() {
        const celular = this.corCelular.toLowerCase();
        const celularCor = celular !== 'roxo' ? `Cor indisponível` : `Cor disponível`;

        return celularCor;
    }

}

