import React, {Component} from 'react';

import axios from 'axios';

import FormField from '../Form/formField';
import { update, generateData, isFormValid } from '../Form/formActions';

import { CONTACTTEXTS } from '../../../Resources/Constants/Texts/contact_texts';
import { showToastSuccess, showToastError} from '../../utils/helpers';

class ContactForm extends Component {
    state = {
        locale: 'en',
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Enter your name',
                    iconType: 'name',
                    showBottomValidation:true,
                    checkSpecialChars: false
                },
                validation:{
                    required: true,
                    minLength: 3,
                    maxLength: 25,
                    checkName: false
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: false,
                showX: false,
                showV: false,
                showSpinner: false
            },
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email',
                    type: 'email',
                    placeholder: 'Enter your email',
                    iconType: 'email',
                    showBottomValidation:true
                },
                validation:{
                    required: true,
                    email: true,
                    checkName: false
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showX: false,
                showV: false,
                showSpinner: false
            },
            subject: {},
            message: ''
        }
    }

    componentDidMount() {
        
        document.addEventListener('langChanged', this.handleLocale);

        this.setState({locale: localStorage.getItem('lang_pref')})
    }

    componentWillUnmount() {
        document.removeEventListener('langChanged', this.loadTexts);
    }

    updateForm = async (element) => {

        console.log('UPDATE FORM: element.event=', element.event)

        const newFormdata = update(element, this.state.formdata, 'register');


        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    handleLocale = () => {
        this.setState({locale: localStorage.getItem('lang_pref')})
    }

    submitForm= async event =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        console.log("REGISTER: SUBMITFORM: formisValid=",formIsValid);

        if(formIsValid){
            console.log("SUBMITFORM: FORMISVALID! WILL SEND DISPATCH");

            await axios.post('/email.submit', dataToSubmit)
            .then( response => {
                console.log('response=', response)

                if (response.data.response) {
                    showToastSuccess.success()
                } else {
                    showToastError()
                    // clean form
                    this.setState({formError: true})
                }
            })
        } else {
            this.setState({formError: true})
        }
            
    }

    render() {
        return(
            <div className='contact_container'>
                    <h2>Εγγραφή</h2>
                    <form className="register_form" onSubmit={(event)=>  this.submitForm(event)}>
                        
                        <div className="register_name">
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element)=> this.updateForm(element)}
                                onKeyPress={e => this.handleKeyPress(e)}
                            />
                        </div>
                        <div className="register_email">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}
                                onKeyPress={e => this.handleKeyPress(e)}
                            />
                        </div>
                        <div className="register_password">
                                <FormField
                                    id={'password'}
                                    formdata={this.state.formdata.password}
                                    change={(element)=> this.updateForm(element)}
                                    handleEyeClick = {this.handleEyeClick}
                                    onKeyPress={e => this.handleKeyPress(e)}
                                />
                        </div>
                        <div className="input_wrapper_button">
                            { this.state.formError ?
                                <div className="form_error_label">
                                    Please check your data
                                </div>
                            :null}
                            
                            <div className='input_left_part'></div>
                            <div className='input_main'>
                                <button className="register_button" onClick={(event)=> this.submitForm(event)}>
                                    {CONTACTTEXTS.buttonText[this.state.locale]}
                                </button>
                            </div>
                            <div className='input_right_part'></div>
                        </div>
                    </form>
            </div>
        )        
    }
}

export default ContactForm;