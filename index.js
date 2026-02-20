const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'TU_IP',
    port: 25565,
    username: 'BotRailway'
  })

  bot.on('login', () => {
    console.log('Bot conectado correctamente')
  })

  bot.on('end', () => {
    console.log('Bot desconectado, reconectando...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
