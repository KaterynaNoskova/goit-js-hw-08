import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const ls_Key = 'feedback-form-state';
let currentData;

feedbackForm.addEventListener('input', throttle(onInput, 500));

const currentLocalData = JSON.parse(localStorage.getItem(ls_Key));

if(currentLocalData) {
    feedbackForm.email.value = currentLocalData.email;
    feedbackForm.message.value = currentLocalData.message;
    currentData = {
        email:feedbackForm.email.value,
        message:feedbackForm.message.value,
    };
};

function onInput(){
    currentData = {
        email:feedbackForm.email.value,
        message:feedbackForm.message.value,
    };
    localStorage.setItem(ls_Key, JSON.stringify(currentData));
};

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(ls_Key);
};
