//Mobile Menu Inner-working
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu(){
    menuOpenButton.classList.toggle("hidden");
    menuCloseButton.classList.toggle("hidden");
    mobileMenu.classList.toggle('hidden');
}

menuOpenButton.addEventListener("click", () => {
    toggleMobileMenu()
});

menuCloseButton.addEventListener("click", () => {
    toggleMobileMenu()
});
//Mobile Menu Inner-working

//Close Mobile Menu When User Click on Body Or Menu//
mobileMenu.addEventListener('click', () => {
    toggleMobileMenu()
});

//Close when clicked on body.
var containers = document.querySelectorAll('#home-section, #about-section, #skills-section, #contact-section');

for (let container of containers) {
    container.addEventListener("click", () => {
        if(menuOpenButton.classList.contains('hidden')){
            toggleMobileMenu();
        }
     }); 
}
//Close Mobile Menu When User Click on Body Or Menu//



//Current Year in Footer
let year = new Date().getFullYear();
document.getElementById('current-year').innerText = year;
//Current Year in Footer


//Dark and Light Mode Website 
//Get Initial Settings of the Website Or System
let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let userTheme = localStorage.getItem("theme");
//localStorage.removeItem("theme");

//Button to Change Theme
let darkMode = document.getElementById("dark-mode");
let lightMode = document.getElementById("light-mode");

let mobileDarkModeButton = document.getElementById('mobile-dark-mode-button');
let mobileLightModeButton = document.getElementById('mobile-light-mode-button');

//Preserve theme once set Initial Value in local storage
if (userTheme == "dark") {
    document.documentElement.classList.add("dark");
    darkMode.classList.add("hidden");
    mobileDarkModeButton.classList.add("hidden");
    lightMode.classList.remove("hidden");
    mobileLightModeButton.classList.remove("hidden");
} else {
    document.documentElement.classList.remove("dark");
    darkMode.classList.remove("hidden");
    mobileDarkModeButton.classList.remove("hidden");
    lightMode.classList.add("hidden");
    mobileLightModeButton.classList.add("hidden");
}

//Switch to Dark mode on User Event
function darkModeTheme() {
    iconToggle();
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
};

//Switch to Light Mode on User Click
function lightModeTheme() {
    iconToggle();
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
};

//Function to Change Them Icon
function iconToggle() {
    darkMode.classList.toggle("hidden");
    lightMode.classList.toggle("hidden");

    mobileDarkModeButton.classList.toggle('hidden');
    mobileLightModeButton.classList.toggle('hidden');
}
