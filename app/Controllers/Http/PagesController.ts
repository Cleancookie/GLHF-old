import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {

  public home({ view }) {
    return view.render('homepage')
  }
}
