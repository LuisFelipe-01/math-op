//Adição
// nUm = Numero Um, nDois = Numero Dois 
let nUm = Number(prompt("insira o primeiro número:"));
let nDois = Number(prompt("insira o segundo número:"));
let adicao = nUm + nDois;

alert(`A soma do ${nUm} e do ${nDois} dará o total de ${adicao.toFixed(2)}`);

//Subtração
//qtd= Quantidade
let qtdUm = Number(prompt("Digite o primeiro número:"));
let qtdDois = Number(prompt("Digite o segundo número:"));
let subtracao = qtdUm - qtdDois;

alert(`A subtração entre o ${qtdUm} e o ${qtdDois} é igual a ${subtracao.toFixed(2)}.`);

//Multiplicação
let numUm = Number(prompt("Digite um número:"));
let numDois = Number(prompt("Digite outro número:"));
let multiplicacao = numUm * numDois;

alert(`O produto entre o ${numUm} e o ${numDois} será  ${multiplicacao}`);

//Divisão
let valorUm = Number(prompt("Insira o primeiro valor:"));
let valorDois = Number(prompt("Insira o segundo valor:"));
let dvisao = valorUm / valorDois;

alert(`O valor da divisão é igual a ${dvisao.toFixed(2)}`);
