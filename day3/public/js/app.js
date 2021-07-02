const topMenu = document.querySelector('.top-menu');
const sideMenuElm = document.querySelector('.side-menu');
let widthSideMenu = sideMenuElm.offsetWidth;

window.onload = (e) => {
    // auto fit width of top menu base on the width of side menu
    topMenu.style = `width:calc(100% - ${widthSideMenu}px);`;
}