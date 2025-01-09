import { headerScript } from "js/header-script.js";

////////////////////////////////////HEADER///////////////////////////////////////
fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        headerScript();
    })
    .catch(error => console.error('Error loading the file:', error));

