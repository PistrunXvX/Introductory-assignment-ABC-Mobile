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
}



