const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'dayz', host: '92.38.222.30', port: '2213'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
bot.login("https://discord.com/api/oauth2/authorize?client_id=1100006552766775308&permissions=1099511627776&scope=bot")
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});