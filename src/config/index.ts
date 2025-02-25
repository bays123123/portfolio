import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
  NowPageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";
import { sourceLinks } from "./source";

export const identity: Identity = {
  name: "Bayu Dwi Darmawan",
  logo: "/img/vinitshahdeo.png",
  email: "dwbayu526@gmail.com",
};

export const openGraphImage: string = "/img/vinitshahdeo-og.jpg";

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Now",
    url: "/now",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Bayu Dwi Darmawan | Portfolio",
    description:
      "Bayu Dwi Darmawan adalah orang yang pernah bekerja di bidang percetakan dengan pengalaman lebih dari 3 tahun dan saat ini saya masih bekerja sebagai operator mesin Proof Print di salah satu perusahaan.",
    image: openGraphImage,
    domain: "bayud.my.id",
    url: "https://bayud.my.id/",
  },
  role: "Graphic Production and Blogger",
  description:
    "Bekerja di sebuah percetakan dan memperdalam ilmu warna serta tetap aktif untuk berkarya lewat tulisan dengan tujuan berbagi pengalaman.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "About",
      url: "/about",
      icon: "mdi:account-circle",
    },
    {
      title: "Blog",
      url: "https://www.cariapa.id/",
      icon: "mdi:share-circle",
      external: true,
    },
    {
      title: "Resume",
      url: "#",
      icon: "mdi:github",
      external: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Bayu Dwi Darmawan",
    description:
      "Bayu Dwi Darmawan adalah orang yang pernah bekerja di bidang percetakan dengan pengalaman lebih dari 3 tahun dan saat ini saya masih bekerja sebagai operator mesin Proof Print di salah satu perusahaan.",
    image: openGraphImage,
    domain: "bayud.my.id/",
    url: "https://bayud.my.id/about/",
  },
  subtitle: "Terimakasih untuk terus mendukung saya, ini cerita singkat saya",
  about: {
    description: `
      Bayu Dwi Darmawan adalah orang yang pernah bekerja di bidang percetakan dengan pengalaman lebih dari 3 tahun dan saat ini saya masih bekerja sebagai operator mesin Proof Print di salah satu perusahaan.
    `,
    image_l: {
      url: "#",
      alt: "Vinit Shahdeo",
    },
    image_r: {
      url: "/img/vinit-shahdeo-square-1.jpg",
      alt: "Vinit Shahdeo",
    },
  },
  work: {
    description: `I'm a Senior Software Engineer at Novo, formerly Software Engineer II at Postman. I'm a GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.`,
    items: [
      {
        title: "Senior Software Engineer",
        company: {
          name: "Novo",
          image: "/logo/novo.jpg",
          url: "https://novo.co/",
        },
        date: "Aug 2023 - Present",
      },
      {
        title: "Software Engineer II",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://www.postman.com/",
        },
        date: "Jun 2021 - Sept 2023",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://postman.com/",
        },
        date: "Jun 2019 - May 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Featured (/featured)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured Articles, Stories & Interviews | Vinit Shahdeo",
    description:
      "Explore a curated collection of articles, insightful stories, and exclusive interviews with Vinit Shahdeo, a Software Engineer and a GitHub Star from Bengaluru, India.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/featured",
  },
  subtitle: "Thoughts, stories, and interviews.",
};

// Now (/now)
export const nowPageContent: NowPageContent = {
  seo: {
    title: "What I'm doing now | Vinit Shahdeo",
    description:
      "A updated log of what I'm building, learning, reading or exploring at different points of time.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/now",
  },
  title: "Now (Recently)",
  subtitle: "Where I’m at, what I’m focused on, and what I’m not.",
  sourceLinks,
};

export * from "./music";
export * from "./social";
export * from "./featured";
export * from "./source";
export * from "./analytics";
export * from "./github";
