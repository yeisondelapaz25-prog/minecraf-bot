const { createClient } = require('bedrock-protocol')

function conectar() {
  const client = createClient({
    host: 'Yeison.aternos.me',
    port: 38475 ,
    username: 'YeisonBOT'
  })

  client.on('join', () => {
    console.log('✅ Bot conectado al servidor')

    setInterval(() => {
      console.log('Sigo activo...')
    }, 30000)
  })

  client.on('disconnect', () => {
    console.log('❌ Se desconectó, reconectando...')
    setTimeout(conectar, 5000)
  })

  client.on('error', (err) => {
    console.log('⚠️ Error:', err.message)
  })
}

conectar()
