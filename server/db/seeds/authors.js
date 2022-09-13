exports.seed = function (knex) {
  return knex('stuff')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('stuff').insert([
        {
          id: 1,
          book: 'Chocolate vs Vanilla Up n Go',
          author: 'Edan Mourie',
        },
        {
          id: 2,
          book: 'JP vs Beans',
          author: ' JP Guiang',
        },
      ])
    })
}
