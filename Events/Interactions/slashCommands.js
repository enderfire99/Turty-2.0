const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command)
      return interaction.reply({
        content: "Este commando es viejo",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== client.config.developerID)
      return interaction.reply({
        content: "Este commando es solo para el desarollador",
        ephemeral: true,
      });

    command.execute(interaction, client);
  },
};
