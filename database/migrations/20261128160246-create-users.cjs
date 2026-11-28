
"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id_user: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            nama: {
                type: Sequelize.STRING(100),
                allowNull: false
            },

            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },

            password_hash: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable("users");
    }
};
