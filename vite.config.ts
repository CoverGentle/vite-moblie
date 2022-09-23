import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true, //vite项目启动时自动打开浏览器
    hmr: true, //启用热更新
  },
})
