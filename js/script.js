"use strict"

let formData = {
    die: undefined,
    comfort: undefined,
    date: {
        day: undefined,
        month: undefined,
        year: undefined,
    },
    sleepDiePeopel: undefined,
    done: undefined,
}

let headerText = document.querySelector('.button-question__text');
let questionText = document.querySelector('.form-content__text');
let formContent = document.querySelector('.form-content__wrapper');
let questionNumber = document.querySelector('.question-number');
let button = document.querySelector('.button');
let mainContent = document.querySelector('.main-content');

function createPage1(data) {
    formData.die = data;
    document.location = 'pages/question.html';
}

function createPage3(data) {
    formData.comfort = data;

    headerText.textContent = "Уже совсем скоро Вы узнаете много интересного о своем будущем!";
    questionText.textContent = "Укажите свою дату рождения:";
    questionNumber.textContent ="Вопрос 3-5";
    
    let formPage3 = document.querySelector('.select-form__wrapper');
    formContent.style.display = 'none';
    formPage3.style.display ='block';
}

function createPage4() {
    let selectDay = document.querySelector('.select-day');
    let selectMonth = document.querySelector('.select-month');
    let selectYear = document.querySelector('.select-year');

    let dayValue = selectDay.options[selectDay.selectedIndex].value;
    let monthValue = selectMonth.options[selectMonth.selectedIndex].value;
    let yearValue = selectYear.options[selectYear.selectedIndex].value;

   
    if(dayValue != 'false' && monthValue != 'false' && yearValue != 'false') {
        formData.date.day = dayValue;
        formData.date.month = monthValue;
        formData.date.year = yearValue;

        let loader = document.querySelector('.loader-wrapper');

        mainContent.style.display = 'none';
        loader.style.display = 'block';

        function createPage() {
            let formPage3 = document.querySelector('.select-form__wrapper');
            let formPage4 = document.querySelector('.form-content__hidden');
            loader.style.display = 'none';
            headerText.textContent = 'Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!';
            questionText.textContent = 'Снятся ли Вам умершие люди?';
            questionNumber.textContent = 'Вопрос 4-5';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            mainContent.style.display = 'block';
        }

        setTimeout(createPage, 2000);

    } else {
        let checkEnter = [dayValue, monthValue, yearValue];
        let checkError = [selectDay, selectMonth, selectYear];

        for(let i = 0; i < checkEnter.length; i++) {
            if(checkEnter[i] == 'false') {
                checkError[i].classList.add('error');
            } else {
                checkError[i].classList.remove('error');
            }
        }
    }
}

function createPage5(data){
    formData.sleepDiePeopel = data;
    let curretDate = new Date();
    let currentOld = curretDate.getFullYear() - formData.date.year;

    if(currentOld >= 18 && currentOld <= 35) {
        headerText.textContent = 'По вам скучает очень близкий человек, которого больше нет в мире живых.';
    } else if(currentOld >= 36 && currentOld <= 45) {
        headerText.textContent = 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.';
    } else {
        headerText.textContent = 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.';
    }

    questionText.textContent = 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?';
    questionNumber.textContent = 'Вопрос 5-5';

    let formPage4 = document.querySelector('.form-content__hidden');
    let formPage5 = document.querySelector('.form-content__hidden_2');
    let addPopup = document.querySelector('.add_popup');
    formPage4.style.display = 'none';
    formPage5.style.display = 'block';
    addPopup.classList.add('bg_popup');
    headerText.style.color = "#202024";
}

function createPageResult(data) {
    formData.done = data;
    let progress = document.querySelector('.progress-wrapper');
    let resultPage = document.querySelector('.result-content');
    let questionHeader = document.querySelector('.header-question');
    let formContent = document.querySelector('.form-content');

    function progressbar() {
        let bar = document.querySelector('.progressbar-inside');
        let percent = document.querySelector('.progressbar-text');
        let width = 10;
        let id = setInterval(frame, 50);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                bar.style.width = width + '%';
                percent.innerHTML = width * 1 + '%';
            }
        }
    }

    mainContent.style.display = 'none';
    progress.style.display = 'block';

    progressbar();

    setTimeout(createPage, 4000);

    function createPage() { 
        mainContent.style.display = 'block';
        progress.style.display = 'none';
        questionHeader.style.display = 'none';
        formContent.style.display = 'none';
        questionNumber.style.display = 'none';
        resultPage.style.display = 'block';

        let nextDate = document.querySelector('.next-date');
        let currentDate = new Date();
        let day = currentDate.getDate();
        nextDate.innerHTML = day + 1;
    }

}

function showResult() {
    let show1 = document.querySelector('.show-1');
    let show2 = document.querySelector('.show-2');
    let show3 = document.querySelector('.show-3');
    let show4 = document.querySelector('.show-4');
    let show5 = document.querySelector('.show-5');
    let showList = document.querySelector('.result-show');

    showList.style.display = 'block';

    show1.innerHTML += formData.die + '';
    show2.innerHTML += formData.comfort + '';
    show3.innerHTML += formData.date.day + '.' + formData.date.month + '.' + formData.date.year;
    show4.innerHTML += formData.sleepDiePeopel;
    show5.innerHTML += formData.done;
}



