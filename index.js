const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");
const { connect } = require("mongoose");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

connect(client.config.MongoURL)
  .then(() => console.log("Truty esta conectado a MONGO"))
  .catch((err) => console.log(err));

loadEvents(client);

client.login(client.config.token);
