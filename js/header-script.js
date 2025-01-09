//....................time....................//
export function headerScript(){
    async function fetchTime(timezone, elementId) {
        try {
            const response = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=${timezone}`);
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            const data = await response.json();
            const time = `${data.date} ${data.time}`; 
            document.getElementById(elementId).textContent = time;
        } catch (error) {
            console.error(error);
            document.getElementById(elementId).textContent = 'Ошибка загрузки времени';
        }
    
    }
        setInterval(() => {
            fetchTime('Asia/Taipei', 'twTime');
            fetchTime('America/New_York', 'usTime');
        }, 1000);
    
    //..................language................//
    const twLang = document.getElementById('twLang');
    const usLang = document.getElementById('usLang');
    
    usLang.addEventListener('click', function(){
        usLang.classList.add('language-active-us');
        twLang.classList.remove('language-active-tw');
        switchLang('usLang');
    });
    
    twLang.addEventListener('click', function(){
        twLang.classList.add('language-active-tw');
        usLang.classList.remove('language-active-us');
        switchLang('twLang');
    });


    let languageContent = {
        "twLang": {
            "about": "эбоутус",
            "passport": "паспортес"
        },
        "usLang": {
            "about": "About",
            "passport": "Passport"
        }
    }
    function switchLang(lang) {
        for(let key in languageContent[lang]){
            document.getElementById(key).innerHTML = languageContent[lang][key];
        }
    }
}

