const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
  name: "ready",
  once: true,

  execute(client) {
    console.log("Turty esta listo");

    client.user.setActivity(
      `Ahora mismo en ${client.guilds.cache.size} servidores`
    );

    loadCommands(client);
  },
};
