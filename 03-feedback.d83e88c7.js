!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("textarea"),a="feedback-form-state";function n(){t.textContent=localStorage.getItem(a)||""}n(),e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.setItem(a,e.elements.message.value),n(),e.reset()}))}();
//# sourceMappingURL=03-feedback.d83e88c7.js.map
