import { isTelNum, isEmail } from './mu-functions.js';


const contactForm = document.getElementById('contact_form');

let _input = contactForm.querySelectorAll('[type="text"], [type="email"], [type="tel"]'),
    _inputLen = _input.length;

let inputErrors = contactForm.getElementsByClassName('err_msg'),
    ieLen = inputErrors.length;

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
        return isEmail(this.val) // true || false
    }

    tel() {
        return isTelNum(this.val) // true || false
    }

    message() {
        if (
                this.val.replace(/\s+/g, '').length === 0
            ||  this.val.length > 300
        ) {
            return false
        }
        return true
    }
}

const validateInputs = () => {
    let validations = {
        'name': false,
        'email': false,
        'tel': false,
        'message': false
    };

    for (let i = 0; i < _inputLen; i++) {

        let validationsLen = validations.length;

        switch (_input[i].id) {
            case 'input_name':
                if (new formValidate(_input[i]).name())
                    validations.name = true
            break;

            case 'input_email':
                if (new formValidate(_input[i]).email())
                    validations.email = true
            break;

            case 'input_tel':
                if (new formValidate(_input[i]).tel())
                    validations.tel = true
            break;

            case 'input_message':
                if (new formValidate(_input[i]).message())
                    validations.message = true
            break;

            default: 
            return
        }
    }

    let success = true;

    for (var k in validations) {
		if (validations.hasOwnProperty(k)) {
            if (validations[k]) {
                document.getElementById(`err_input_${k}`).classList.remove('active');
            } else {
                success = false
                // adding errors to inputs on submit
            }
        }
    }

    return {
        'state': success, // true || false
        'list': validations 
    } 
}

contactForm.addEventListener('input', validateInputs)

contactForm.onsubmit = (e) => {
    e.preventDefault()

    let success = document.getElementById('success_message'),
        error = document.getElementById('err_message');

    let state = validateInputs().state,
        validations = validateInputs().list;

    if ( state ) {

        // new XMLHttpRequest()
        // on xhr.status === 200
        // clear form inputs etc
        // else
        // display connection error

        for (let i = 0; i < _inputLen; i++) {
            _input[i].value = '';
        }

        success.classList.add('active');
        error.classList.remove('active');
    } else {

        // display errors at inputs
        for (var k in validations) {
            if (validations.hasOwnProperty(k)) {
                if (!validations[k]) {
                    document.getElementById(`err_input_${k}`).classList.add('active');
                }
            }
        }

        success.classList.remove('active');
        error.classList.add('active');
    }
}