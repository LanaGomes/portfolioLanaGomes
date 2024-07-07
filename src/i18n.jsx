import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      currículo: "Resume",
      desenvolvimento_Web: "Web Development",
      success_msg: "Message sent :) I will contact you soon.",
      contato: "Contact",
      nameLabel: "Name",
      insira_nome: "Insert your name",
      insira_email: "Insert your e-mail",
      insira_message: "Insert your message",
      enviar: "Send",
      message: "Message",
      projetos: "Projects",
      descricao:
        "Application to manage focus and rest hours in order to achieve a balance between them.",
    },
  },
  pt: {
    translation: {
      currículo: "Currículo",
      desenvolvimento_Web: "Desenvolvimento Web",
      success_msg: "Mensagem enviada :)  Entrarei em contato em breve",
      contato: "Contato",
      nameLabel: "Nome",
      insira_nome: "Insira seu nome",
      insira_email: "Insira seu e-mail",
      insira_message: "Insira sua mensagem",
      enviar: "Enviar",
      message: "Mensagem",
      projetos: "Projetos",
      descricao:
        "Aplicativo para gerenciar as horas de foco e de descanso afim de atingir um equilíbrio entre eles.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
