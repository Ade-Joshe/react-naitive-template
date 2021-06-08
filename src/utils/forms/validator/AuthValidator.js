const validatePassword = function (value) {

    let sizeCheck, caseCheck, charCheck;
    if (value.length < 8) {
        this.password.error = { ...this.password.error, matchSize: false };
        sizeCheck = false;
    } else {
        this.password.error = { ...this.password.error, matchSize: true };
        sizeCheck = true
    }

    if (/[A-Z]/g.test(value) && /[a-z]/g.test(value)) {
        this.password.error = { ...this.password.error, matchCase: true };
        caseCheck = true;
    }
    else {
        this.password.error = { ...this.password.error, matchCase: false };
        caseCheck = false;
    }

    if (/[^\w\s]/g.test(value)) {
        this.password.error = { ...this.password.error, matchChar: true };
        charCheck = true;
    }
    else {
        this.password.error = { ...this.password.error, matchChar: false };
        charCheck = false;
    }

    if (sizeCheck && charCheck) return true
    return false;
};


const validateConfirmPassword = function (value) {

    let result;
    if (value === this.password.value) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}


export { validatePassword, validateConfirmPassword };