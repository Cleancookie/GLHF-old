import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Room from 'App/Models/Room'
import WordHash from 'wordhash'

export default class PagesController {
  public games = new Map()

  public async home({ view }: HttpContextContract) {
    const wordHash = WordHash({ length: '3' })

    return view.render('homepage', {
      code: wordHash.hash(Math.random()),
    })
  }

  public async game({ view, params }: HttpContextContract) {
    return view.render('game', { roomId: params.roomId })
  }

  public async create(ctx: HttpContextContract) {
    const { game } = ctx.request.post()
    const code = ctx.params.code

    let room = await Room.findBy('code', code)

    if (room !== null) {
      ctx.session.flash('error', 'Room already exists!')
      return ctx.response.redirect('/')
    }

    // Can create room
    room = new Room()
    room.code = code
    room.game = game
    room = await room.save()

    return 'yerd'
  }
}
