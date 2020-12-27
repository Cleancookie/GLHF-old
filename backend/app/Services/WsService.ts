import socketIo, { Socket } from 'socket.io'
import Server from '@ioc:Adonis/Core/Server'
import WsInterface from 'Contracts/interfaces/Ws.interface'

export default new (class WsService implements WsInterface {
  public isReady = false
  public io: socketIo.Server

  public async start(callback: (socket: Socket) => void) {
    this.io = socketIo(Server.instance!)
    this.io.on('connection', callback)
    this.isReady = true
  }
})()
