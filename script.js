let btn_standart = document.querySelector("#standart");
let btn_static = document.querySelector("#static");

class Validator {
    isEmail(str) {
        if (str.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true;
        } else {
            return false;
        }
    }
    isDomain(str) {
        if (str.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/i)) {
            return true;
        } else {
            return false;
        }
    }
    isDate(str) {
        if (str.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) {
            return true;
        } else {
            return false;
        }
    }
    isPhone(str) {
        if (str.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            return true;
        } else {
            return false;
        }
    }
}

let validator = new Validator();
btn_standart.addEventListener("click", () => {
    console.log('Email: ' + validator.isEmail("myemail@gmail.com"));
    console.log('Domain: ' + validator.isDomain("google.com"));
    console.log('Date: ' + validator.isDate("30.09.2022"));
    console.log('Phone number: ' + validator.isPhone("380661234567"));
})

class ValidatorStatic {
    static isEmail(str) {
        if (str.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true;
        } else {
            return false;
        }
    }
    static isDomain(str) {
        if (str.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/i)) {
            return true;
        } else {
            return false;
        }
    }
    static isDate(str) {
        if (str.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) {
            return true;
        } else {
            return false;
        }
    }
    static isPhone(str) {
        if (str.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            return true;
        } else {
            return false;
        }
    }
}

btn_static.addEventListener("click", () => {
    console.log('Email: ' + ValidatorStatic.isEmail("myemail@gmail.com"));
    console.log('Domain: ' + ValidatorStatic.isDomain("google.com"));
    console.log('Date: ' + ValidatorStatic.isDate("30.09.2022"));
    console.log('Phone number: ' + ValidatorStatic.isPhone("380661234567"));
})