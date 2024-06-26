const sideMenuOpenButton = document.querySelector('#navbar-menu-btn');
const sideMenuCloseButton = document.querySelector('#sidebar-menu-btn');
const sideMenu = document.querySelector('#sidebar');
const videoCardsContainer = document.querySelector('#cards-container');

sideMenuOpenButton.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden');
    sideMenu.classList.add('sideRightAnimation');
    videoCardsContainer.classList.toggle('sidebar-padding')
    
    setTimeout(() => {
        sideMenu.classList.remove('sideRightAnimation');
    }, 300);
});

sideMenuCloseButton.addEventListener("click", () => {
    sideMenu.classList.add('sideLeftAnimation');    
    setTimeout(() => {
        sideMenu.classList.remove('sideLeftAnimation');
        sideMenu.classList.toggle('hidden');
        videoCardsContainer.classList.toggle('sidebar-padding')
    }, 300);
});