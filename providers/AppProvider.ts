import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import WsService from 'App/Services/WsService'

export default class AppProvider {
  public static needsApplication = true

  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    this.app.container.singleton('@ioc:App/Services/WsSerice', () => {
      new WsService()
    })
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
    await import('../start/socket')
    await import('App/Listeners/Ws/CodenamesListeners')
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
