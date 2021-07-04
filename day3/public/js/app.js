const topMenuElm = document.querySelector('.top-menu');
const sideMenuElm = document.querySelector('.side-menu');
const mainElm = document.querySelector('.main');
const tabs = document.querySelectorAll('.tab');
let activeTab;
let widthSideMenu = sideMenuElm.offsetWidth;
let widthTopMenu = topMenuElm.offsetHeight;

// Get the actived tab.
activeTab = document.querySelector('.tab.active');

// Handle events
window.onload = (e) => {    
    // auto fit width of top menu base on the width of side menu
    topMenuElm.style = `width:calc(100% - ${widthSideMenu}px);`;

    // Auto fix margin for the main base on the width and height of both side menu and top menu
    mainElm.style = `margin-top: ${widthTopMenu}px; width:calc(100% - ${widthSideMenu}px); float:right;`;

    // Position of active tab on the first sight
    positionLine(activeTab);
}

tabs.forEach(tab => {
    tab.onclick = (e) => {
        //Reset by remove all active classes from single tab
        resetActiveTab(tabs);

        // Set the active class for tab be clicked.
        tab.classList.add('active');

        activeTab = document.querySelector('.tab.active');
        console.log(tab)
        // Re-position line
        positionLine(activeTab);
    }
})

// Functions
function positionLine(elm) {
    const line = document.querySelector('.line');
    const left = elm.offsetLeft;
    const width = elm.offsetWidth;

    line.style = `
    left: ${left}px;
    width: ${width}px;
    `
}

function resetActiveTab(elms) {
    elms.forEach(elm => elm.classList.remove('active'))
}