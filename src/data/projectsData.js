import linktreeImage from '../assets/images/projectImages/projeto-linktree.png';
import ecoletaImage from '../assets/images/projectImages/projeto-ecoleta.png';
import libraryImage from '../assets/images/projectImages/projeto-sistema-de-gerenciamento-de-biblioteca.png';
import blogImage from '../assets/images/projectImages/site-psicologo-blog-visual.png';
import atelierImage from '../assets/images/projectImages/site-mariana-melo-atelier.png';
import trackflixImage from '../assets/images/projectImages/site-trackflix.png';
import roomManagerImage from '../assets/images/projectImages/site-gerenciamento-sala.png';

export const projectsData = [
  {
    id: 1,
    title: 'Cartão de Visitas Digital',
    highlight: 'Rocketseat',
    details: 'Uma versão personalizada do DevLinks, um agregador de links para cartões de visita online. Este projeto foi desenvolvido com tecnologias web fundamentais (HTML, CSS e JavaScript) e seguiu o padrão de boas práticas do curso da Rocketseat.',
    image: linktreeImage,
    links: [
      { type: 'demostracao', url: 'https://gustavonbarboza.github.io/Projeto-Linktree/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Projeto-Linktree' },
    ],
  },
  {
    id: 2,
    title: 'Plataforma de Coleta de Resíduos',
    highlight: 'NLW',
    details: 'Plataforma web para conectar coletores e pontos de coleta de resíduos. O projeto é full stack, utilizando HTML, CSS e JavaScript no front-end e Node.js com SQL no back-end. Desenvolvido durante o NLW da Rocketseat, serviu para aplicar conceitos de integração entre diferentes tecnologias.',
    image: ecoletaImage,
    links: [
      { type: 'demostracao', url: 'https://gustavonbarboza.github.io/Ecoleta/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Ecoleta' },
    ],
  },
  {
    id: 3,
    title: 'Gerenciador de Biblioteca',
    highlight: 'Faculdade',
    details: 'Sistema de gerenciamento de biblioteca simples, desenvolvido para a disciplina de Estrutura de Dados. O projeto, implementado em linguagem C, permite cadastrar, buscar, editar e excluir livros. Utiliza conceitos de structs, arrays dinâmicos e ponteiros, com persistência de dados em arquivos .txt.',
    image: libraryImage,
    links: [
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Library-Management-C-' },
    ],
  },
  {
    id: 4,
    title: 'Blog e Portfólio para Psicólogo',
    highlight: 'Freelance',
    details: 'Desenvolvimento de um blog e portfólio funcional para um profissional de psicologia. O site foi projetado para divulgar e vender livros, exibir palestras e atrair novos clientes. A plataforma permite a publicação de artigos e apresenta o trabalho de forma profissional e organizada.',
    image: blogImage,
    links: [
      { type: 'demostracao', url: 'https://joaowesleypsicologo.com.br/' },
    ],
  },
  {
    id: 5,
    title: 'E-commerce para Atelier de Joias',
    highlight: 'Freelance',
    details: 'E-commerce personalizado, construído em WordPress, para um atelier de joias artesanais. O projeto envolveu a integração com o WooCommerce para gerenciamento de produtos e pedidos. A implementação de um sistema de pagamento online usando a plataforma Pagar.me foi crucial para a funcionalidade completa da loja.',
    image: atelierImage,
    links: [
      { type: 'demostracao', url: 'https://marianameloatelier.com.br/' },
    ],
  },
  {
    id: 6,
    title: 'Aplicação Web TrackFlix',
    highlight: 'Pessoal',
    details: 'Aplicação web desenvolvida em React para explorar filmes, séries e informações de atores. O projeto consome dados da API The Movie Database (TMDB) e apresenta uma interface moderna, dinâmica e totalmente responsiva, com foco na experiência do usuário e na usabilidade da plataforma.',
    image: trackflixImage,
    links: [
      { type: 'demostracao', url: 'https://trackflix-rho.vercel.app/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/trackflix' },
    ],
  },
  {
    id: 7,
    title: 'Gerenciador de Salas',
    highlight: 'Faculdade',
    details: 'Aplicação web full stack para gerenciar salas, usuários, reservas e status. O projeto, desenvolvido para a disciplina de PISC na Unieuro, permite um controle completo de reservas, demonstrando habilidades em desenvolvimento do front-end ao back-end e gerenciamento de banco de dados.',
    image: roomManagerImage,
    links: [
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/unieuro-pisc-202502-room-manager' },
    ],
  },
];
