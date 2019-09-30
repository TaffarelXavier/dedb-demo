var nedb = require("nedb");
var db = new nedb({ filename: "banco.db", autoload: true });

/*
console.time("test");
for (let k = 0; k < 10000; k++) {
  db.insert({
    nome: "Pedro Henrique",
    idade: k + 1,
    email: "pedro@gmail.com",
    senha: 123456789
  }, function(err) {
    if (err) return console.log(err); //caso ocorrer algum erro

    console.log("Novo usuário adicionado!");
  });
}
console.timeEnd("test");
*/


console.time('test');
db.find({ idade: 1800 }, function(err, usuarios) {
  if (err) return console.log(err);
  console.log(usuarios);
});
//some code
console.timeEnd('test'); //Prints something like that-> test: 11374.004ms