export default [
  {
    id: 1,
    path: "/",
    name: "Sobre",
  },
  {
    id: 2,
    path: "/carreira",
    name: "Carreira",
    subMenu: true,
    subMenuOptions: [
      {
        id: 1,
        name: "Experiências",
      },
      {
        id: 2,
        name: "Projetos",
      },
    ],
  },
  {
    id: 3,
    path: "/aprendizados",
    name: "Aprendizados",
    subMenu: true,
    subMenuOptions: [
      {
        id: 1,
        name: "Habilidades",
      },
      {
        id: 2,
        name: "Cursos",
      },
      {
        id: 3,
        name: "Educação",
      },
    ],
  },
];
