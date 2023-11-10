'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tbl_cars', [
          {
            name: "Avanza",
            harga: 233000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-11/image1.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Voxy",
            harga: 560000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2022-02/New%20Resilient%20Front%20Bumper%20and%20Intriguing%20Grille%20Design.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Calya",
            harga: 151000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-08/calya%20side%20view.jpeg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Sienta",
            harga: 312000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-08/sienta%20yellow.jpeg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Venturer",
            harga: 360000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-08/TYT%20665B%20-%20Venturer%20DPN%2Bnameplate_0.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Corolla Altis",
            harga: 471000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2022-02/Corolla%20Altis%20Hybrid%20Front%20View%20%281%29_0.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Rush GR Sport",
            harga: 290000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-09/dashing-dark-chrome-grille.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Yaris GR Sport",
            harga: 300000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-08/yaris%20gr.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Fortuner GR Sport",
            harga: 575000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2022-01/Dauntless%20New%20Front%20Bumper%20Spoiler%20%26%20Grille_%20%281%29.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          },
          {
            name: "Raize GR Sport",
            harga: 230000,
            url_image: "https://www.toyota.astra.co.id/sites/default/files/2021-08/1.2-G-Type%20%281%29.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            id_size: 2
          }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
