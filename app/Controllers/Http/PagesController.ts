import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Room from 'App/Models/Room'
import WordHash from 'wordhash'

export default class PagesController {
  public games = new Map()

  public async home({ view }: HttpContextContract) {
    return view.render('homepage')
  }

  public async game({ view, params, response }: HttpContextContract) {
    let room = await Room.findBy('code', params.code)

    if (room === null) {
      return response.notFound()
    }

    return view.render('game', { room })
  }

  public async create({ session, response, request }: HttpContextContract) {
    const { game } = request.post()
    const code = WordHash({ length: '3' }).hash(Math.random())

    let room = await Room.findBy('code', code)

    if (room !== null) {
      session.flash('error', 'Room already exists!')
      return response.redirect('/')
    }

    // Can create room
    room = new Room()
    room.code = code
    room.game = game
    room = await room.save()

    return response.redirect(`/${room.code}`)
  }
}
