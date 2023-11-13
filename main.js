import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'
import 'intl-tel-input/build/js/utils.js'
import './style.css'
import './assets/scripts/hamburger'
import './assets/scripts/questionCollapse'
import { showAlert, clearFields, clearFieldsContact } from './assets/scripts/alerts';


const emailForm = document.querySelector("#emailForm");
const message = document.querySelector("#message");

const fwhat = document.querySelector('#fwhat')
const ffrom = document.querySelector('#ffrom')
const fto = document.querySelector('#fto')
const fweight = document.querySelector('#fweight')
const fradio1 = document.querySelector('#fradio1')
const phone = document.querySelector("#phone");
const femail = document.querySelector('#femail')



if (emailForm) {
    const iti = intlTelInput(phone, {
        initialCountry: "auto",
        geoIpLookup: callback => {
            fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        },
    });

    const errorMap = ["Неправильный номер", "Неправильный код страны", "Слишком короткий номер", "Слишком длинный номер", "Неправильный номер"];

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = iti.getSelectedCountryData();

        if (!iti.isValidNumber()) {
            const errorCode = iti.getValidationError();
            message.innerHTML = errorMap[errorCode];
            return false;
        }

        const readyToGo = fradio1.checked ? 'Да' : 'Нет'

        Email.send({
            SecureToken: "743efe48-0d63-492d-98b0-d1399b8cbd63",
            To: 'admin@alemzholy.kz',
            From: 'alemzholcargo@gmail.com',
            Subject: "Alemzhol cargo",
            Body: `Что везем:              ${fwhat.value}<br>
               Откуда:                 ${ffrom.value}<br>
               Куда:                   ${fto.value}<br>
               Вес и габариты груза:   ${fweight.value}<br>
               Груз готов к отправке:  ${fradio1.checked ? 'Да' : 'Нет'}<br>
               Номер телефона:         ${iti.getNumber()}<br>
               email:                  ${femail.value}<br>
               <br><br>
               Страна:                 ${data.name}<br>
               Area Code:              ${data.areaCodes}<br>
               dialcode:               ${data.dialCode}<br>
               iso2:                   ${data.iso2}<br>
               priority:               ${data.priority}<br>
               `
        }).then(() => showAlert("Ваше сообщение успешно отправлено!", true))
            .catch((e) => showAlert(`Простите, сообщение не отправлено! ${e.message}`, false));


        const url =
            'https://wa.me/77479903858' + '?text=' +
            'Товар:' + fwhat.value + '%0a' +
            'Откуда:' + ffrom.value + '%0a' +
            'Куда:' + fto.value + '%0a' +
            'Вес и габариты груза:' + fweight.value + '%0a' +
            'Груз готов к отправке:' + readyToGo + '%0a' +
            'Номер телефона:' + iti.getNumber() + '%0a' +
            'email:' + femail.value + '%0a%0a' +
            'Страна:' + data.name + '%0a' +
            'Area Code:' + data.areaCodes + '%0a' +
            'dialcode:' + data.dialCode + '%0a' +
            'iso2:' + data.iso2 + '%0a' +
            'priority:' + data.priority + '%0a%0a' +
            'Здраствуйте, рассчитайте груз!';

        window.open(url, '_blank').focus()

        clearFields()

    })
}

const contactForm = document.querySelector('#contactForm')

const cemail = document.querySelector('#cemail')
const cname = document.querySelector('#cname')
const ctext = document.querySelector('#ctext')

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        Email.send({
            SecureToken: "743efe48-0d63-492d-98b0-d1399b8cbd63",
            To: 'order@alemzholy.kz',
            From: 'alemzholcargo@gmail.com',
            Subject: "Alemzhol cargo",
            Body: `email:                  ${cemail.value}<br>
               name:                   ${cname.value}<br>
               text:                   ${ctext.value}<br>`

        }).then(() => showAlert("Ваше сообщение успешно отправлено!", true))
            .catch((e) => showAlert(`Простите, сообщение не отправлено! ${e.message}`, false));


        const url =
            'https://wa.me/77479903858' + '?text=' +
            'email:' + cemail.value + '%0a' +
            'ftext:' + ctext.value + '%0a%0a' +
            'Здраствуйте, ' + cname.value + ', рады вам помочь!' + '%0a%0a';

        window.open(url, '_blank').focus()

        clearFieldsContact()

    })
}