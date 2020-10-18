const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.js');
const client = new Discord.Client();

client.on('ready', async() => {
console.log(`Logged in as ${client.user.tag}`);
const channel = client.channels.cache.get(config.channelID);
    let meme = await fetch('https://memes.blademaker.tv/api/ ');
    let q = await meme.text();
    q = JSON.parse(q);
    channel.send(new Discord.MessageEmbed().setTitle(q.title).setAuthor(q.author).setImage(q.image).setFooter(`${q.ups} 👍 | ${q.downs} 👎`));
  setInterval(async () => {
    let meme = await fetch('https://memes.blademaker.tv/api/ ');
    let q = await meme.text();
    q = JSON.parse(q);
    channel.send(new Discord.MessageEmbed().setTitle(q.title).setAuthor(q.author).setImage(q.image).setFooter(`${q.ups} 👍 | ${q.downs} 👎`));
  }, 216000);
});

client.login(config.token);
