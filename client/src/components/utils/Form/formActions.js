 /**
  * Helper function to validate form
  * accepts element to be validated and form state
  */

export const validate = (element, formdata= []) => {

    console.log("formActions: VALIDATE: element=", element);
    console.log("formActions: VALIDATE: formdata=", formdata);

    let error = [true,'']; //error array will contain the validation result and the message


    if (element.validation && element.validation.email){ //element to be validated is the email?
        
        const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(element.value)
        
        // const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email':''}`;
        return error = !valid ? [valid,message] : error;
    }

    if (element.validation && element.validation.confirm){//element to be validated is the password?
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match':''}`;
        error = !valid ? [valid,message] : error;
    }

    if (element.validation && element.validation.required){ //element is required?
        const valid = element.value.trim() !== '';
        
        if (!valid) {
            return error = [false, 'This field is mandatory'];
        }
    }

    if (element.validation && element.validation.checkDay) { // element is birthday and need to check if it's ok
        if (parseInt(element.value, 10) <= 0 ) {
            return error = [false, 'Εισάγετε έναν αριθμό μεγαλύτερο του 0'];
        }
        if (parseInt(element.value, 10) > 31 ) {
            return error = [false, 'Εισάγετε έναν αριθμό μέχρι το 31'];
        }
    }

    if (element.validation && element.validation.checkMonth) { // element is birthday and need to check if it's ok
        if (parseInt(element.value, 10) <= 0 ) {
            return error = [false, 'Εισάγετε έναν αριθμό μεγαλύτερο του 0'];
        }
        if (parseInt(element.value, 10) > 12 ) {
            return error = [false, 'Εισάγετε έναν αριθμό μέχρι το 12'];
        }
    }

    if (element.validation && element.validation.checkYear) { // element is birthday and need to check if it's ok
        if (parseInt(element.value, 10) <= 0 ) {
            return error = [false, 'Εισάγετε έναν αριθμό μεγαλύτερο του 0'];
        }

        const year = new Date().getFullYear(); // Get current year
        
        if (parseInt(element.value, 10) > year - 17 ) {
            return error = [false, 'Θα πρέπει να είστε τουλάχιστον 18 ετών'];
        }

        if (parseInt(element.value, 10) <= year - 100 ) {
            return error = [false, 'Η ηλικία σας ξεπερνά τα 100 έτη'];
        }
    }

    if (element.validation && element.validation.minLength > 0 ) { //  element must be at least some characters
        
        if (element.value.length < element.validation.minLength) {
            return error = [false, `Το πεδίο πρέπει να είναι τουλάχιστον ${element.validation.minLength} χαρακτήρες`];
        }
    }

    if (element.validation && element.validation.maxLength > 0 ) { //  element must be at max some characters
        
        if (element.value.length > element.validation.maxLength) {
            return error = [false, `Το πεδίο πρέπει να είναι το πολύ ${element.validation.maxLength} χαρακτήρες`];
        }
    }

    return error
}

/**
 * Function used by updateForm
 * element is the form element (input, etc)
 * formdata is the form state
 * formname as the name implies
 */
export const update = (element, formdata, formName ) => {
    const newFormdata = { //store the state here
        ...formdata
    }
    const newElement = { //store all the data for the element
        ...newFormdata[element.id]
    }

    console.log("FORMACTIONS: UPDATE: ELEMENT=", element);
    console.log("formactions: update: newelement=", newElement);
    if (element.id === 'country') {
        console.log("FORM ACTIONS: element's value=", element.event.value, " NAME=", element.event.name, " checked", element.event.checked, " target=", element.event.target);
    } else {
        console.log("FORM ACTIONS: element's value=", element.event.target.value, " NAME=", element.event.target.name, " checked", element.event.target.checked, " target=", element.event.target);
    }
    
    if (element.id==="languages" || element.id === "lookingFor") {
        newElement.value[element.event.target.id].value = element.event.target.checked  //element.event.target.value === true ? false : true
        console.log("FORM ACTIONS: AFTER THE update: newelement=", newElement);
    } else if (element.id === 'private') {
        newElement.checked = element.event.target.checked  //element.event.target.value === true ? false : true
        newElement.value = newElement.checked;
        console.log("FORM ACTIONS: AFTER THE update: newelement=", newElement);
    } else if (element.id === "gender") {
        newElement.value = element.event.target.name; //store the value
        console.log("FORM ACTIONS: AFTER THE update: newelement=", newElement);
    } else if (element.id === 'country'){
        newElement.value = element.event.value; //store the value
        console.log("FORM ACTIONS: AFTER THE update: newelement=", newElement);
    } else {
            newElement.value = element.event.target.value; //store the value
        }
    
    if(element.blur){ //do the validation only when the input looses control
        let validData = validate(newElement, formdata); //call another helper function and pass element and state
        console.log("FORM ACTIONS VALIDATE SHOULD HAVE FINISHED!!");
        newElement.valid = validData[0]; //store true/false
        newElement.validationMessage = validData[1]; //store the validation message

        console.log('FORM ACTIONS: ON BLUR: validData=', validData);

        if (!newElement.valid) { // If it's not validated, show appropriate symbols
            newElement.showX = true;
            newElement.showV = false;
        } else {
            newElement.showV = true;
            newElement.showX = false;
        }
    }

    newElement.touched = element.blur; //update state that element has lost control
    newFormdata[element.id] = newElement;//store new state for the specific element

    return newFormdata;//return new state
}

/**
 * Returns data to be submitted. Username and password
 * and skips the confirmed password
 * @param {*} formdata form state
 * @param {*} formName who is calling
 */
export const generateData = (formdata, formName) =>{
    let dataToSubmit = {};

    for(let key in formdata){
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formdata[key].value;
        }
    }

    console.log('GENERATE DATA: datatosubmit=', dataToSubmit)
    return dataToSubmit;
}

/**
 * Checks valid key in state. If true returns true
 * 
 */
export const isFormValid = (formdata, formName) => {
    let formIsValid = true;

    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid
        console.log("FORM ACTIONS: isFORMVALID: key=", key, "valid=", formdata[key].valid);
    }
    return formIsValid;
}

//updates state with the options that will be used for select input
//formdata is the state, arraydata is the options, and field is the element that will show the options
export const populateOptionFields = (formdata, arrayData = [], field) => {
    const newArray = [];
    const newFormdata = {...formdata};
    
    console.log("formactions: populateOptionFields: newformdata=",newFormdata);
    console.log("formactions: populateOptionFields: arraydata=",arrayData);

    arrayData.forEach( item => { 
        newArray.push({ key:item._id, value:item.text }); // _id and text come from db
    });

    console.log("formactions: populateOptionFields: NEW ARRAY=", newArray);

    newFormdata[field].config.options = newArray;
    return newFormdata;
}

//set all fields to empty. img included, and update form states
export const resetFields = (formdata, formName)=>{
    const newFormdata = {...formdata};

    for(let key in newFormdata){ //loop through formdata
        if(key === 'images' || key === 'imageProfile'){ //if it's an image, then reset array
            newFormdata[key].value = [];
        } else if (key.element === 'input' ) {
            newFormdata[key].value = '';
            newFormdata[key].showV = false;
            newFormdata[key].showX = false;
            newFormdata[key].showSpinner = false;
        } else if (key.element === 'textarea' ) {
            newFormdata[key].value = '';
        } else if (key.element === 'checkbox' ) {
            newFormdata[key].value = false;
        } else if (key.element === 'imageProfile' ) {
            newFormdata[key].value = [];
        } else if (key==='price' || key ==='discounted_price') {
            newFormdata[key].value = 0;    
        } else if (key==='checkedColors') {
            for (let key2 in newFormdata.checkedColors) {
                newFormdata.checkedColors[key2]=false;
            }
        } else if (key==='checkedSize'){
            for (let key2 in newFormdata.checkedSize) {
                newFormdata.checkedSize[key2]=false;
            }
        } else {
            newFormdata[key].value = '';
        }

        newFormdata[key].validation.required ? newFormdata[key].valid = false :  newFormdata[key].valid = true;
        newFormdata[key].touched = false;
        newFormdata[key].validationMessage = '';
    }

    return newFormdata
}

//receives formdata and some fields
export const populateFields = (formData, fields) => {

    for(let key in formData){ //loop through formdata and update form fields
        formData[key].value = fields[key];
        formData[key].valid = true;
        formData[key].touched = true;
        formData[key].validationMessage = ''
    }

    return formData;
}

// makes passowrd fields visible - not visible
export const showPassword = (formdata) => {
    for (let key in formdata) {
        if (key === 'password' || key === 'confirmPassword') {
            
            formdata[key].config.type === 'password' ? formdata[key].config.type = 'text' : formdata[key].config.type = 'password'
        }
    }

    return formdata;
}
