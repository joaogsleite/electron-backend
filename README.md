

# Electron backend


## Folder structure

* `build/`: babel transpiled code
* `dist/`: distribution files for all operating systems
* `public/`: react builded frontend (react `build/` folder)
* `resources/`: app icon and static files
* `src/`: electron backend javascript code

## Available scripts

### `npm start`

Runs the app without building.<br>
The frontend code must be copied to `public/` folder.


### `npm run dev`

Runs the app in the development mode.<br>
The frontend `react-scripts` development server must be running to serve the app frontend. 


### `npm run dist`

Generates the executable files for running the app in all operating systems.<br>
The file will be placed in `dist/` folder.<br>
The frontend code must be copied to `public/` folder.


### `npm run dist:win`

Generates the `exe` file for running the app in Windows.


### `npm run dist:mac`

Generates the `dmg` file for installing the app in macOS.


### `npm run dist:linux`

Generates the `deb` file for installing the app in Debian-based linux.


### `npm run clean`

Cleans the `build/` and `dist/` folders
