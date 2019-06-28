import { app, BrowserWindow } from 'electron'
import path from 'path'

import './ipc'

app.on('ready', () => {

  const window = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://localhost:3000')
    window.webContents.openDevTools()
  } else {
    window.loadFile(path.join(__dirname, '..', 'public', 'index.html'))
  }

})

app.on('window-all-closed', () => {
  app.quit()
})
