import Ws from '@ioc:App/Services/WsService'
import { Socket } from 'socket.io'

const io = Ws.io

io.on('connect', (socket: Socket) => {
  socket.on('join', ({ roomId }: any) => {
    console.log(`Joining room ${roomId}`)
    socket.join(roomId)
  })
})
