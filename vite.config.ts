import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {resolve} from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  '@': pathResolve('src'),
}

// https://vitejs.dev/config/
export default ({mode}: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      react(),
      reactRefresh(),
    ],

    define: {
      'process.env': {...process.env, ...env}
    },

    resolve: {
      alias
    },

    build: {
      target: "es2015",//设置最终构建的浏览器兼容目标
      // sourcemap: true, // 输出.map文件
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: 'production' === mode,
        },
      },
    },
  })
}
