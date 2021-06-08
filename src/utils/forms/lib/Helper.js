import { CHECKBOX, INPUT } from '../Constants';


const setValue = (name = "", value = "", requiredSchema = {}) => {
    if (requiredSchema.hasOwnProperty(name)) {
        requiredSchema = setComponentValue(requiredSchema, name, value);
        var schema = requiredSchema[name].value;
        if (requiredSchema[name].required === true) {
            if (typeof (requiredSchema[name].validate) == 'function') {
                var customValidationResult = requiredSchema[name].validate.call(requiredSchema,value);
                //TODO: custom validation should provide messages or return true or false
                if (!customValidationResult) {
                    requiredSchema[name].isvalid = false;
                } else {
                    requiredSchema[name].isvalid = true;
                }
            } else {
                if (schema === '' || schema === null || schema === 'undefined') {
                    requiredSchema[name].isvalid = false;
                    requiredSchema[name].error = name + " is required";
                } else {
                    requiredSchema[name].isvalid = true;
                }
            }
        }else{
            requiredSchema[name].isvalid = true;
        }
    } else {
        //find the best error to display here
    }
    // 
    return requiredSchema;
};

const setComponentValue = (requiredSchema, name, value) => {
    if (requiredSchema[name].type === CHECKBOX) {
        requiredSchema[name].value = requiredSchema[name].value;
    } else if (requiredSchema[name].type === INPUT) {
        requiredSchema[name].value = value;
    } else {
        requiredSchema[name].value = value;
    }

    return requiredSchema;
};

const checkModels = (model) => {
    for (const key in model) {
        if (model.hasOwnProperty(key)) {
            if (!model[key].isvalid && model[key].error === undefined) {
                model[key].error = key + " is required";
            }

        }
    }
    return model;
};
const setMultipleValues = (name = [], value = [], requiredSchema = {}, app = {}) => {
    var schemaToReturn = {};
    if (Array.isArray(name) && Array.isArray(value)) {
        for (let i = 0; i <= name.length; i++) {
            schemaToReturn = { ...schemaToReturn, ...setValue(name[i], value[i], requiredSchema, app) };
        }
        return schemaToReturn;
    } else {
        throw "invalid argument passed to function";
    }
};

const formatPostValues = (schema = {}) => {
    var ObjectToPost = {};
    Object.keys(schema).map(key => {
        if (schema[key].post) {
            Object.assign(ObjectToPost, { [key]: schema[key].value });
        }
    });
    return ObjectToPost;
};

const validate = (schemaToValidate = {}) => {
    var errorMessages = [];
    if (Object.keys(schemaToValidate).length > 0) {
        schemaToValidate = checkModels(schemaToValidate);
        for (const key in schemaToValidate) {
            if (schemaToValidate.hasOwnProperty(key)) {
                const valid = schemaToValidate[key].isvalid;
                if (!valid) {
                    errorMessages.push(schemaToValidate[key].error);
                }

            }
        }
        var formattedModelToPost = formatPostValues(schemaToValidate);
        return [errorMessages, formattedModelToPost];
    } else {
        //Throw error of no value provided
        // throw "No schema provided";
        return [["Please fill all necessary fields to continue"], {}];
    }
};

const isValidModel = (model) => {
 const hasInValid = Object.values(model).findIndex(x=>x.isvalid === false);
    return hasInValid < 0 ? true : false;
}


export {
    formatPostValues, setValue, setMultipleValues, validate, isValidModel
};