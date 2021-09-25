const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-message');

// formRef.addEventListener('submit', (event, Vova, Sveta)=>{onFormSubmit(event, 'Vova', 'Sveta')});

// function onFormSubmit(event, Vova, Sveta) {
//   event.preventDefault();
//   console.log(event);
// }
getMessageFromLS();

formRef.addEventListener('submit', onFormSubmit);

textareaRef.addEventListener('input', (event) => {
  let message = event.target.value;
  if (message.length > 0) {
    saveToLS('feedbackMessage', message);    
  }
})


function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  let userName = form.elements.name.value;
  let userMail = form.elements.mail.value;
  let userText = form.elements.message.value;
    
  
  // console.log(form.elements.message.value);
  // console.log(form.elements.mail.value);
}

function saveToLS(lsKey, lsData) {
  localStorage.setItem(lsKey, JSON.stringify(lsData))
}

function getMessageFromLS() {
  let feedbackMessage = localStorage.getItem('feefbackMessage');
  if (feedbackMessage) {
    textareaRef.value = JSON.parse(feedbackMessage);
  }
}