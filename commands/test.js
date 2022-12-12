const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("test").setDescription("ping 테스트입니다."),
    async execute(interaction) {
        console.log("핑찍혔습니다.");
        return interaction.reply("test!");
    },
};
