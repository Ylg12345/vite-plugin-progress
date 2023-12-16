import { defineConfig } from 'vite'
import progressPlugin from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [progressPlugin()],
})
