

# Electron backend


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

Cleans the `build/` and `dist/` folders
