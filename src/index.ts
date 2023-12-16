import type { PluginOption } from 'vite';

export default function viteProgress(): PluginOption {
  return {
    name: 'vite-plugin-progress',
    config(config, { command }) {
      console.log('这里是config钩子');
    },
    transform(code, id) {
      console.log('这里是transform钩子');
    }
  }
}
