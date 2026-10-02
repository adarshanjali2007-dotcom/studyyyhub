const menuButton=document.getElementById("menu-button");
const navMenu=document.getElementById("nav-menu");
const navLinks=document.querySelectorAll("#nav-menu a");

menuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("hidden");
});

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden");
    });
});


const welcomeScreen = document.getElementById("welcome-screen");
const mainPage = document.getElementById("main-page");
const welcomeForm = document.getElementById("welcome-form");
const nameInput = document.getElementById("name-input");
const userGreeting = document.getElementById("user-greeting");
const logoutButton = document.getElementById("logout-button");

function showMainPage(name) {
  userGreeting.textContent = `Welcome, ${name} 👋`;
  welcomeScreen.classList.add("hidden");
  mainPage.classList.remove("hidden");
}

const savedName = localStorage.getItem("studyHubName");

if (savedName && savedName.trim()) {
  showMainPage(savedName);
} else {
  welcomeScreen.classList.remove("hidden");
}

welcomeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (!name) {
    nameInput.setCustomValidity("Please enter your name.");
    nameInput.reportValidity();
    return;
  }

  localStorage.setItem("studyHubName", name);
  showMainPage(name);
});

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
});

logoutButton.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  localStorage.removeItem("studyHubName");
  welcomeScreen.classList.remove("hidden");
  mainPage.classList.add("hidden");
  nameInput.value = "";
});