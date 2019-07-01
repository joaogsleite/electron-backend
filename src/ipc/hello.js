
import { IpcRouter } from 'utils/ipc'

import { sayHello } from 'controllers/hello'

const router = new IpcRouter()

router.on('/say', sayHello)

export default router
