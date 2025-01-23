import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    tsconfigPaths(),
    TanStackRouterVite(),
  ],
})
