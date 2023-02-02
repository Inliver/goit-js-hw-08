import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const userEmail = document.querySelector('input');
const userMessage = document.querySelector('textarea');

form.addEventListener('submit', onSubmitForm)
form.addEventListener('input', throttle(onInputForm, 500))

fillInput() 

const formData = { };


function fillInput(){
    const savedInfo = localStorage.getItem('feedback-form-state');
    const parsedInfo = JSON.parse(savedInfo);
    if (savedInfo) {
        if (parsedInfo.email) {
            userEmail.value = parsedInfo.email;

        }
        if (parsedInfo.message) {
            userMessage.value = parsedInfo.message;

        }
    }
};



function onInputForm(e) {
    const savedInfo = localStorage.getItem('feedback-form-state');
    if (savedInfo) {
        if (JSON.parse(savedInfo).email) {           
            formData.email = JSON.parse(savedInfo).email;
        }
        if (JSON.parse(savedInfo).message) {
            formData.message = JSON.parse(savedInfo).message;
        }
    }
    formData[e.target.name] = e.target.value.trim();
   
    localStorage.setItem ('feedback-form-state', JSON.stringify(formData))
}



function onSubmitForm(e) { 
    if (!userEmail.value) {
        window.alert("Вкажіть електронну пошту");
        return;
    }
    
     if (!userMessage.value) {
         window.alert("Здається ви забули написати коментар 🤣");
         return;
     }

    
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData.email = '';
    formData.message ='';
}

