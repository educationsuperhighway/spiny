import Command from '../../base'
import {flags} from '@oclif/command'
import * as child from 'child_process';

export default class Db extends Command {
  static description = 'manage dev databases'

  static examples = [
    `$ spiny db
    List of databases
                     Name                 |  Owner   | Encoding |   Collate   |    Ctype    |      Access privileges
    --------------------------------------+----------+----------+-------------+-------------+-----------------------------
     db1                                  | eshadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
     db2                                  | eshadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |

`,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    const result = child.exec(this.buildDbCmd('dev', '\\l'), (error: string, stdout: string, stderr: string) => {
      if (error) {
        this.error(`exec error: ${error}`)
        return
      }
      this.log(`${stdout}`)
    })
  }
}
