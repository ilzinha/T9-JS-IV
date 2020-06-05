import { Cliente } from './Cliente';

const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', '01/06/2020', '2000', 'XXX-12', '2020', 'Amarelo', 'RJ-BR', 'Joana Maria');

console.table(cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificaCor())


console.log('-------------------------------')


const cliente2 = new Cliente('Janino Silva', '321.101.231-29', '25/05/2020', '1300', 'XXM-y', '2019', 'Roxo', 'SP-BR', 'Drielly Gomes Almeida');

console.table(cliente2)
console.log(cliente2.descontar())
console.log(cliente2.verificaCor())
console.log('-------------------------------')


const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', '30/05/2020', '4000', 'MDM-PRO', '2020', 'Azul', 'MG-BR', 'Fran Carneiro de Pinha');

console.table(cliente3)
console.log(cliente3.descontar())
console.log(cliente3.verificaCor())