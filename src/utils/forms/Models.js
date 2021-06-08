import { INPUT, CHECKBOX } from './Constants';
import { validatePassword, validateConfirmPassword } from './validator/AuthValidator';

var UserSchema = {
    email_address: { required: true, isvalid: false, type: INPUT, value: '', post: true, error: [] },
    password: { required: true, isvalid: false, type: INPUT, value: '', post: true, error: [] }
}

let RegistrationSchema = {
    first_name: { required: true, isvalid: false, type: INPUT, value: '', error: {} },
    last_name: { required: true, isvalid: false, type: INPUT, value: '', error: {} },
    email_address: { required: true, isvalid: false, type: INPUT, value: '', error: {} },
    password: { required: true, isvalid: false, type: INPUT, value: '', error: {}, validate: validatePassword },
    confirm_password: { required: true, isvalid: false, type: INPUT, value: '', error: {}, validate: validateConfirmPassword },
    phone_number: { required: true, isvalid: false, type: INPUT, value: '', error: {} }
}

export {
    UserSchema, RegistrationSchema
}