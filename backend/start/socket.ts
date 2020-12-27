import Ws from 'App/Services/WsService'

Ws.start((socket) => {
  socket.emit('yerd', { doot: 'dooting' })

  socket.on('log', (data) => {
    console.log(data)
  })
})
