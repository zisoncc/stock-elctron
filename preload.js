// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// 在渲染进程和主进程之间创建一个安全的通信桥梁
contextBridge.exposeInMainWorld('electronAPI', {
  closeWindow: () => ipcRenderer.send('close-window'),
  startDrag: (deltaX, deltaY) => ipcRenderer.send('start-drag', deltaX, deltaY)
});
