const closeSidebarBtn = document.querySelector('.close-sidebar');
const openSidebarBtn = document.querySelector('.open-sidebar');
const sidebar = document.querySelector(".sidebar");
const themeChanger = document.querySelector("#changeTheme");
const body = document.body;

closeSidebarBtn.addEventListener('click', modifySidebar);
openSidebarBtn.addEventListener('click', modifySidebar);
themeChanger.addEventListener('click', changeTheme);

function modifySidebar() {
    sidebar.classList.toggle('close');
}

if (localStorage.getItem('theme') === "dark-theme") {
    body.classList.add("dark-theme");
    themeChanger.firstElementChild.classList.add('fa-sun');
    themeChanger.firstElementChild.classList.remove('fa-moon');
    themeChanger.lastElementChild.innerText = 'Tema luminoasa';
}
function changeTheme() {
    body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme") === 'dark-theme') {
        localStorage.setItem('theme', 'light-theme');
        themeChanger.firstElementChild.classList.remove('fa-sun');
        themeChanger.firstElementChild.classList.add('fa-moon');
        themeChanger.lastElementChild.innerText = 'Tema intunecata';
    } else {
        localStorage.setItem('theme', 'dark-theme');
        themeChanger.firstElementChild.classList.add('fa-sun');
        themeChanger.firstElementChild.classList.remove('fa-moon');
        themeChanger.lastElementChild.innerText = 'Tema luminoasa';
    }
}
