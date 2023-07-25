const feedbackForm = document.querySelector('.feedback-form');
const textMessage = document.querySelector('textarea');
const ls_Key = 'feedback-form-state';

updateOutput ();
feedbackForm.addEventListener("submit", saveMessage);

function saveMessage(evt){
    evt.preventDefault();
    localStorage.setItem(ls_Key, feedbackForm.elements.message.value);
    updateOutput();
    feedbackForm.reset();
};
function updateOutput() {
    textMessage.textContent = localStorage.getItem(ls_Key) || "";
}
