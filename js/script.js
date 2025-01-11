import { headerScript } from "../js/header-script.js";
import { mainScript } from "../js/main-script.js";

////////////////////////////////////HEADER///////////////////////////////////////
fetch('../html/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        headerScript();
    })
    .catch(error => console.error('Error loading the header:', error));

////////////////////////////////////MAIN///////////////////////////////////////
fetch ('../html/main.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('main').innerHTML = html;
        mainScript();
    })
    .catch(error => console.error('Error loading the main:', error))