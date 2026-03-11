const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'arcanumcraft.com.br',
  port: 25565,
  username: 'feliz',
  version: '1.21.1'
})

bot.on('spawn', () => {
  console.log('Bot entrou')



  setTimeout(() => {
    bot.setControlState('forward', false)
  }, 2000)

  // login
  setTimeout(() => {
    console.log('Mandando login')
    bot.chat('/login farmbmb')
  }, 5000)

  // register caso precise
  setTimeout(() => {
    bot.chat('/register farmbmb farmbmb')
  }, 8000)


})

bot.on('message', (msg) => {
  console.log(msg.toString())
})

bot.on('error', console.log)
bot.on('kicked', console.log)
