import Command from '../../base'
import {flags} from '@oclif/command'
import * as child from 'child_process';

export default class Drop extends Command {
  static description = 'drop a dev database'

  static examples = [
    `$ spiny db:drop -n mydb
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name of database to drop'})
  }

  async run() {
    const {args, flags} = this.parse(Drop)
    const result = child.exec(this.buildDbCmd('dev', 'drop database ' + flags.name), (error: string, stdout: string, stderr: string) => {
      if (error) {
        this.error(`exec error: ${error}`)
        return
      }
      this.log(`${stdout}`)
    })
  }
}
