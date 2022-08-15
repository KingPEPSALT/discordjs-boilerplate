const { ApplicationCommandOptionType, Client, Interaction, EmbedBuilder } = require("discord.js")
module.exports = {
    
    name: "say",
    description: "I will repeat what you say!",
    options: [{
        name: "statement",
        description: "Something to repeat",
        type: ApplicationCommandOptionType.String
    }],
    
    /**
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @returns 
     */
    run: async (client, interaction) => {
        return await interaction.reply(interaction.options.get("statement").value);
    }
}