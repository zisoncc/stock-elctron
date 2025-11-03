// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// 在渲染进程和主进程之间创建一个安全的通信桥梁
contextBridge.exposeInMainWorld('electronAPI', {
  // 可以在这里添加需要暴露给渲染进程的API
  // 例如：
  // getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  // setTitle: (title) => ipcRenderer.send('set-title', title)
});

// 如果需要使用Node.js API，可以在这里添加
// 但要注意安全问题，避免暴露敏感API


const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeWindow: () => ipcRenderer.send('close-window')
});
