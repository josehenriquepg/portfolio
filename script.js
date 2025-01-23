const chk = document.getElementById("chk")

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})

const scrollers = document.querySelectorAll(".about-techs");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const translations = {
  br: {
    profileText1 : "Olá, eu sou o",
    profileText2 : "Desenvolvedor Full Stack",
    profileText3 : "Sou um desenvolvedor full-stack dedicado a construir projetos do zero, desde o planejamento e design até a solução de problemas do mundo real com código. Domino tecnologias como Javascript, Go, Python, MySQL e muitas outras.",
    aboutText : "Conheça mais",
    aboutTitle : "Sobre mim",
    contactsText : "Entre em",
    contactsTitle : "Contato",
  },
  en: {
    profileText1 : "Hi, there! My name is",
    profileText2 : "Full Stack Developer",
    profileText3 : "I'm a full-stack developer dedicated to building projects from scratch, from planning and design to solving real-world problems with code. I am proficient in technologies such as Javascript, Go, Python, MySQL and many others.",
    aboutText : "Get to know more",
    aboutTitle : "About me",
    contactsText : "Talk to me!",
    contactsTitle : "Contacts",
  }
}

const langSelected = document.querySelector("select");
let textProfile1 = document.getElementById("profile-text1");
let textProfile2 = document.getElementById("profile-text2");
let textProfile3 = document.getElementById("profile-text3");
let textAbout = document.getElementById("about-text1");
let titleAbout = document.getElementById("about-title");
let textContacts = document.getElementById("contacts-text1");
let titleContacts = document.getElementById("contacts-title");

langSelected.addEventListener("change", (event) => {
  setLanguage(event.target.value);
})

const setLanguage = (language) => {
  if(language == "br") {
    for (let i = 0; i < routeAbout.length; i++) {
      routeAbout[i].innerText = translations.br.aboutRoute;
    }
    for (let i = 0; i < routeProjects.length; i++) {
      routeProjects[i].innerText = translations.br.projectsRoute;
    }
    textProfile1.innerText = translations.br.profileText1;
    textProfile2.innerText = translations.br.profileText2;
    textProfile3.innerText = translations.br.profileText3;
    textAbout.innerText = translations.br.aboutText;
    titleAbout.innerText = translations.br.aboutTitle;
    titleContacts.innerText = translations.br.contactsTitle;
    textContacts.innerText = translations.br.contactsText;
  } else if(language == "en") {
    for (let i = 0; i < routeAbout.length; i++) {
      routeAbout[i].innerText = translations.en.aboutRoute;
    }
    for (let i = 0; i < routeProjects.length; i++) {
      routeProjects[i].innerText = translations.en.projectsRoute;
    }
    textProfile1.innerText = translations.en.profileText1;
    textProfile2.innerText = translations.en.profileText2;
    textProfile3.innerText = translations.en.profileText3;
    textAbout.innerText = translations.en.aboutText;
    titleAbout.innerText = translations.en.aboutTitle;
    titleContacts.innerText = translations.en.contactsTitle;
    textContacts.innerText = translations.en.contactsText;
  }
}