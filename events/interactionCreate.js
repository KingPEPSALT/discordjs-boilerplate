const { Client, Interaction } = require("discord.js");
const fs = require("fs");

module.exports = {

    name: "interactionCreate",

    /**
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @returns 
     */
    handle: async (client, interaction) => {

        if (!interaction.isChatInputCommand()) return;
        fs.readdirSync("./commands").forEach(async (file) => {
            const command = require(`../commands/${file}`);
            if(command.name.toLowerCase() !== interaction.commandName.toLowerCase()) return;
            await command.run(client, interaction);
        });

    }

}