const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const { ipcMain } = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

const SerialPort = require('serialport');

var sp = new SerialPort('/dev/tty.SLAB_USBtoUART', {
  baudRate: 19200, 
  dataBits: 8,
  parityL:'none',
  stopBits: 1,
  flowControl: false
});


ipcMain.on('user-data', (event, arg) => {
  console.log(arg);
  const buf = Buffer.from( arg , 'hex')
  sp.write(buf);
  sp.write(buf);
})
// SerialPort.list((err, ports) => {
//   let allPorts = ports.map(item => item.comName);
//   let portPath = '/dev/tty.SLAB_USBtoUART';
//   ipcMain.on('comport', (event, payload) => {
//     switch (payload) {
//       case 'comport1':
//         if (allPorts.length >= 1) {
//           portPath = allPorts[0];
//         }
//         break;
//       case 'comport2':
//         if (allPorts.length >= 2) {
//           portPath = allPorts[1];
//         }
//         break;
//       case 'comport3':
//         if (allPorts.length >= 3) {
//           portPath = allPorts[2];
//         }
//         break;
//       case 'comport4':
//         if (allPorts.length >= 4) {
//           portPath = allPorts[3];
//         }
//         break;
//       case 'comport5':
//         if (allPorts.length >= 5) {
//           portPath = allPorts[4];
//         }
//         break;
//       default:
//         portPath = '/dev/tty.SLAB_USBtoUART';
//     }
//     // let portPath = '/dev/tty.SLAB_USBtoUART';

//     var sp = new SerialPort(portPath, {
//       baudRate: 19200,
//       // dataBits: 8,
//       // parityL:'none',
//       // stopBits: 1,
//       // flowControl: false
//     });

//     ipcMain.on('user-data', (event, arg) => {
//       // console.log(arg);
//       const buf = Buffer.from(arg, 'hex');
//       console.log(sp.path);
//       // sp.write(buf);
//       sp.write(buf);
//     });
//   });
// });

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
