import Command, {flags} from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

export default abstract class extends Command {
  async init() {
    // initialize db config
    const {user, password, host, port} = await fs.readJSON(path.join(this.config.configDir, 'db.json'))
    this.connStr = 'postgres://' + user + ':' + password + '@' + host + ':' + port
  }

  buildDbCmd(db, command) {
    return 'psql ' + this.connStr + '/' + db + ' -c "' + command + '"'
  }
}
