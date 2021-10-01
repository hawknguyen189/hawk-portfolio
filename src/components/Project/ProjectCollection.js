const ProjectCollection1 = [
  {
    websiteId: "portfolioWebsite",
    websiteName: "Portfolio Website",
    websiteImage: "portfolio-website-small",
    websiteContent:
      "This is one of my very first website. It works as a workshop to store my pet projects and a pilot for my new knowledge.",
    websiteIntro:
      "I, like many other people,enjoy spending my time on swimming in the Ocean of Coding Knowledge. Im looking forward to becoming an experienced full-stack web developer in the next 3 years.",
    websiteLink: "https://www.findhawk.me/",
    websiteGit: "https://github.com/HawkNguyen/hawk-portfolio",
    responsiveImage: "mocked-up-website.jpg",
    techonologies: ["React", "Bootstrap", "React Router", "Sass"],
    extra:
      "This project got animated by WOW and Animate.css which help add the amazing animations and reveal animations when scrolling. Also, the react-router-hash-link package helps to add local scrolling for internal anchor.",
  },
  {
    websiteId: "storeTemplate",
    websiteName: "Pom Beard",
    websiteImage: "store-template",
    websiteContent:
      "This is an ecommerce site for Pom Beard store. Everything is built from the scratch.",
    websiteIntro:
      "I build this store template upon the request from pom beard. The images and contents will be replaced by their materials soon",
    websiteGit: "https://github.com/hawknguyen189/temp-ecommerce",
    websiteLink: "https://hawknguyen189.github.io/temp-ecommerce",
    responsiveImage: "mockup-pombeard.png",
    techonologies: [
      "React",
      "Bootstrap",
      "FlixCarousel & Sass",
      "Contentful & Firebase",
    ],
    extra:
      "This project aims to build a fee-free website based on Headless CMS - Contentful & Google Cloud API. Stripe is integrated for the payment",
  },
  {
    websiteId: "cekicoStore",
    websiteName: "Cekico Store",
    websiteImage: "cekico",
    websiteContent:
      "This is another ecommerce project for selling Arduino microcontroller board & kit. As always, my project aims to build a fee-free site for small & medium bizs.",
    websiteIntro: `It was fun to build something that could help supply the chips & controllers to the Concordia students.  
      As per special request from the client, I couldn't update the github for this project.`,
    websiteLink: "https://react-graphql-dashboard.vercel.app/store",
    websiteGit: "https://github.com/HawkNguyen/",
    responsiveImage: "mockup-cekico.png",
    techonologies: [
      "NextJS",
      "SWR",
      "Dynamic Loading",
      "Google Cloud",
      "GraphQL",
      "Firebase Authentication",
      "Headless CMS Contentful",
      "Database from Google Cloud",
    ],
    extra: `It's my first time to work on NextJS, SWR, GraphQL and to be honest it's a really amazing experience. Even though I've been working on React for years NextJS is kinda something special.
    Although I couldn't share the code behind this project, it's happy to snip the code out if requested. Just let me know via email.
    For this particular project, I used most of NextJS's special features like API routes, Import CSS, Dynamic Loading, SSR with the support of SWR to fetch and manage cached database.
    CMS is handled by Contentful, authentication by Firebase, and database by Google Cloud.`,
  },
  {
    websiteId: "binanceTradingBot",
    websiteName: "Binance Trading Bot",
    websiteImage: "binance-bot-trading",
    websiteContent:
      "Thanks to Covid19 and the rise of Crypto Currency, I have this chance to develop my first bot ever running on Binance and Etherscan.",
    websiteIntro:
      "It's not really a success though however I & my friend do have funs building on something new & earn some passive income.",
    websiteLink: "https://www.findhawk.me/",
    websiteGit: "https://github.com/hawknguyen189/hawk-trading-dashboard",
    responsiveImage: "mockup-trading.png",
    techonologies: ["node-binance-api", "Goolge Chart", "Boostrap 5"],
    extra: `Bots feature:  trailing stop, panic sell, run test on EMA, SMA & Cross Spot. 
      It's able to pull the top volume coins then do the cross check between EMA, SMA, and Spot price to make decision on trading`,
  },
];
const ProjectCollection2 = [
  {
    websiteId: "rarityAdventure",
    websiteName: "Rarity - The Goddess Tower",
    websiteImage: "rarity-adventure",
    websiteContent:
      "It is the latest project I'm working on now. It's a blockchain-based game. Web3 allows us to interact directly with blockchain.",
    websiteIntro:
      "It's still under development. I'm working with 2 other devs to work on a new MOD for the game",
    websiteLink: "https://rarity-hawk.netlify.app/",
    websiteGit: "https://github.com/hawknguyen189/rarity-the-goddess-tower",
    responsiveImage: "mockup-rarity.png",
    techonologies: ["EthersJS", "Boostrap 5", "Web3", "Solidity"],
    extra: `Started by a new open-source side project of Andre Cronje, I developed the UI site to interact with the smart contract on fantom blockchain.
      I'm looking forward building a new mod called The Goddes Tower which could be the first hybrid idle blockchain-based game`,
  },
  {
    websiteId: "LoremIpsum5",
    websiteName: "Coming soon...",
    websiteImage: "coming-soon",
    websiteContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante.",
  },
  {
    websiteId: "LoremIpsum6",
    websiteName: "Coming soon...",
    websiteImage: "coming-soon",
    websiteContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante.",
  },
  {
    websiteId: "LoremIpsum7",
    websiteName: "Coming soon...",
    websiteImage: "coming-soon",
    websiteContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante.",
  },
];
export { ProjectCollection1, ProjectCollection2 };
