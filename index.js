const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '195.201.153.149',
  port: 22214,
  username: 'yeisonlive'
{)
bot.on('spawn', ()  =>  {
  console.log('Bot conectado correctamente')
})
bot.on('end', ()  => {
  console.log('Bot desconectado reconectando...')
  settimeout(() => {
    bot.conect()
  }, 5000)
})
  bot.on('error', (err)  => {
    console.log('error:',err)
  })
