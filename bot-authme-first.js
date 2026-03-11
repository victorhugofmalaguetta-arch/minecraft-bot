const mineflayer = require('mineflayer')

const host = "arcanumcraft.com.br"
const port = 25565
const username = "feliz"
const senha = "farmbmb"

function iniciarBot() {

const bot = mineflayer.createBot({
  host: host,
  port: port,
  username: username,
  version: false
})

bot.on("login", () => {
  console.log("Bot conectou no servidor")
})

bot.on("spawn", () => {
  console.log("Bot entrou no mundo")

  setTimeout(() => {
    bot.chat(`/register ${senha} ${senha}`)
  }, 4000)

  setTimeout(() => {
    bot.chat(`/login ${senha}`)
  }, 7000)

})

bot.on("kicked", (reason) => {
  console.log("Kickado:", reason)
})

bot.on("error", (err) => {
  console.log("Erro:", err)
})

bot.on("end", () => {
  console.log("Bot caiu... reconectando em 10s")
  setTimeout(iniciarBot, 10000)
})

}

iniciarBot()
