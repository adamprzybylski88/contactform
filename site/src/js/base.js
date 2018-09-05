import { 
    isNum
} from './mu-functions.js'


const contactForm = document.getElementById('contact_form')
let _input = contactForm.querySelectorAll('[type="text"], [type="email"], [type="tel"]'),
    _inputLen = _input.length;

class formValidate {
    constructor(val) {
        this.val = val
    }

    name() {

    }

    email() {
        return `email`
    }

    tel() {
        return isNum(this.val)
    }

    textArea() {

    }
}

const detectInputs = () => {
   

    for (let i = 0; i < _inputLen; i++) {

        switch (_input[i].type) {
            case 'tel':
            console.log('tel', _input[i])
            break;

            default: 
            console.log('default', _input[i])
        }
        // .join('')
    }

    // console.log(
    //     new formValidate().phone()
    // )


    // if validation correct display wiadomosc zostala wyslana
    // if validation err display 
}

contactForm.addEventListener('input', () => { 
    detectInputs()
})

contactForm.onsubmit = (e) => {
    e.preventDefault()

    // formSubmit()
}