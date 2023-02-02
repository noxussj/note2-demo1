const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 兼容在线 vscode，平时无需添加
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.gitpod.io'],
  },
})
