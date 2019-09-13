const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const { ipcMain } = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

var HID = require('node-hid');

var devices = HID.devices();
console.log(devices);

device = new HID.HID ('IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/XHC1@14/XHC1@14000000/HS01@14100000/Weltrend USB device@14100000/IOUSBHostInterface@0/IOUSBHostHIDDevice@14100000,0')


ipcMain.on('user-data', (event, arg) => {
  console.log(arg);
  device.write(arg);
  
})


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
