const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();

client.on('ready',() => {
console.log(`Logged in as ${client.user.tag}`);
const channel = client.channels.cache.get('746305375082512474');
  setInterval(await () => {
    let meme = await fetch('https://memes.blademaker.tv/api/ ');
     meme = meme.json();
     channel.send(
     new Discord.MessageEmbed()
      .setTitle('A Meme!')
      .setDescription(meme.title)
      .setImage(meme.url)
      .setFooter(`${client.user.username} | Bot by: Beast#0505`, client.user.displayAvatarURL())
)
  }, 216000);
});

const token = 'NzQ4MzY0NzYwNjg0Mjk4MzQw.X0cW_g.cSQ1_g85WwEbAGvwd9TC9463cC4';

client.login(token);
