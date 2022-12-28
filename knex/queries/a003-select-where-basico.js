/*
select * from users
where 
created_at < '2020-12-15 23:33:41'
and first_name = 'Luiz' 
and password_hash = 'a_hash';
*/
const knex = require("../../knex/config/database");
const select = knex("users")
  .select("id", "first_name")
  .where("id", "=", 4)
  .andWhere("first_name", "=", "Joana")
  .orWhere("id", "=", 3);

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERRO:", e.message);
  })
  .finally(() => {
    knex.destroy();
  });
