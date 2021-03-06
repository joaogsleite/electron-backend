

# Electron backend

Electron app backend boilerplate.<br>
This project does not include a tooling system for the frontend (that should be copied to `/public` folder).<br>
You can check [this project](https://github.com/joaogsleite/el  ectron-frontend) for an example frontend boilerplate for the electron app.



## Folder structure

* `build/`: babel transpiled code
* `dist/`: distribution files for all operating systems
* `public/`: frontend code (**electron-frontend** `build/` folder)
* `resources/`: static files used for build process
    * `icon.png`: app icon
* `src/`: electron backend javascript code

## Available scripts

### `npm start`

Runs the app without building.<br>
The frontend code must be copied to `public/` folder.


### `npm run dev`

Runs the app in the development mode.<br>
A frontend development server must be running to serve the app html. 


### `npm run dist`

Generates the executable files for running the app in all operating systems.<br>
Executable files will be placed in `dist/` folder.<br>
The frontend code must be copied to `public/` folder.


### `npm run dist:win`

Generates the `exe` file for running the app in Windows.


### `npm run dist:mac`

Generates the `dmg` file for installing the app in macOS.


### `npm run dist:linux`

Generates the `deb` file for installing the app in Debian-based linux.


### `npm run clean`

Removes `build/` and `dist/` folders



## Routing

This project includes an IPC routing system like the Express Router.<br>
The file `src/utils/ipc.js` includes **IpcRouter** and **IpcMainRouter**.<br>

### Example usage:

```javascript
const exampleRouter = new IpcRouter()
exampleRouter.on('/hello', helloController)
```

```javascript
const mainRouer = new IpcMainRouter()
mainRouter.on('/example', exampleRouter)
```

> **helloController** will be available at `/example/hello`
