import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateRoomsTables extends BaseSchema {
  protected tableName = 'rooms'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('game')
      table.string('code').unique()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
