import Ws from '@ioc:App/Services/WsService'
import { Socket } from 'socket.io'

const io = Ws.io

io.on('connect', (socket: Socket) => {
  console.log('Codename listener hearing you buddy.' + socket.id)
})
