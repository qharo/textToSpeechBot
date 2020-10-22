const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log("Bot is online!");
});

client.on("message", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send("pong")
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join()
            setTimeout(connection.disconnect(), 3000)
        }
        else{
            message.reply('You need to join a voice channel first!');

        }
        console.log(client.voice.connections[1])
    }
});

client.login("NzY4NzE4NDAxODQ5NjU1Mjk4.X5EizQ.LQYeh_TAjk21TK0e-Ajkk6bdWeI");