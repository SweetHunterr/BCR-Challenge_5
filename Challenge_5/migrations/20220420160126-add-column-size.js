'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'tbl_cars', // Nama Tabel Tujuan Yang Ingin Ditambahkan Kolom 
      'id_size', //Nama Kolom Yang Ingin Ditambahkan
      {
        type : Sequelize.INTEGER,
        references : {
          model : 'tbl_sizes',
          key : 'id'
        },
        allowNull : false,
        foreignKey : true
      },
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
