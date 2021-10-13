module.exports = {
  email: "brittany.chiang@gmail.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/gegeson",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/masayuki_shige",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gegesonyushin",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/yuki-shigemasa-99b26a1b6/",
    },
    // {
    //   name: "Note",
    //   url: "https://codepen.io/bchiang7",
    // },
  ],

  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Products",
      url: "#products",
    },
  ],

  products: [
    {
      title: "Portfolio",
      discription: "This is my portforio. ",
      skills: ["Javascript", "React"],
      code_url: "https://github.com/gegeson/Portfolio",
    },
    {
      title: "Portfolio",
      discription: "This is my portforio. ",
      skills: ["Javascript", "React"],
      code_url: "https://github.com/gegeson/Portfolio",
    },
    {
      title: "Portfolio",
      discription: "This is my portforio. ",
      skills: ["Javascript", "React"],
      code_url: "https://github.com/gegeson/Portfolio",
    },
    {
      title: "Portfolio",
      discription: "This is my portforio. ",
      skills: ["Javascript", "React"],
      code_url: "https://github.com/gegeson/Portfolio",
    },
  ],

  experiences: [
    {
      title: "生誕！！",
      time: "1998/05/12",
    },
    {
      title: "私立東明館高等学校（佐賀県）",
      time: "12014-2017",
    },
    {
      title: "九州大学 工学部 建築学科",
      time: "2018",
    },
    {
      title: "LINE FUKUOKA Smart City Fukuoka Meetup#5 join!",
      time: "2021/03",
    },
    {
      title:
        "株式会社Oh my teeth 長期インターン join! PHP, Laravel,Javascript, Vue.js",
      time: "2021/03-現在",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
