import capa from "./images/capa.png";
import capaTimeSync from "./images/capaTimesync.png";
import { useTranslation } from "react-i18next";

{
  const { t } = useTranslation();
}

export const projects = [
  {
    id: 1,
    projectImg: capaTimeSync,
    projectName: "TimeSync",
    technologiesUsed: " |Javascript | React | |Tailwind | Vite ",
    linkGithub: "https://github.com/LanaGomes/timeSync",
    linkProject: "https://time-sync-sable.vercel.app/",
    projectdescription: t("descricao"),
  },
  {
    id: 2,
    projectImg: capa,
    projectName: "Marka2",
    technologiesUsed: "|Javascript | React | |Tailwind | Vite ",
    linkGithub: "https://github.com/LanaGomes/portfolioLanaGomes",
    linkProject: "https://github.com/LanaGomes/portfolioLanaGomes",
    projectdescription:
      "Projeto em andamento, por favor aguardar finalização do mesmo.Obrigada",
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
