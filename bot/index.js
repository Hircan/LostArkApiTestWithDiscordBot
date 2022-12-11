const { Client, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
// config.json에 적은 token값 가져오기
const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = require('../config.json')

// 클라이언트 객체 생성
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 슬래시 커멘드 목록 정의
const commands = [
    {
        name: "ping",
        description: "ping에 대한 반응입니다.",
    },
];

// 처음실행될때 한번만 실행 됨
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// 일반이벤트 매핑 시 ON을 사용
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // ping입력 시 
    if (interaction.commandName === "ping") {
        await interaction.reply("pong"); // 답장
    }
});

// 토큰값 가지고 클라이언트 객체 로그인
client.login(DISCORD_TOKEN);