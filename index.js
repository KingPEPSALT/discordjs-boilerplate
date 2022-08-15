const { Client, GatewayIntentBits, Routes } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { token, clientId, testGuildId } = require("./config.json");

const chalk = require("chalk");

const fs = require('fs');

const client = new Client({ intents: [
    // GatewayIntentBits should go here; 
    // visit https://discordjs.guide/popular-topics/intents.html for help
]});

client.on('ready', ()=>{
    console.log(chalk.green(`${(client.user.tag, "MAIN")}`) + " is ready.");
});

fs.readdirSync("./events").forEach(file => {
    if(!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    client.on(event.name, event.handle.bind(null, client));
    console.log(chalk.green(`Event ${event.name} loaded`));
    delete require.cache[require.resolve(`./events/${file}`)]; 
})

client.commands = [];
fs.readdirSync("./commands").forEach(file => {
    if(!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    client.commands.push({
        "name": props.name,
        "description": props.description,
        "options": props.options
    });
    console.log(chalk.green(`Command ${props.name} loaded`));
});

client.calltimeCooldown = {};

const rest = new REST({version: "10"}).setToken(token);
if(process.argv[2] === "debug")
    (process.argv[2] === "debug" 
        ? rest.put(Routes.applicationGuildCommands(clientId, testGuildId), {body: client.commands})
        : rest.put(Routes.applicationCommands(clientId), {body: client.commands}))
            .then(() => console.log(chalk.green("Registered application commands")))
            .catch(e => console.log(chalk.red(e)));

client.login(token);