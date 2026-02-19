const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'YeisonDdiaz.aternos.me',
    port: 28355,
    username: 'yeisonlive'
  })

  bot.on('spawn', () => {
    console.log('Bot conectado correctamente')
  })

  bot.on('end', () => {
    console.log('Bot desconectado, reconectando en 5 segundos...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
