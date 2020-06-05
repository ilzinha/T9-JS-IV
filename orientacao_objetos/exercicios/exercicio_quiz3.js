class Usuario {
    constructor(nome, sobrenome, email, confirmacaoEmail) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.confirmacaoEmail = confirmacaoEmail;
    }

    validacaoEmail() {
        const email = this.email.toLowerCase();
        const emailConfirmado = this.confirmacaoEmail.toLowerCase();
        const emailValido = email === emailConfirmado ? `Os campos de email são iguais` : `O campos de email são diferentes`

        return emailValido;
    }

    saudacoes() {
        return`Olá ${this.nome} ${this.sobrenome}, seja bem vinda a plataforma de estudos da Reprograma!`
    }
}

const user1 = new Usuario('Amanda', 'Sobral', 'amanda@gmail.com', 'amanda@gmail.com' );
console.table(user1)
console.log(user1.validacaoEmail())
console.log(user1.saudacoes())

const user2 = new Usuario('Aline', 'Cabral', 'Aline@gmail.com', 'amanda@gmail');
console.table(user2)
console.log(user2.validacaoEmail())
console.log(user2.saudacoes())
