exports.up = function(knex) {
    return knex.schema.createTable('inventory', table => {
      table.increments('id');
      table.integer('user_id').notNullable();
      table.string('item_name');
      table.string('description');
      table.integer('quantity');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory');
  };