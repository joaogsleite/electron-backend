
import { ipcMain } from 'electron'

export class IpcRouter {

  constructor () {
    this.routes = []
  }

  on (name, handler) {
    if (typeof handler === 'function') {
      this.routes.push({ name, handler })
    } else {
      const routes = handler.routes
      routes.forEach((route) => {
        const name = name + route.name
        const handler = route.handler
        routes.push({ name, handler })
      })
    }
  }
}

export class IpcMainRouter extends IpcRouter {
  handle (func) {
    return (event, {args, requestId}) => {
      func(args).then((result) => {
        event.reply(requestId, result)
      })
    }
  }
  on (name, handler) {
    if (typeof handler === 'function') {
      ipcMain.on(name, this.handle(handler))
    } else {
      const routes = handler.routes
      routes.forEach((route) => {
        const routeName = name + route.name
        const routeHandler = route.handler
        ipcMain.on(routeName, this.handle(routeHandler))
      })
    }
  }
}

