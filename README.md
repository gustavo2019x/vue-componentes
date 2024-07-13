# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


como usar

    index.html
    <!-- <script src="https://cdn.jsdelivr.net/gh/gustavo2019x/vue-componentes@latest/producao/meu-botao.umd.js"></script> -->
    <script src="https://teste.bauru.sp.gov.br/arquivos/scripts_web/cdn/componentes/meu-botao.umd.js"></script>
    <script src="https://teste.bauru.sp.gov.br/arquivos/scripts_web/cdn/componentes/funcoes.umd.js"></script>
    <script src="https://teste.bauru.sp.gov.br/arquivos/scripts_web/cdn/componentes/meus-componentes.umd.js"></script>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gustavo2019x/vue-componentes@latest/producao/style.css"> -->
    <link rel="stylesheet" href="https://teste.bauru.sp.gov.br/arquivos/scripts_web/cdn/componentes/meu-botao-style.css">

    main.js
    app.component('meu-botao', MeuBotao);
    app.component('botao-teste', MeusComponentes.MeuBotao); 

    app.vue
    <style>
    @import 'https://teste.bauru.sp.gov.br/arquivos/scripts_web/cdn/componentes/meu-botao-style.css';
    </style>        