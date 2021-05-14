const {DB_PORT, DB_JWT_SECRET, DB_USER, DB_PASS} = process.env;

module.exports = {
  port: DB_PORT,
  jwtSecret: DB_JWT_SECRET,
  mongoUri: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qbeiu.mongodb.net/app?retryWrites=true&w=majority`,
};
