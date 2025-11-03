const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 800,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title: '股票基金行情显示软件',
    // 如果有图标，可以添加图标路径
    // icon: path.join(__dirname, 'icon.png')
  });

  // 加载应用的index.html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 打开开发者工具
  // mainWindow.webContents.openDevTools();

  // 窗口关闭时触发
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// 当Electron完成初始化并准备创建浏览器窗口时调用这个方法
app.on('ready', createWindow);

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', function () {
  // 在macOS上，除非用户用Cmd + Q显式退出，否则应用及其菜单栏会保持激活
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // 在macOS上，当点击dock图标并且没有其他窗口打开时，通常会在应用中重新创建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});

// 可以在这个文件中续写应用剩下主进程代码
// 也可以拆分成几个文件，然后用require导入
