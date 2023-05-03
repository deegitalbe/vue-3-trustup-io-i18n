import { Client } from "@henrotaym/api-client";
import { TranslationCredential } from "../../credentials";

class Translation {
  private client: Client;

  constructor() {
    this.client = new Client().setCredential(new TranslationCredential());
  }
  //TODO appname in params
  public async index() {
    // const request = new Request()
    //   .setVerb("GET")
    //   .setUrl(`${appName}/translations.json`);
    // const response = await this.client.try(request);

    // if (response.failed()) return;

    // return response.get();

    const translations = {
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
          landings: {
            start_button: "Installer l'application",
            start_button_loading: "Installation en cours...",
            trial_duration: ":duration jours d'essai",
            back_link: "Retour",
            installation: {
              installing: {
                title: "Votre application est en cours d'installation...",
                text: "Ce processus peut prendre jusqu'à une minute.",
              },
              installed: {
                title: "Votre application :app est installée !",
                text: "Félicitations, l'installation de votre application :app s'est correctement déroulée. Vous pouvez dès à présent profitez de toutes ses fonctionnalités !",
                button: "Accéder à l'application",
              },
              error: {
                title: "Une erreur s'est produire lors de l'installation...",
                text: "Malheureusement l'application :app n'a pas pu être installée correctement. Veuillez nous contacter ou réessayer dans quelques minutes.",
                button: "Retour à l'accueil",
              },
            },
            invoicing: {
              title:
                "TrustUp Facturation, une app de facturation facile à utiliser​",
              checks: [
                "Vos devis & factures en quelques clics",
                "Rappels de payements automatiques",
                "Bibliothèque d'ouvrage",
                "Accessible sur ordinateur et smartphone",
                "Connectez vos comptes bancaires",
              ],
            },
            tasks: {
              title:
                "Avec Tâches, organisez vos journées et celles de vos équipes",
              checks: [
                "Programmez des tâches et leurs échéances",
                "Visualisez toutes vos tâches dans un calendrier",
                "Définissez des niveaux de priorités",
                "Assignez des ouvriers ou employés à des tâches",
                "Ajoutez un ou plusieurs commentaires par tâche",
              ],
            },
            agenda: {
              title:
                "TrustUp Agenda, gérez votre planing et celui de vos équipes",
              checks: [
                "Gérez votre planning",
                "Gérez l'agenda de vos ouvriers",
                "Accessible sur ordinateur, tablette et smartphone",
              ],
            },
            timetracker: {
              title:
                "Gardez le contrôle sur votre planning et celui de vos équipes",
              checks: [
                "Gérez votre planning",
                "Optimiser vos resources",
                "Pointeuse GPS",
                "Rapports en temps réel",
                "Facturation en un clic",
                "Accessible sur ordinateur, tablette et smartphone",
              ],
            },
            worksite: {
              title: "Gérez votre chantier de A à Z",
              checks: [
                "Centralisez tous vos documents",
                "Surveillez la rentabilité d'un chantier",
                "Optimisez vos liquidités",
                "Gérez vos tâches et celles de votre équipe",
                "Facturez vos états d'avancement",
                "Passez vos commandes fournisseurs",
              ],
            },
          },
          accountant: "Comptable",
        },
        auth: {
          failed:
            "Ces identifiants ne correspondent pas à nos enregistrements.",
          password: "Le mot de passe fourni est incorrect.",
          throttle:
            "Tentatives de connexion trop nombreuses. Veuillez essayer de nouveau dans :seconds secondes.",
        },
      },
    };

    const fakeFetch = <TValue>(value: TValue, delay = 3000) =>
      new Promise<TValue>((resolve) => setTimeout(() => resolve(value), delay));

    const fetchTranslations = () => fakeFetch(translations);

    return fetchTranslations();
  }
}
export default Translation;
