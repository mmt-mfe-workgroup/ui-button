import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const mfe = () => federation({
    name: 'ui-button',
    filename: 'remoteEntry.js',
    // Modules to expose
    exposes: {
        './App': './src/RemoteApp',
    },
    shared: ['react', 'react-dom']
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), mfe()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    target: 'esnext'
  }
})
