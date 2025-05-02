let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Conceptueel Informatiemodel Samenwerkfunctionaliteit",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  specType: "IM",                 // Informatie Model
  //-- GW20240906: url naar base.css toegevoegd
  nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/style/",
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "dso",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "dso-cim-swf",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2025-04-29",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2025-04-29",
  //previousMaturity: "CV",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "TPOD team",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Nico Plat",
        company: "RWS CIV",
        companyURL: "https://www.rijkswaterstaat.nl/",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/dso-cim-swf",
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    Basisgeometrie: {
      id: "Basisgeometrie",
      title: "Basisgeometrie",
      href: "https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "30 september 2020"
    },
    GASSW: {
      id: "GAS-SW",
      title: "Globale Architectuurschets Samenwerkfunctionaliteit",
      href: "https://iplo.nl/publish/library/219/dso_-_gas_-_samenwerkingsfunctionaliteit.pdf",
      status: "Versie 2.0 (definitief)",
      publisher: "Geonovum",
      authors: ["Bas Crompvoets" , "Nico Plat" , "Silvion Moesan" ],
      date: "2020-01-09"
    },
    MIM: {
      id: "MIM",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    },
    CIMOW: {
      id: "CIMOW",
      title: "Conceptueel Informatiemodel Omgevingswet (CIMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/CIMOW_v2.1.0.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-01-07"
    },
    IMOW: {
      id: "IMOW",
      title: "Informatiemodel Omgevingswet (IMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.2.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2023-01-09"
    },
	OGAS: {
      id: "OGAS",
      title: "Overall Globale Architectuur Schets (OGAS) Versie 2.0.1",
      href: "https://iplo.nl/digitaal-stelsel/documenten/architectuurdocumenten/",
      status: "Definitief",
      publisher: "Programma Implementatie Omgevingswet",
      date: "2020-03-26"
    },
    STOP20: {
      id: "STOP20",
      title: "Standaard Officiële Publicaties",
      href: "https://koop.gitlab.io/STOP/standaard/2.0.0-rc/index.html",
      status: "Release Candidate",
      publisher: "KOOP",
      date: "2023-02-17"
    },
  },
};
