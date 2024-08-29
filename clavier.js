    //Declaration de variable
    let timer = document.getElementById("timer");
    let timeSelect = document.getElementById("timeSelect")
    let score = document.getElementById("score");
    let word = document.getElementById("word");
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let difficulter = document.getElementById("Difficulter");

    let point = 0;
    //*****************************************************

    //Fonction pour les different difficulter du jeu
    async function premierMot() {
    
        const response = await fetch('https://random-word.ryanrk.com/api/en/word/random/?maxlength=2');
        const myJson = await response.json();
        word.textContent = myJson.toString().toUpperCase();

    }

    premierMot();


    //Fonction pour les different difficulter du jeu
    async function motSimple() {
        try {
            const response = await fetch('https://random-word.ryanrk.com/api/en/word/random/?maxlength=4');
            const myJson = await response.json();
            word.textContent = myJson.toString().toUpperCase();
        } catch (error) {
            console.error('Error fetching the word:', error);
        }
    }



    async function motMoyen() {
        try {
            const response = await fetch('https://random-word.ryanrk.com/api/en/word/random/?minlength=5&maxlength=14');
            const myJson = await response.json();
            word.textContent = myJson.toString().toUpperCase();
        } catch (error) {
            console.error('Error fetching the word:', error);
        }
    }



    async function motCompliquer() {
        try {
            const response = await fetch('https://random-word.ryanrk.com/api/en/word/random/?minlength=14&maxlength=20');
            const myJson = await response.json();
            word.textContent = myJson.toString().toUpperCase();
        } catch (error) {
            console.error('Error fetching the word:', error);
        }
    }


    async function motExtrem() {
        try {
            const response = await fetch('https://random-word.ryanrk.com/api/en/word/random/?minlength=20&maxlength=35');
            const myJson = await response.json();
            word.textContent = myJson.toString().toUpperCase();
        } catch (error) {
            console.error('Error fetching the word:', error);
        }
    }

    function choixDifficulter() {

        if (difficulter.value == "Facile") {
            motSimple();
        } else if (difficulter.value == "Moyen") {
            motMoyen();

        } else if (difficulter.value == "Difficile") {
            motCompliquer();
        } else {
            motExtrem();
        }
    }

    btn.addEventListener('click', choixDifficulter);

    //*****************************************************





    //System de pointage

    function points() {
        if (input.value.toUpperCase() == word.textContent.toUpperCase()) {
            point = point + 1;
            score.textContent = point;
            choixDifficulter();
            input.value = "";
            word.style.color = "";

        } else {
            word.style.color = "red";
        }
    }



    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            points();
        }
    });

    //*****************************************************




    //System du timer  &&  control de visibiliter
    timer.textContent = "Timer: " + timeSelect.value;

    timeSelect.addEventListener('change', setTime);

    function setTime() {
        timer.textContent = "Timer: " + timeSelect.value + " s";
    }


    let interval;
    input.addEventListener('input', startTime);
    let checkTimer = false;

    function startTime() {
        if (!checkTimer) {
            checkTimer = true;

            let temps = timeSelect.value;


            interval = setInterval(function () {

                temps--;
                timer.textContent = "Timer: " + temps + " s";
                timeSelect.style.visibility = "hidden";
                difficulter.style.visibility = "hidden";

                if (temps == 0) {
                    clearInterval(interval);
                    word.style.visibility = "hidden";
                    input.style.visibility = "hidden";
                    btn.style.visibility = "hidden";
                    score.textContent = "Votre score est " + point;
                }


            }, 1000);
        }
    }
    //*****************************************************