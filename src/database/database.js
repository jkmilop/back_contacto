import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "libreta", // db name,
  "", // username
  "", // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);
