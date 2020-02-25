import React, {Component} from 'react';

import axios from 'axios';

import FormField from '../Form/formField';
import { update, generateData, isFormValid, resetFields } from '../Form/formActions';

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
            subject: {
                element: 'input',
                value: '',
                config:{
                    name: 'subject',
                    type: 'text',
                    placeholder: 'Subject',
                    iconType: 'subject',
                    showBottomValidation:true,
                    checkSpecialChars: false
                },
                validation:{
                    required: true,
                    minLength: 1,
                    maxLength: 100,
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
            message: {
                element: 'textarea',
                value: '',
                config:{
                    name: 'message',
                    type: 'textarea',
                    placeholder: 'Type your message here...',
                    // iconType: 'name',
                    showBottomValidation:true,
                    checkSpecialChars: false
                },
                validation:{
                    required: true
                    // minLength: 3,
                    // maxLength: 25,
                    // checkName: false
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: false,
                showX: false,
                showV: false,
                showSpinner: false
            }
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

            await axios.post('/api/email.submit', dataToSubmit)
            .then( response => {
                console.log('response=', response)

                if (response.data.success) {
                    showToastSuccess(CONTACTTEXTS.success[this.state.locale])
                    let oldFormdata = this.state.formdata;
                    // need to reset state and formdata
                    const formdata = resetFields(oldFormdata);
                    this.setState({formdata});
                } else {
                    showToastError(CONTACTTEXTS.failure[this.state.locale])
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
                    
                <form className="register_form" onSubmit={(event)=>  this.submitForm(event)}>
                    <h2>{CONTACTTEXTS.title[this.state.locale]}</h2>
                    <div className="register_name">
                        <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element)=> this.updateForm(element)}
                            // onKeyPress={e => this.handleKeyPress(e)}
                        />
                    </div>
                    <div className="register_email">
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                            // onKeyPress={e => this.handleKeyPress(e)}
                        />
                    </div>
                    <div className="subject">
                    <FormField
                            id={'subject'}
                            formdata={this.state.formdata.subject}
                            change={(element)=> this.updateForm(element)}
                        />
                    </div>
                    <div className="message">
                    <FormField
                            id={'message'}
                            formdata={this.state.formdata.message}
                            change={(element)=> this.updateForm(element)}
                        />
                    </div>
                    <div className="form_error">
                        { this.state.formError ?
                            <div className="form_error_label">
                                Please check your data
                            </div>
                        :null}
                    </div>
                    <div className='button_container'>
                        <button className="register_button" onClick={(event)=> this.submitForm(event)}>
                            {CONTACTTEXTS.buttonText[this.state.locale]}
                        </button>
                    </div>
                </form>
            </div>
        )        
    }
}

export default ContactForm;