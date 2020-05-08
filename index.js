require('dotenv').config();
const _ = require("lodash")
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  // 1. Feature Hi
  const chatHi = ['halo', 'hello', 'hai', 'hi'];
  if (msg.content.toLocaleLowerCase().match(/halo|hello|hai|hi|hii/g)) {
    var x = [
      'iya prend.. :smile:',
      'dalem dekque. ',
      'enggih sayangg.. :heart:',
      'yes adek?'
    ];
    msg.reply(_.sample(x));

  }


  // 2. Ayok ON
  const chatAyoOn = ['on', 'ayo on'];
  if (msg.content.toLocaleLowerCase().match(/on/g)) {
    var x = [
      'OK Pak Samuel OTW LOGIN yaah.. :ok_hand:',
      'Siap, Saya tunggu di lobby yach.. :ok_hand: :point_left:',
      'Ok. Awas hoax yah! :angry: - Biasanya Putune Dhemit suka Hoax :angry: :angry: :angry:'
      // 'Maaf, saya sedang sibuk gaes :tired_face:',
      // 'Sorry, aku lagi lag :cry:',
      // 'Haduh, aku lagi meeting tolong jangan ganggu dulu ya adek-adekQue :cyring_cat_face:',
    ];
    setTimeout(function () {
      msg.reply(_.sample(x));
    }, 2000)

  }

  // 3. Nasihat
  const chatNasihat = ['nasihat', 'minta nasihat'];
  if (msg.content.toLocaleLowerCase().match(/nasihat|minta nasihat/g)) {
    msg.reply('Sering berdoa dan ngopi jangan lupa');
  }

});