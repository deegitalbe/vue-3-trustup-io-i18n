import { createI18n } from "vue-i18n";
// import { Translation } from "../api/endpoints";

// TODO fetch translation with endpoint
// const endpoint = new Translation();
// const messages = await endpoint.index(import.meta.env.VITE_APP_NAME);

export default createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages: {
    fr: {
      apps: {
        agenda: "Agenda",
        scaffolding: "Scaffolding",
        contact: "Contact",
        worksite: "Chantiers",
        tasks: "Tâches",
        invoicing: "Facturation",
        dashboard: "MyTrustUp",
        timetracker: "Planning",
        settings: "Paramètres",
      },
    },
  },
});
