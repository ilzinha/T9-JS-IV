window.addEventListener('DOMContentLoaded', () => {
    const users = [{
            nome: "Tathiana Borges",
            imagem: "https://image.freepik.com/free-photo/portrait-beautiful-young-pretty-african-american-girl-sitting-beach-lake-listening-music-her-headphones_146671-10705.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien."
        },
        {
            nome: "Lívia Vieira",
            imagem: "https://image.freepik.com/free-photo/cheerful-casual-young-woman-celebrating_53876-64960.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien. "
        },
        {
            nome: "Jenifer Silva",
            imagem: "https://image.freepik.com/free-photo/young-asian-woman-looking-happy_23-2148212443.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien. "
        }
    ]

    class CardPerfil {
        constructor(nome, imagem, descricao) {
            this.nome = nome;
            this.imagem = imagem;
            this.descricao = descricao;
        }
    }

    users.map((item) => {
        const cardNome = document.createElement('h3');
        const cardImg = document.createElement('img')
        const cardDescrption = document.createElement('p');

        cardNome.innerText = item.nome
        cardImg.setAttribute('src', item.imagem)
        cardDescrption.innerText = item.descricao
    })

})