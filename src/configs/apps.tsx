import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  /*
  {
    id: "typora",
    title: "Typora",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/typora.png",
    content: <Typora />
  },
  */
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  /*
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: "img/icons/facetime.png",
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  */
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/SwagDaddyBrad"
  },
  {
    id: "fivem",
    title: "FiveM",
    desktop: false,
    img: "img/icons/fivem.png",
    link: "https://forum.cfx.re/u/coolbradscripts/summary"
  },
  {
    id: "coolbrad",
    title: "Cool Brad",
    desktop: false,
    img: "img/icons/coolbrad.png",
    link: "https://github.com/CoolBrad-Scripts"
  },
  {
    id: "tebex",
    title: "Tebex",
    desktop: false,
    img: "img/icons/tebex.png",
    link: "https://store.coolbrad.com"
  },
  {
    id: "discord",
    title: "Discord",
    desktop: false,
    img: "img/icons/discord.png",
    link: "https://discord.gg/FQtN5FXcG5"
  },
  {
    id: "gitbook",
    title: "Gitbook",
    desktop: false,
    img: "img/icons/gitbook.png",
    link: "https://coolbrad.gitbook.io/"
  },
  {
    id: "youtube",
    title: "YouTube",
    desktop: false,
    img: "img/icons/youtube.png",
    link: "https://www.youtube.com/@CoolBradScripts"
  }
];

export default apps;
