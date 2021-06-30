// QUAL O RESULTADO DA SEGUINTE EXPRESSÃO?
var total = 10 + 5 * 2 / 2 + 20;

// CRIE DUAS EXPRESSÕES QUE RETORNEM NaN
var teste1 = 'teste' / 2;
console.log(teste1); 
// SOMAR A STRING '200' COM O NÚMERO 50 E RETORNAR 250
var soma = '200' + 50; // não vai dar certo, não pra concatenar texto com inteiro ( desta forma o valor do inteiro se torna string na soma dos dois itens) 
var soma1 = +'200' + 50; // usando o operador unario, (+) realizaremos a conversão da string para inteiro 

// INCREMENTE O NÚMERO 5 E RETORNE O SEU VALOR INCREMENTADO 
var x = 5;
++x;
console.log(x);

// COMO DIVIDIR O PESO POR 2
var numero = '80';
var unidade = 'kg'
var peso = numero + unidade; 
var pesoPorDois = peso / 2;