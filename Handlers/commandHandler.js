async function loadCommands(client) {
  const { loadFiles } = require("../Functions/fileLoader");

  const ascii = require("ascii-table");

  const table = new ascii().setHeading("Commands", "Status");

  await client.commands.clear();

  let commandArray = [];

  const Files = await loadFiles("Commands");

  Files.forEach((file) => {
    const command = require(file);

    client.commands.set(command.data.name, command);
    commandArray.push(command.data.toJSON());

    table.addRow(command.data.name, "✔️");
  });

  client.application.commands.set(commandArray);

  return console.log(table.toString(), "\n COMANDOS CARGADOS");
}

module.exports = { loadCommands };
