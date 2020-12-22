import Ws from 'App/Services/Ws'
import { Socket } from 'socket.io'

const io = Ws.io

io.on('connect', (socket: Socket) => {
  console.log('Codename listener hearing you buddy.' + socket.id)

  socket.on('join', ({ roomId }: any) => {
    console.log(`Joining room ${roomId}`)
    socket.join(roomId)
  })
})
