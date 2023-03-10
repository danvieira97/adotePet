const mongoose = require("mongoose");

async function main() {
  // const dbUser = process.env.DB_USER;
  // const dbPassword = process.env.DB_PASS;

  await mongoose.connect(
    `mongodb+srv://daaaands:K5MvuE0JRNYhJuIL@cluster0.mzelhe5.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Conectou ao banco de dados");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
