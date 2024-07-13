import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'MeusComponentes',
      // the proper extensions will be added
      fileName: (format) => `meus-componentes.${format}.js`,
      formats: ['umd'],
      /*entry: path.resolve(__dirname, 'src/components/MeuBotao.vue'),
      name: 'MeuBotao',
      fileName: (format) => `meu-botao.${format}.js`,
      formats: ['umd'],*/
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      // Adicione um plugin para extrair o CSS
      // plugins: [
      //   {
      //     name: 'extract-css',
      //     generateBundle(options, bundle) {
      //       for (const key in bundle) {
      //         const chunk = bundle[key];
      //         if (chunk.type === 'chunk' && chunk.isEntry) {
      //           chunk.imports.forEach((file) => {
      //             if (file.endsWith('.css')) {
      //               this.emitFile({
      //                 type: 'asset',
      //                 fileName: path.basename(file),
      //                 source: chunk.modules[file].source,
      //               });
      //             }
      //           });
      //         }
      //       }
      //     },
      //   },
      // ],
    },
  },
  plugins: [vue()],
});
