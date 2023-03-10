const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 5005,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mzelhe5.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
