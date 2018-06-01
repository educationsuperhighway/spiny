import Command from '../../base'
import {flags} from '@oclif/command'
import * as child from 'child_process';

export default class Create extends Command {
  static description = 'create a dev database'

  static examples = [
    `$ spiny db:create -n mydb
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name of database to create'})
  }

  async run() {
    const {args, flags} = this.parse(Create)
    const result = child.exec(this.buildDbCmd('dev', 'create database ' + flags.name), (error: string, stdout: string, stderr: string) => {
      if (error) {
        this.error(`exec error: ${error}`)
        return
      }
      this.log(`${stdout}`)
    })
  }
}
