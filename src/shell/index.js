const { app, Tray, Menu, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const iconPath = path.join(__dirname, 'icons/icon.png')

let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    resizable: false,
    backgroundColor: '#ECE9D7'
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  let appIcon = new Tray(iconPath)
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        mainWindow.show();
        mainWindow.toggleDevTools();
      }
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ])
  appIcon.setToolTip('AIM For Success')
  appIcon.setContextMenu(contextMenu)
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
