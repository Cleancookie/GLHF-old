import Ws from '@ioc:App/Services/WsService'
import { Socket } from 'socket.io'

const io = Ws.io

io.on('connect', (socket: Socket) => {
  console.log(`Codenames listener: new user has joined ${socket.id}`)
})
