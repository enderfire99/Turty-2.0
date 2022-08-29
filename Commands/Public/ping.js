const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("te dice PONG"),
  /**
   *
   * @param {ChatInputCommandInteraction} interactin
   */
  execute(interactin) {
    interactin.reply({ content: "PONG!", ephemeral: false });
  },
};
