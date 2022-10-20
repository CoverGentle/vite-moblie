import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteVConsole } from 'vite-plugin-vconsole'

// https://vitejs.dev/config/
export default({mode})=>{
    return defineConfig({
      mode:process.env.VITE_ENV,
      base: './',
      resolve:{
        alias:{
          '@':path.resolve(__dirname,'src')
        }
      },
      plugins: [
        vue(),
        viteVConsole({
          entry: path.resolve('src/main.ts'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.js')]
          localEnabled: mode === 'development', // 本地是否启用
          enabled: mode === 'development', // 是否启用
          config: {
            maxLogNumber: 1000,
            theme: 'light' // 主题颜色 'dark'|'light'
          }
        })
      
      ],
      server: {
        open: true, //vite项目启动时自动打开浏览器
        hmr: true, //启用热更新
        port:9090
      },
    })
}
