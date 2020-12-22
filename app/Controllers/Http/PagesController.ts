import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public async home({ view }: HttpContextContract) {
    return view.render('homepage')
  }

  public async game({ view, params }: HttpContextContract) {
    return view.render('game', { roomId: params.roomId })
  }
}
