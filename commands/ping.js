const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("ping 테스트입니다."),
    async execute(interaction) {
        console.log("핑찍혔습니다.");
        return interaction.reply("Pong!");
    },
};
