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
function changeTheme() {
    if(body.classList.contains('light-theme')) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.addItem("theme", "dark-theme");
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.addItem("theme", "light-theme");
    }
}