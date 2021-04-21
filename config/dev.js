module.exports = {
  port: process.env.DB_PORT,
  jwtSecret: process.env.DB_JWT_SECRET,
  mongoUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qbeiu.mongodb.net/app?retryWrites=true&w=majority`,
};
