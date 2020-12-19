import Ws from 'App/Services/Ws'

Ws.start((socket) => {
  socket.emit('yerd', { doot: 'dooting' })

  socket.on('log', (data) => {
    console.log(data)
  })
})
