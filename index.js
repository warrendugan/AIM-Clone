const { app, BrowserWindow } = require('electron')
const menubar = require('menubar')
const mb = menubar()
const path = require('path')
const url = require('url')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
