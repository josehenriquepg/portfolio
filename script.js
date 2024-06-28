function toggleMenu() {
  const menu = document.querySelector(".links-menu");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const chk = document.getElementById("chk")

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})

const translations = {
  br: {
    aboutRoute : "/sobre-mim",
    projectsRoute : "/projetos",
    contactsRoute : "/contato",
    profileText1 : "Olá, eu sou o",
    profileText2 : "Desenvolvedor Full Stack",
    profileText3 : "Sou um desenvolvedor full-stack dedicado a construir projetos do zero, desde o planejamento e design até a solução de problemas do mundo real com código. Domino tecnologias como Javascript, Go, Python, MySQL e muitas outras.",
    aboutText : "Conheça mais",
    aboutTitle : "Sobre mim",
    xpTitle : "Experiência",
    xpText : "Desenvolvedor Full Stack",
    educationTitle : "Educação",
    educationText : "Técnico em Informática e Análise e Desenvolvimento de Sistemas",
    aboutDescription : "Atuo na área da programação desde fevereiro de 2023, prestando serviços freelances, já trabalhei com diferentes clientes em diferentes projetos e níveis de dificuldade. ",
    projectsText : "Veja meus últimos",
    projectsTitle : "Projetos",
    contactsText : "Entre em",
    contactsTitle : "Contato",
  },
  en: {
    aboutRoute : "/about-me",
    projectsRoute : "/projects",
    contactsRoute : "/contact",
    profileText1 : "Hi, there! My name is",
    profileText2 : "Full Stack Developer",
    profileText3 : "I'm a full-stack developer dedicated to building projects from scratch, from planning and design to solving real-world problems with code. I am proficient in technologies such as Javascript, Go, Python, MySQL and many others.",
    aboutText : "Get to know more",
    aboutTitle : "About me",
    xpTitle : "Experience",
    xpText : "Full Stack Developer",
    educationTitle : "Education",
    educationText : "Computer Technician and Analysis and Systems Development",
    aboutDescription : "I have been working in the programming field since February 2023, providing freelance services, I have worked with different clients on different projects and difficulty levels.",
    projectsText : "See my latest",
    projectsTitle : "Projects",
    contactsText : "Talk to me!",
    contactsTitle : "Contacts",
  }
}

const langSelected = document.querySelector('select');
let routeAbout = document.querySelectorAll("#about-route");
let routeProjects = document.querySelectorAll("#projects-route");
let routeContacts = document.querySelectorAll("#contacts-route");
let textProfile1 = document.getElementById("profile-text1");
let textProfile2 = document.getElementById("profile-text2");
let textProfile3 = document.getElementById("profile-text3");
let textAbout = document.getElementById("about-text1");
let titleAbout = document.getElementById("about-title");
let titleXp = document.getElementById("experience");
let textXp = document.getElementById("experience-text");
let titleEducation = document.getElementById("education");
let textEducation = document.getElementById("education-text");
let descriptionAbout = document.getElementById("about-description");
let textProjects = document.getElementById("projects-text1");
let titleProjects = document.getElementById("projects-title");
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
    for (let i = 0; i < routeContacts.length; i++) {
      routeContacts[i].innerText = translations.br.contactsRoute;
    }
    for (let i = 0; i < routeProjects.length; i++) {
      routeProjects[i].innerText = translations.br.projectsRoute;
    }
    textProfile1.innerText = translations.br.profileText1;
    textProfile2.innerText = translations.br.profileText2;
    textProfile3.innerText = translations.br.profileText3;
    textAbout.innerText = translations.br.aboutText;
    titleAbout.innerText = translations.br.aboutTitle;
    titleXp.innerText = translations.br.xpTitle;
    textXp.innerText = translations.br.xpText;
    titleEducation.innerText = translations.br.educationTitle;
    textEducation.innerText = translations.br.educationText;
    descriptionAbout.innerText = translations.br.aboutDescription;
    titleProjects.innerText = translations.br.projectsTitle;
    textProjects.innerText = translations.br.projectsText;
    titleContacts.innerText = translations.br.contactsTitle;
    textContacts.innerText = translations.br.contactsText;
  } else if(language == "en") {
    for (let i = 0; i < routeAbout.length; i++) {
      routeAbout[i].innerText = translations.en.aboutRoute;
    }
    for (let i = 0; i < routeContacts.length; i++) {
      routeContacts[i].innerText = translations.en.contactsRoute;
    }
    for (let i = 0; i < routeProjects.length; i++) {
      routeProjects[i].innerText = translations.en.projectsRoute;
    }
    routeProjects.innerText = translations.en.projectsRoute;
    routeContacts.innerText = translations.en.contactsRoute;
    textProfile1.innerText = translations.en.profileText1;
    textProfile2.innerText = translations.en.profileText2;
    textProfile3.innerText = translations.en.profileText3;
    textAbout.innerText = translations.en.aboutText;
    titleAbout.innerText = translations.en.aboutTitle;
    titleXp.innerText = translations.en.xpTitle;
    textXp.innerText = translations.en.xpText;
    titleEducation.innerText = translations.en.educationTitle;
    textEducation.innerText = translations.en.educationText;
    descriptionAbout.innerText = translations.en.aboutDescription;
    titleProjects.innerText = translations.en.projectsTitle;
    textProjects.innerText = translations.en.projectsText;
    titleContacts.innerText = translations.en.contactsTitle;
    textContacts.innerText = translations.en.contactsText;
  }
}