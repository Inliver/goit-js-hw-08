import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const userEmail = document.querySelector('input');
const userMessage = document.querySelector('textarea');

form.addEventListener('submit', onSubmitForm)
form.addEventListener('input', throttle(onInputForm, 500))
 fillInput()   

const formData = {};

function fillInput(){
    const savedInfo = localStorage.getItem('feedback-form-state');
    const parsedInfo = JSON.parse(savedInfo);
    if(savedInfo){
        userEmail.value = parsedInfo.email;
        userMessage.value = parsedInfo.message;
        
    }
};



function onInputForm(e) {
    formData[e.target.name] = e.target.value;
   
    localStorage.setItem ('feedback-form-state', JSON.stringify(formData))
}



function onSubmitForm(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    console.log(formData)
}

