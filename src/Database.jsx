import marka from "./images/marka.jpg";
import capaTimeSync from "./images/capaTimesync.png";
import logoBuddy from "./images/logoBuddy.png";

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
    projectImg: marka,
    projectName: "Marka",
    technologiesUsed: "|Javascript | React | |Tailwind | Vite ", //a partir de 5 palavras, texto quebra
    linkGithub: "",
    linkProject: "",
    projectdescription:
      "Agendamento fácil e rápido para microempreendedores oferecerem aos seus clientes.[ Projeto Pessoal | Em andamento ]",
  },
];
