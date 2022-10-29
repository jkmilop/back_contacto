import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "libreta", // db name,
  "root", // username
  "cwng", // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);
