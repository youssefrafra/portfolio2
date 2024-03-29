import Link from "next/dist/client/link";

export const projets = [
  {
    title: "Plant Village Classification",
    description: `Image Classification de maladie des feuilles de pomme de terre
    en utilisant un modèle CNN avec tensorflow et keras`,
    image: "/images/villageplant.png",
    tags: ["#Python", "#Tensorflow", "#Keras", "#Heroku", "#ReactJs"],
    source: "https://github.com/youssefrafra/PlantVillge",
    // visit: "https://.herokuapp.com/",
    id: 1,
  },
  {
    title: "Projet Mobile Ukraine",
    description: `Étude sur les téléphones portables en Ukraine.`,
    image: "/images/mobileukraine.png",
    tags: ["#RégressionLinéaire","#Python","#Pandas", "#Sklearn"],
    source: "https://colab.research.google.com/drive/1nOuCFAuDkTvWixC0zlwnjdiqgL8AbMzQ#scrollTo=DMa8nD3nXmoM",
    id: 2,
  },
  {
    title: "Rshiny Covid-19",
    description: `Un dashboard des cas covid-19 de chaque pays avec le dataset de 
    WHO`,
    image: "/images/shiny.png",
    tags: ["#R", "#Rshiny", "#tidyverse", "#leaflet"],
    source: "https://github.com/youssefrafra/rshiny-covid19",
    id: 3,
  },
  {
    title: "BeforeClass",
    description: `En équipe de 3, nous avons créé une web app qui
      vise ceux qui cherchent à découvrir le monde du développement
      web à partir de mini-jeux.`,
    image: "/images/1.png",
    tags: ["#postgresql", "#Javascript", "#Rails", "#Heroku"],
    source: "https://github.com/youssefrafra/BeforeClass",
    visit: "https://beforeclass.herokuapp.com/",
    id: 4,
  },
  // {
  //   title: "ParkIt",
  //   description:
  //     `Dans un groupe de 3, et pendant une semaine on a lancé
  //     une web app pour louer des places de parking de la même façon
  //     que Airbnb en utilisant Figma, HTML, CSS, JS, Ruby on Rails et
  //     Heroku.
  //     `,
  //   image: "/images/3.png",
  //   tags: ["#Javascript", "#Rails", "#Heroku","#postgresql"],
  //   source: "https://github.com/youssefrafra/park_it",
  //   visit: "https://parkit-youssefrafra.herokuapp.com/",
  //   id: 1,
  // }
];

export const competences = [
  { percent: 60, color: "#49f2f2", name: "ReactJS" },
  { percent: 80, color: "#ff2b2b", name: "Rails" },
  { percent: 85, color: "#fbc630", name: "JS" },
  { percent: 75, color: "#49f2f2", name: "Python" },
  { percent: 85, color: "#ff2b2b", name: "Ruby" },
  { percent: 60, color: "#23d400", name: "Node" },
  { percent: 85, color: "#0007d4", name: "HTML" },
  { percent: 80, color: "#cd00d4", name: "CSS" },
  { percent: 60, color: "#8192a1", name: "SQL" },
  { percent: 40, color: "#23d400", name: "MongoDB" },
  { percent: 30, color: "#cd00d4", name: "C++" },
  { percent: 50, color: "#34eb86", name: "R" },
];

export const experiences = [
  {
    jobTitle: `Stage Assistant Ingénieur IA chez INDIENOV (4 Mois)`,
    jobDate: "06/2022 - 09/2022",
    jobDesc: [
      "Améliorer le logiciel d’étiquetage de données.",
      "Analyser, traiter et stocker les données.",
      "Formaliser les problèmes et proposer des solutions théoriques ou des modèles statistiques et/ou de Machine Learning.",
      "Produire les Dashboards.",
      "Réaliser un modèle ML/DL de reconnaissance d'activité humaine."],
  },
  {
    jobTitle: "Search Engine Evaluator en Freelance chez Appen Inc.",
    jobDate: "2018 - 2020",
    jobDesc: [],
  },
  // {
  //   jobTitle: "Valet de chambre en interim chez Accor Hotels (Job étudiant)",
  //   jobDate: "2017 - 2020",
  //   jobDesc: [],
  // },
  // {
  //   jobTitle: "Cours de soutien en Mathématiques pour des élèves de terminal (Job étudiant)",
  //   jobDate: "2015 - 2017",
  //   jobDesc: [],
  // }
];