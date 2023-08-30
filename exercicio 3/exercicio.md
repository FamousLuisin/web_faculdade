Funções Arrow em JavaScript

Descrição:

Funções Arrow, também conhecidas como Arrow Functions, são uma forma concisa de escrever funções em JavaScript. Elas oferecem uma sintaxe mais compacta e clara para definir funções anônimas. Uma característica importante das Arrow Functions é que elas não possuem seu próprio valor this, o que significa que o valor de this dentro de uma Arrow Function é herdado do contexto circundante.

EXEMPLOS:

// Sintaxe tradicional de função
function soma(a, b) {
  return a + b;
}

// Função Arrow equivalente
const somaArrow = (a, b) => a + b;

console.log(soma(3, 5));         // Saída: 8
console.log(somaArrow(3, 5));    // Saída: 8

// Usando map com função Arrow para elevar ao quadrado
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2);

console.log(squared); // Saída: [1, 4, 9, 16, 25]

Promises em JavaScript

Descrição:

As Promises são um recurso em JavaScript usado para trabalhar com operações assíncronas de forma mais organizada e legível. Elas representam um valor futuro que pode ser resolvido com um resultado ou rejeitado com um motivo de falha. As Promises ajudam a evitar o "callback hell" (aninhamento excessivo de callbacks) e simplificam a lógica de lidar com operações assíncronas.

EXEMPLOS:

// Exemplo de criação de uma Promise simples
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Número menor que 0.5");
    }
  }, 1000);
});

// Usando a Promise
myPromise
  .then(result => {
    console.log("Sucesso:", result);
  })
  .catch(error => {
    console.error("Erro:", error);
  });

function asyncOperation(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  });
}

asyncOperation(5)
  .then(result => asyncOperation(result))
  .then(result => asyncOperation(result))
  .then(finalResult => {
    console.log("Resultado final:", finalResult); // Saída: 20
  })
  .catch(error => {
    console.error("Erro:", error);
  });
