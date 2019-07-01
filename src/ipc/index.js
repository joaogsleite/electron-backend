
import { IpcMainRouter } from 'utils/ipc'

import helloRouter from './hello'

const mainRouter = new IpcMainRouter()

mainRouter.on('/hello', helloRouter)

export default mainRouter
