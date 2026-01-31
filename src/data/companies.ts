export type ApplicationStatus = "none" | "applied" | "accepted" | "rejected";

export interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
}

export const companies: Company[] = [
  {
    id: "sopra-steria",
    name: "Sopra Steria",
    logo: "https://logo.clearbit.com/soprasteria.com",
    website: "https://www.soprasteria.no",
    description: "Digital transformation and consulting services",
  },
  {
    id: "dnb",
    name: "DNB",
    logo: "https://logo.clearbit.com/dnb.no",
    website: "https://www.dnb.no",
    description: "Norway's largest financial services group",
  },
  {
    id: "telenor",
    name: "Telenor",
    logo: "https://logo.clearbit.com/telenor.com",
    website: "https://www.telenor.no",
    description: "Telecommunications company",
  },
  {
    id: "equinor",
    name: "Equinor",
    logo: "https://logo.clearbit.com/equinor.com",
    website: "https://www.equinor.com",
    description: "Energy company with strong IT division",
  },
  {
    id: "visma",
    name: "Visma",
    logo: "https://logo.clearbit.com/visma.com",
    website: "https://www.visma.no",
    description: "Cloud software solutions",
  },
  {
    id: "finn",
    name: "FINN.no",
    logo: "https://logo.clearbit.com/finn.no",
    website: "https://www.finn.no",
    description: "Norway's largest marketplace",
  },
  {
    id: "schibsted",
    name: "Schibsted",
    logo: "https://logo.clearbit.com/schibsted.com",
    website: "https://www.schibsted.com",
    description: "Media and technology company",
  },
  {
    id: "oda",
    name: "Oda",
    logo: "https://logo.clearbit.com/oda.com",
    website: "https://oda.com",
    description: "Online grocery tech company",
  },
  {
    id: "cognizant",
    name: "Cognizant",
    logo: "https://logo.clearbit.com/cognizant.com",
    website: "https://www.cognizant.com",
    description: "IT consulting and services",
  },
  {
    id: "capgemini",
    name: "Capgemini",
    logo: "https://logo.clearbit.com/capgemini.com",
    website: "https://www.capgemini.com/no-no/",
    description: "Global consulting and technology",
  },
  {
    id: "accenture",
    name: "Accenture",
    logo: "https://logo.clearbit.com/accenture.com",
    website: "https://www.accenture.com",
    description: "Professional services and consulting",
  },
  {
    id: "tietoevry",
    name: "TietoEVRY",
    logo: "https://logo.clearbit.com/tietoevry.com",
    website: "https://www.tietoevry.com",
    description: "Nordic digital services company",
  },
  {
    id: "bekk",
    name: "Bekk",
    logo: "https://logo.clearbit.com/bekk.no",
    website: "https://www.bekk.no",
    description: "Norwegian consulting company",
  },
  {
    id: "bouvet",
    name: "Bouvet",
    logo: "https://logo.clearbit.com/bouvet.no",
    website: "https://www.bouvet.no",
    description: "IT consulting company",
  },
  {
    id: "kantega",
    name: "Kantega",
    logo: "https://logo.clearbit.com/kantega.no",
    website: "https://www.kantega.no",
    description: "Software development consultancy",
  },
  {
    id: "kongsberg-digital",
    name: "Kongsberg Digital",
    logo: "https://logo.clearbit.com/kongsbergdigital.com",
    website: "https://www.kongsbergdigital.com",
    description: "Industrial software solutions",
  },
  {
    id: "mnemonic",
    name: "Mnemonic",
    logo: "https://logo.clearbit.com/mnemonic.io",
    website: "https://www.mnemonic.io",
    description: "Cybersecurity company",
  },
  {
    id: "nordic-semiconductor",
    name: "Nordic Semiconductor",
    logo: "https://logo.clearbit.com/nordicsemi.com",
    website: "https://www.nordicsemi.com",
    description: "Wireless chip technology",
  },
  {
    id: "kahoot",
    name: "Kahoot!",
    logo: "https://logo.clearbit.com/kahoot.com",
    website: "https://kahoot.com",
    description: "Learning platform company",
  },
  {
    id: "vipps",
    name: "Vipps MobilePay",
    logo: "https://logo.clearbit.com/vipps.no",
    website: "https://vipps.no",
    description: "Mobile payment solution",
  },

  {
    id: "twoday",
    name: "Twoday",
    logo: "https://logo.clearbit.com/twoday.no",
    website: "https://www.twoday.com/",
    description: "IT consulting and software development",
  },

  {
    id: "reflect",
    name: "Reflect",
    logo: "https://logo.clearbit.com/reflect.app",
    website: "https://www.reflektit.no/",
    description: "Recruitment partner for IT roles",
  },

  {
    id: "experis academy",
    name: "Experis Academy",
    logo: "https://logo.clearbit.com/experis.no",
    website: "https://www.experis.no/academy",
    description: "IT training and recruitment",
  },
];
