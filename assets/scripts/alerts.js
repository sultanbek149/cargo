export const showAlert = (message, isSuccess) => {
    const div = document.createElement('div')
    div.className = `alert ${isSuccess ? 'alert-success' : 'alert-danger'} alert-message`;
    div.appendChild(document.createTextNode(message));

    document.querySelector('.wrapper').appendChild(div);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 4000);
}

export const clearFields = () => {
    fwhat.value = '';
    ffrom.value = '';
    fto.value = '';
    fweight.value = '';

    fradio1.checked = false;
    fradio2.checked = false;

    phone.value = '';
    femail.value = '';
}


export const clearFieldsContact = () => {
    cemail.value = '';
    cname.value = '';
    ctext.value = '';
}