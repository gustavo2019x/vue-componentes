// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/MeuBotao.vue'),
      name: 'MeuBotao',
      fileName: 'meu-botao',
      formats: ['umd'],
    },
    rollupOptions: {
      // Certifique-se de externalizar dependências que não devem ser incluídas no pacote da biblioteca
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
