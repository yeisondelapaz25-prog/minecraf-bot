const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: '195.201.153.149',
    port: 22214,
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
