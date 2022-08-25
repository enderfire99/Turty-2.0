const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.config = require("./config.json");

client
  .login(client.config.token)
  .then(() => {
    console.log(`client looged in as ${client.user.username}`);
    client.user.setActivity(
      `Ahora mismo en ${client.guilds.cache.size} servidores`
    );
  })
  .catch((err) => {
    console.log(err);
  });
