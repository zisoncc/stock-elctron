# 快速解决指南：Cannot find module 'electron'

## 快速修复步骤

1. **打开命令提示符**（以管理员身份运行）

2. **导航到项目目录**：
   ```
   cd C:\Users\Administrator\Downloads\stock-ticker
   ```

3. **运行修复脚本**（如果下载了fix-electron.bat）：
   ```
   fix-electron.bat
   ```

4. **或者手动执行以下命令**：
   ```
   # 删除现有依赖
   rmdir /s /q node_modules
   del /q package-lock.json
   
   # 清除npm缓存
   npm cache clean --force
   
   # 重新安装依赖
   npm install
   
   # 安装Electron
   npm install electron@latest --save-dev
   ```

5. **验证并运行**：
   ```
   npm start
   ```

## 如果仍然有问题

1. **检查package.json**：确保main字段指向正确的主进程文件（main.js）

2. **使用npx直接运行**：
   ```
   npx electron .
   ```

3. **检查Node.js版本**：确保使用的是Node.js LTS版本

4. **查看详细日志**：
   ```
   npm install electron --save-dev --verbose
   ```

5. **尝试使用yarn**：
   ```
   npm install -g yarn
   yarn install
   yarn start
   ```

## 常见错误原因

- Electron依赖未正确安装
- package.json配置错误
- npm缓存问题
- 网络连接问题
- Node.js版本不兼容

如果以上方法都无法解决问题，请查看完整的解决方案文档：fix-electron-issue.md
