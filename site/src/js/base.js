import { isNum, arrayActions } from './mu-functions.js';


const contactForm = document.getElementById('contact_form');

let _input = contactForm.querySelectorAll('[type="text"], [type="email"], [type="tel"]'),
    _inputLen = _input.length;

class formValidate {
    constructor(elem) {
        this.elem = elem
        this.val = elem.value
    }

    name() {
        if (this.val.length <= 30)
            return true
        else
            return false
    }

    email() {
        // 
    }

    tel() {
        return isNum(this.val)
    }

    textArea() {
        // if this.val.replace(/\s+/g, '').length === 0 this field is required
        // if this.val.length <= 300 max 
    }
}

const validateInputs = () => {
    let validations = {
        'name': '',
        'email': '',
        'tel': '',
        'message': ''
    };

    // detect if inputs are correct
    for (let i = 0; i < _inputLen; i++) {

        let validationsLen = validations.length;

        switch (_input[i].id) {
            case 'input_name':
                if (new formValidate(_input[i]).name()) {
                    validations.name = {
                        'elem': _input[i], 
                        'pass': true,
                        'message': false
                    }
                } else {
                    validations.name = {
                        'elem': _input[i], 
                        'pass': false,
                        'message': 1
                    }
                }
            break;

            case 'input_email':
                // str.replace(/\s+/g, '');
                // str.split('').join('');
            break;

            case 'input_tel':
                if (new formValidate(_input[i]).tel()) {
                    validations.tel = {
                        'elem': _input[i], 
                        'pass': true,
                        'message': false
                    }
                } else {
                    validations.tel = {
                        'elem': _input[i], 
                        'pass': false,
                        'message': 1
                    }
                }
            break;

            case 'input_message':
            break;

            default: 
            console.log('default', _input[i])
        }
    }

    console.log(validations)

    // if all inputs correct
    // return 'success'
    // else
    // return 'err'
}

contactForm.addEventListener('input', validateInputs)
contactForm.onsubmit = (e) => {
    e.preventDefault()

    if ( validateInputs() === 'success') {
        // validation correct display wiadomosc zostala wyslana
        // wyczyscic blędy i pola
    } else {
        // validation err display 
    }
}