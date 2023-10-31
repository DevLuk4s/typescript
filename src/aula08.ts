let dados = {
  nome: "Lucas",
  idade: 19,
  status: "A",
  ola: () => {
    console.log("Oi");
  },
  info: (p: string) => {
    console.log(p);
  },
};

console.log(dados);
console.log(typeof dados);
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
