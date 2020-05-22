
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments(); //Cria chava primaria automaticamente
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable(); //Forengy key 
        //Criar foreng key
        table.foreign('ong_id').references('id').inTable('ongs');


    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
//Para executar o down : npx knex migrate:rollback