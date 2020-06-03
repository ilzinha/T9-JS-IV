//Dado o objeto, analise a forma que foi declarada. 
//Em seguida, ajuste o objeto produtos da forma correta de se declarar.
let produtos = {

  videos: {
    comedia: ["comedia1","comedia2"],
    romance: ["romance1", "romance2"]
  },
  revistas: [
    moda = ["lalala", "lililili"],
    saude = ["lalala", "lililili"],
  ],

  jogos :{
    rpg: ["rpg1", "rpg2", "rpg3"],
    acao: ["acao1", "God of War"]
  }

}

console.log(produtos)

//criando um objeto de forma nativa:
const minhaInfos = new Object();

//Adicionando objetos
minhaInfos.nome = 'Ilza';
minhaInfos.sobrenome = 'Medeiros';
minhaInfos.idade = 32;
minhaInfos.filmes =  ['Harry Potter', 'Star Wars', 'Pride and Prejudice']

// Seria a mesma coisa se eu declarasse assim:
// const minhaInfos = {
//   nome: 'Ilza',
//   sobrenome: 'Medeiros',
//   idade: 32,
//   filmes: ['Harry Potter', 'Star Wars', 'Pride and Prejudice']
// }

console.log(minhaInfos)
