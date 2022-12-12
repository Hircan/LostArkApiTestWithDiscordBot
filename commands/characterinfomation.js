const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("characterinfomation").setDescription("LOSTARK OPEN API를 이용해 캐릭터정보를 가져옵니다."),
    async execute(interaction) {
        const modal = new ModalBuilder().setCustomId("myModal").setTitle("My Modal");

        const characterNameInput = new TextInputBuilder()
            .setCustomId("characterNameInput")
            // The label is the prompt the user sees for this input
            .setLabel("캐릭터 명을 입력해주세요")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);

        const firstActionRow = new ActionRowBuilder().addComponents(characterNameInput);

        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);

        return interaction.reply("캐릭터정보");
    },
};
