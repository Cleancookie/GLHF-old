import SocketIO from 'socket.io'
import { Socket } from 'socket.io/dist/socket'

export default interface WsInterface {
  isReady: boolean
  io: SocketIO.Server
  start(callback: (socket: Socket) => void, server: any): Promise<void>
}
