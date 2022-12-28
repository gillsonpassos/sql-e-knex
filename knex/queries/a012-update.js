/*
-- Update - Atualiza registros
update users set 
first_name = 'Luiz',
last_name = 'Miranda'
where id between 119 and 121;

select * from users where id between 119 and 121;
*/
const knex = require("../../knex/config/database");
const select = knex("users").where("id", "=", 29);
const update = knex("users")
  .update({
    first_name: "Hipolito",
    last_name: "Appolo",
  })
  .where("id", "=", 29);

console.log(select.toString());
console.log(update.toString());

//select
//.then((data) => {
//   console.log(data);
// })
// .catch((e) => {
//   console.log(e.message);
// })
// .finally(() => {
//  knex.destroy();
//});
