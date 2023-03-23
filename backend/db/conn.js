const mongoose = require("mongoose");

async function main() {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;

  await mongoose.connect(
    // Alterar a url de conexão para a do cluster criada dentro do MongoDB Atlas.
    `mongodb+srv://${dbUser}:${dbPassword}@clusterExp.example.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Conectou ao banco de dados");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
