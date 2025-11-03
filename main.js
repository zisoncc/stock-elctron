const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 320,  // 更适合桌面宠物的宽度
    height: 400, // 更适合桌面宠物的高度
    minWidth: 320,
    minHeight: 200,
    frame: false, // 无边框窗口
    transparent: true, // 透明背景
    alwaysOnBottom: true, // 始终在底部（桌面层）
    skipTaskbar: true, // 不在任务栏显示
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title: '股票基金行情显示软件',
    backgroundColor: '#00000000' // 完全透明背景
  });

  // 加载应用的index.html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 允许窗口被拖动到桌面任何位置
  mainWindow.setIgnoreMouseEvents(false);

  // 窗口关闭时触发
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// 当Electron完成初始化并准备创建浏览器窗口时调用这个方法
app.on('ready', createWindow);

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// 在main.js中添加
const { ipcMain } = require('electron');

ipcMain.on('close-window', () => {
  mainWindow.close();
});