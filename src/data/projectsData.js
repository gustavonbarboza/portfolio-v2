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
    title: 'Linktree',
    highlight: 'Rocketseat',
    details: 'Este projeto é uma versão personalizada do DevLinks, um agregador de links para usar como cartão de visitas online, desenvolvido com tecnologias WEB e promovido pela Rocketseat.',
    image: linktreeImage,
    links: [
      { type: 'demostracao', url: 'https://gustavonbarboza.github.io/Projeto-Linktree/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Projeto-Linktree' },
    ],
  },
  {
    id: 2,
    title: 'Ecoleta',
    highlight: 'NLW',
    details: 'Esse projeto desenvolvido no NLW da Rocketseat, focado em criar uma plataforma de coleta de resíduos. Utilize HTML, CSS e JavaScript para o Front-end, Node.js para o Back-end e SQL para o gerenciamento de dados. Foi uma ótima experiência para aplicar e integrar diferentes tecnologias.',
    image: ecoletaImage,
    links: [
      { type: 'demostracao', url: 'https://gustavonbarboza.github.io/Ecoleta/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Ecoleta' },
    ],
  },
  {
    id: 3,
    title: 'Sistema de Gerenciamento de Biblioteca (C)',
    highlight: 'Faculdade',
    details: 'Fiz esse sistema em um projeto da faculdade, na matéria de Estrutura de Dados. Este é um sistema simples de gerenciamento de biblioteca desenvolvido em linguagem C. O projeto permite cadastrar, buscar, editar e excluir livros, utilizando estruturas (structs), arrays dinâmicos, ponteiros, funções e também salva os dados em um arquivo .txt.',
    image: libraryImage,
    links: [
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/Library-Management-C-' },
    ],
  },
  {
    id: 4,
    title: 'Site de Blog para um Psicólogo',
    highlight: 'Freelance',
    details: 'Fiz esse projeto simples de um blog/portfólio para um psicólogo que queria um site funcional e profissional. A ideia era ter um espaço onde ele pudesse divulgar e vender seus livros, mostrar suas palestras, atrair novos clientes, postar artigos no blog e apresentar melhor o seu trabalho.',
    image: blogImage,
    links: [
      { type: 'demostracao', url: 'https://joaowesleypsicologo.com.br/' },
    ],
  },
  {
    id: 5,
    title: 'Site Mariana Melo Atelier',
    highlight: 'Freelance',
    details: 'Fiz esse site no WordPress do zero, totalmente personalizado de acordo com as necessidades da cliente, que trabalha com a criação e venda de joias artesanais de todos os tipos. Cuidei de toda a parte de integração com o WooCommerce para gerenciar os produtos e pedidos. Também implementei o sistema de pagamento online usando a plataforma Pagar.me.',
    image: atelierImage,
    links: [
      { type: 'demostracao', url: 'https://marianameloatelier.com.br/' },
    ],
  },
  {
    id: 6,
    title: 'Site TrackFlix em React',
    highlight: 'Pessoal',
    details: 'O TrackFlix é uma aplicação web desenvolvida em React que permite aos usuários explorar informações sobre filmes, séries e pessoas (atores, diretores etc.) de forma simples e intuitiva. O projeto consome dados da API do The Movie Database (TMDB) e apresenta uma interface moderna, dinâmica e totalmente responsiva, com foco na experiência do usuário.',
    image: trackflixImage,
    links: [
      { type: 'demostracao', url: 'https://trackflix-rho.vercel.app/' },
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/trackflix' },
    ],
  },
  {
    id: 7,
    title: 'Gerenciamento de sala',
    highlight: 'Faculdade',
    details: 'Este projeto é uma aplicação web para gerenciamento de salas, reservas, usuários e status, desenvolvida para a disciplina de PISC na Unieuro.',
    image: roomManagerImage,
    links: [
      { type: 'repositorio', url: 'https://github.com/gustavonbarboza/unieuro-pisc-202502-room-manager' },
    ],
  },
];
