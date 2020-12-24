// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2

function generarId() {
  let first = Math.random().toString(36).substr(-4).toUpperCase();
  let medium = Math.random().toString(36).substr(-4).toUpperCase();
  let last = Math.random().toString(36).substr(-4).toUpperCase();

  return first + "-" + medium + "-" + last;
}
let id = generarId();

console.log(id);
