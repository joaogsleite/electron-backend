
import { ipcMain } from 'electron'

import { sayHello } from 'controllers/hello'

ipcMain.on('say-hello', (event, name) => {
  const result = sayHello(name)
  event.reply('say-hello-response', result)
})
