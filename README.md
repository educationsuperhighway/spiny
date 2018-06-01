<img src="http://img1.wikia.nocookie.net/__cb20121106023436/mario/images/d/d1/Spiny,_New_Super_Mario_Bros._2.png" width="200px" alt="Spiny"/>

# spiny
=====

CLI for managing dev databases

Built with [oclif](https://oclif.io

[![Version](https://img.shields.io/npm/v/spiny.svg)](https://npmjs.org/package/spiny)
[![CircleCI](https://circleci.com/gh/educationsuperhighway/spiny/tree/master.svg?style=shield)](https://circleci.com/gh/educationsuperhighway/spiny/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/educationsuperhighway/spiny?branch=master&svg=true)](https://ci.appveyor.com/project/educationsuperhighway/spiny/branch/master)
[![Codecov](https://codecov.io/gh/educationsuperhighway/spiny/branch/master/graph/badge.svg)](https://codecov.io/gh/educationsuperhighway/spiny)
[![Downloads/week](https://img.shields.io/npm/dw/spiny.svg)](https://npmjs.org/package/spiny)
[![License](https://img.shields.io/npm/l/spiny.svg)](https://github.com/educationsuperhighway/spiny/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g spiny
$ spiny COMMAND
running command...
$ spiny (-v|--version|version)
spiny/0.0.1 darwin-x64 node-v8.11.2
$ spiny --help [COMMAND]
USAGE
  $ spiny COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`spiny hello [FILE]`](#spiny-hello-file)
* [`spiny help [COMMAND]`](#spiny-help-command)

## `spiny hello [FILE]`

describe the command here

```
USAGE
  $ spiny hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ spiny hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/educationsuperhighway/spiny/blob/v0.0.1/src/commands/hello.ts)_

## `spiny help [COMMAND]`

display help for spiny

```
USAGE
  $ spiny help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.4/src/commands/help.ts)_
<!-- commandsstop -->
