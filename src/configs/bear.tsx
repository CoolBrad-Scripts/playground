import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm Cool Brad..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "blog",
    title: "Blog",
    icon: "i-octicon:browser",
    md: []
  },
  {
    id: "free",
    title: "Free Releases",
    icon: "i-octicon:repo",
    md: [
      {
        id: "doj-forms",
        title: "DOJ Forms",
        file: "https://raw.githubusercontent.com/CoolBrad-Scripts/doj-forms/refs/heads/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A collection of DOJ forms for use in FiveM...",
        link: "https://github.com/CoolBrad-Scripts/doj-forms"
      },
      {
        id: "cb-recycling",
        title: "CB Recycling",
        file: "https://raw.githubusercontent.com/CoolBrad-Scripts/cb-recycling/refs/heads/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A Rust-like recycling system for FiveM...",
        link: "https://github.com/CoolBrad-Scripts/cb-recycling"
      }
    ]
  }
  /*
  {
    id: "paid",
    title: "Paid Releases",
    icon: "i-octicon:repo",
    md: [
      {
        id: "doj-forms",
        title: "DOJ Forms",
        file: "https://raw.githubusercontent.com/CoolBrad-Scripts/doj-forms/refs/heads/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A deep learning framework implemented in Numpy...",
        link: "https://github.com/Renovamen/flint"
      },
    ]
  }
  */
];

export default bear;
