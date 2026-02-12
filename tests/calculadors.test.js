// 1) Forma mais "Extensa"
// test("nome do teste", callbackFunction);

// function callbackFunction() {
//   console.log("Executando o teste");
// }

// 2) Forma mais "Compacta" usando arrow function
// test("nome do teste:", () => {
//   console.log("Executando o teste");
// });

// test("testando outra condicao do sistema", () => {
//   console.log("Executando outro teste");
// });

// // Aqui está o nosso teste de teste!
// test("espero que 1 seja 1", () => {
//   expect(1).toBe(1);
// });

// const calculadora = require("../Models/calculadora.js");

test("Somar 2+2 devia ser 4", () => {
  const result = calculadora.somar(5, 100);
  expect(result).toBe(105);
});
