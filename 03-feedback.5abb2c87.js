const e=document.querySelector(".feedback-form"),t=document.querySelector("textarea");function a(){t.textContent=localStorage.getItem("feedback-form-state")||""}a(),e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.setItem("feedback-form-state",e.elements.message.value),a(),e.reset()}));
//# sourceMappingURL=03-feedback.5abb2c87.js.map
