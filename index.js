const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = require("./config.json");

// 클라이언트 객체 생성
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands"); // 디렉터리명이 commands 경로를 찾아 넣는 듯?
const commandsFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js")); //constmfile 경로의 .js파일만 추가

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    console.log(filePath);
    console.log(command);
    if ("data" in command && "execute" in command) {
        console.log(`들어옴 ${command.data.name}`);
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARning] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// 토큰값 가지고 클라이언트 객체 로그인
client.login(DISCORD_TOKEN);
