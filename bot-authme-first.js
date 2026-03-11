const mineflayer = require('mineflayer')

function iniciarBot() {

const bot = mineflayer.createBot({
  host: 'arcanumcraft.com.br',
  port: 25565,
  username: 'feliz',
  version: false
})

bot.on('spawn', () => {

  setTimeout(() => {
    bot.chat('/login farmbmb')
  }, 5000)

  setTimeout(() => {
    bot.chat('/home 1')
  }, 9000)

})

bot.on('end', () => {
  console.log('Bot caiu... reconectando em 10s')
  setTimeout(iniciarBot, 10000)
})

}

iniciarBot()
