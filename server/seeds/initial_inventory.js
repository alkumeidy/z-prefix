/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inventory').del()
  await knex('inventory').insert([
    {
      "user_id": 1,
      "item_name": "Red T-shirt",
      "description": "This is a red T-shirt made from high-quality cotton. It has a round neck and short sleeves. Perfect for casual wear.",
      "quantity": 5
    },
    {
      "user_id": 2,
      "item_name": "Blue Jeans",
      "description": "These blue jeans are made from stretch denim and are designed to fit comfortably. They have a button and zip closure and five pockets.",
      "quantity": 3
    },
    {
      "user_id": 3,
      "item_name": "Black Sneakers",
      "description": "These black sneakers are made from synthetic leather and have a rubber sole. They have a lace-up closure and are suitable for both casual and athletic wear.",
      "quantity": 7
    },
    {
      "user_id": 4,
      "item_name": "Gray Hoodie",
      "description": "This gray hoodie is made from a soft and warm fabric. It has a drawstring hood and a kangaroo pocket in the front. Perfect for chilly weather.",
      "quantity": 2
    },
    {
      "user_id": 5,
      "item_name": "Green Backpack",
      "description": "This green backpack is made from durable nylon and has multiple compartments for storage. It also has padded straps for comfort.",
      "quantity": 1
    },
    {
      "user_id": 1,
      "item_name": "White Polo Shirt",
      "description": "This white polo shirt is made from a breathable fabric and has a classic design. It has a button-up collar and short sleeves.",
      "quantity": 4
    },
    {
      "user_id": 2,
      "item_name": "Black Leather Jacket",
      "description": "This black leather jacket is made from genuine leather and has a zip-up front. It has a slim fit design and is perfect for any occasion.",
      "quantity": 1
    },
    {
      "user_id": 3,
      "item_name": "Navy Blue Sweater",
      "description": "This navy blue sweater is made from a soft and warm fabric. It has a crew neck and long sleeves. Perfect for layering.",
      "quantity": 3
    },
    {
      "user_id": 4,
      "item_name": "Black Dress Shoes",
      "description": "These black dress shoes are made from genuine leather and have a sleek design. They have a lace-up closure and are perfect for formal occasions.",
      "quantity": 2
    },
    {
      "user_id": 5,
      "item_name": "Pink Scarf",
      "description": "This pink scarf is made from a soft and lightweight fabric. It has a solid color design and is perfect for adding a pop of color to any outfit.",
      "quantity": 6
    },
    {
      "user_id": 1,
      "item_name": "Gray Sweatpants",
      "description": "These gray sweatpants are made from a comfortable and stretchy fabric. They have an elastic waistband and ankle cuffs. Perfect for lounging.",
      "quantity": 2
    }
  ]);
};
