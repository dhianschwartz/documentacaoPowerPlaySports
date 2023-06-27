import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'PowerPlay Sports',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        items: [
          { text: 'Quem Somos Nós', link: '/quemsomos' },
          {
            text: '1. Introdução',
            link: '/visao_geral',
            collapsed: true,
            items: [
              { text: '1.1 Objetivo', link: '/objetivo' },
              { text: '1.2 Escopo', link: '/escopo' },
              {
                text: '1.3 Definições, Acrônimos e Abreviações',
                link: '/definicao',
              },
              { text: '1.4 Público-alvo', link: '/publico_alvo' },
            ],
          },
          {
            text: '2. Descrição do Projeto',
            link: '/descricao_projeto',
            collapsed: true,
            items: [
              { text: '2.1 Visão Geral do Projeto', link: '/geral' },
              { text: '2.1.1 Canvas do Projeto', link: '/canvas' },
              { text: '2.2 Stakeholders', link: '/stakeholders' },
              { text: '2.3 Objetivos', link: '/objetivos' },
            ],
          },
          {
            text: '3. Principais Recursos e Funcionalidades',
            link: '/recursos',
            collapsed: true,
            items: [
              {
                text: '3.1 Requisitos Funcionais',
                link: '/requisitos_funcionais',
              },
              {
                text: '3.2 Requisitos Não Funcionais',
                link: '/requisitos_nao_funcionais',
              },
            ],
          },
          {
            text: '4. Diagrama de Caso de Uso',
            link: '/casos_de_uso',
            collapsed: true,
            items: [
              {
                text: '4.1 Descrição de Caso de Uso',
                link: '/descricao_casos',
              },
            ],
          },
          { text: '5. Diagrama de Classes', link: '/diagrama_classes' },
          { text: '6. Protótipos de Telas', link: '/prototipo_tela' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Considerações Finais', link: '/final' },
        ],
      },
    ],

    footer: {
      message: 'Documentação PowerPlay Sports - Desenvolvimento de Sistemas',
      copyright: 'Copyright © 2023 - PowerPlay Sports',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
