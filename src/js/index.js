const checkbox = document.querySelectorAll('.form_plane input[type=checkbox]'); //ALL CHECKBOX IN FORM PANEL
const submitButton = document.querySelectorAll('.button__submit');

//================CHECK SUBMIT BUTTON AND SUBMIT
submitButton.forEach(elem => {
    elem.addEventListener('click', () => {
        if(elem.classList.contains('disabled')){
            return
        }
        alert('The form has been sent!');
        //elem.closest('form').submit();   //UNCOMENT IF U WANT SUBMIT
    })
})

//=====================CHECK ALL CHECKED CHECKINBOX
const checkSettingChecked = elem /*target checkbox*/ => {
    let form = elem.closest('form');
    let button = form.querySelector('.button__submit');
    let bool = Object.keys(form).filter(key => {
        return  form[key].checked === true
    });
    if (bool.length === 0){
        button.classList.add('disabled');
    }else {
        button.classList.contains('disabled') ? button.classList.remove('disabled') : null;
    }

}

// ==================EVENT ONCHANGE FRO ALL CHECKBOX IN FORM PANEL
checkbox.forEach((elem,index) => {
    elem.addEventListener('change', (e) => {
        let target = e.target;
        if(target.checked) {                                                    //IF CHECKBOX CHACKED - ADD TO LABEL CHACKED STYLE (+CLASS)
            target.closest('.checkbox__label').classList.add('checked');
        }else {                                                                 //ELSE - REMOVE STYLE (-CLASS)
            target.closest('.checkbox__label').classList.remove('checked');
        }

         checkSettingChecked(target);                                          //DEFINE CHECKED ELEMENTS IN TARGET FORM
    })
});

