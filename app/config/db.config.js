module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root2022",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
