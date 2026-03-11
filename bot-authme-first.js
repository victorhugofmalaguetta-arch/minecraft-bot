const mineflayer = require('mineflayer')

const host = 'arcanumcraft.com.br'
const username = 'feliz'
const senha = 'farmbmb'

function criarBot() {

  const bot = mineflayer.createBot({
    host: host,
    port: 25565,
    username: username,
    version: false
  })

  bot.on('spawn', () => {
    console.log('Bot entrou no servidor')

    setTimeout(() => {
      bot.chat(`/login ${senha}`)
      console.log('Login enviado')
    }, 3000)
  })

  bot.on('end', () => {
    console.log('Bot caiu... reconectando em 10s')
    setTimeout(criarBot, 10000)
  })

  bot.on('kicked', (reason) => {
    console.log('Kickado:', reason)
  })

  bot.on('error', (err) => {
    console.log('Erro:', err)
  })

}

criarBot()