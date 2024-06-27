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
  en: {
    aboutRoute : "/about-me",
    projectsRoute : "/projects",
    contactsRoute : "/contact",
    profileText1 : "Hi, there! My name is",
    profileText2 : "Full Stack Developer",
    aboutText : "Get to know more",
    aboutTitle : "About me",
    xpTitle : "Experience",
    xpText : "Full Stack Developer",
    educationTitle : "Education",
    educationText : "Computer Technician and Analysis and Systems Development",
    aboutDescription : "I have been working in the programming field since February 2023, providing freelance services, I have worked with different clients on different projects and difficulty levels. I am proficient in technologies such as Javascript, Go, Python, MySQL and many others. I'm a full-stack developer dedicated to building projects from scratch, from planning and design to solving real-world problems with code.",
    projectsText : "See my latest",
    projectsTitle : "Projects",
    contactsText : "Talk to me!",
    contactsTitle : "Contacts"
  }
}

const langSelected = document.querySelector('select');
let routeAbout = document.querySelectorAll("#about-route");
let routeProjects = document.querySelectorAll("#projects-route");
let routeContacts = document.querySelectorAll("#contacts-route");
let textProfile1 = document.getElementById("profile-text1");
let textProfile2 = document.getElementById("profile-text2");
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
    window.location.reload();
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