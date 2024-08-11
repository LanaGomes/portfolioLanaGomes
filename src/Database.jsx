import capa from "./images/capa.png";
import capaTimeSync from "./images/capaTimesync.png";
import logoBuddy from "./images/squareLogo.png";

export const projects = [
  {
    id: 1,
    projectImg: capaTimeSync,
    projectName: "TimeSync",
    technologiesUsed: " |Javascript | React | |Tailwind | Vite ",
    linkGithub: "https://github.com/LanaGomes/timeSync",
    linkProject: "https://time-sync-sable.vercel.app/",
    projectdescription:
      "Aplicativo para gerenciar as horas de foco e de descanso afim de atingir um equilíbrio entre eles. [ Projeto Pessoal | Finalizado ]",
  },
  {
    id: 2,
    projectImg: logoBuddy,
    projectName: "Buddy",
    technologiesUsed: "|Javascript | React | |Tailwind | Vite ",
    linkGithub: "https://github.com/LanaGomes/buddy",
    linkProject: "https://github.com/LanaGomes/portfolioLanaGomes",
    projectdescription:
      "Buddy é um aplicativo de controle de gastos  focados no cartão de crédito.Projeto em andamento.[ Projeto Pessoal | Em andamento ]",
  },

  {
    id: 3,
    projectImg: capa,
    projectName: "Marka3",
    technologiesUsed: "|Javascript | React | |Tailwind | Vite ", //a partir de 5 palavras, texto quebra
    linkGithub: "https://github.com/LanaGomes/timeSync",
    linkProject: "https://github.com/LanaGomes/portfolioLanaGomes",
    projectdescription:
      "Projeto em andamento, por favor aguardar finalização do mesmo.Obrigada",
  },
];
