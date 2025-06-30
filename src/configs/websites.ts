import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Favorite Sites",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/SwagDaddyBrad"
      },
      {
        id: "my-linkedin",
        title: "LinkedIn",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/bradlee-kolvoord"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/SwagDaddyBrad"
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/CoolBrad-Scripts"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/BradleeKolvoord"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      }
    ]
  }
};

export default websites;
