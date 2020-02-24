import React from 'react';
import { FaExclamationTriangle, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdVpnKey, MdSubject } from 'react-icons/md';

import { IoMdCheckmarkCircle } from 'react-icons/io';

/**
 * Stateless Component
 */

const Formfield = ({formdata, change, id, handleEyeClick, onKeyPress}) => {

    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const showLeftIcon = type => {
        if (!type) return

        if (type === 'name') return <div className='input_left_icon'><FaUser /></div>
        if (type === 'email') return <div className='input_left_icon'><FiMail /></div>
        if (type === 'password') return <div className='input_left_icon'><MdVpnKey /></div>
        if (type === 'subject') return <div className='input_left_icon'><MdSubject /></div>

        return;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        console.log("formfield: rendertemplate: formdata=", formdata);
        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className="input_wrapper">
                        <div className='input_top_row'>
                            <div className="input_left_part"></div>
                            { formdata.showlabel ? 
                                <div className="input_label">{formdata.config.label}</div>
                            :null}
                            <div className="input_right_part"></div>
                            
                        </div>
                        <div className='input_main_row'>
                            <div className="input_left_part"></div>
                            <div className="input_main">
                                {showLeftIcon(formdata.config.iconType)}
                                 {formdata.config.disabled  ? // if it's disabled
                                    <input
                                        // {...formdata.config} // if enabled gives warning
                                        value={formdata.value}
                                        onBlur={event => change({event, id, blur:true})}
                                        onChange={event => change({event, id}) }
                                        placeholder = {formdata.config.placeholder}
                                        disabled = {true}
                                        className = 'input_disabled'
                                    /> :
                                    <input
                                        // {...formdata.config} // if enabled gives warning
                                        value={formdata.value}
                                        onBlur={(event) => change({event, id, blur:true})}
                                        onChange={(event) => change({event, id}) }
                                        onKeyPress = {onKeyPress ? event => onKeyPress(event) : null}
                                        placeholder = {formdata.config.placeholder}
                                        disabled = {false}
                                        type = {formdata.config.type === 'password' ? 'password' : 'text'}
                                        name = {formdata.config.name}
                                    />   
                                }
                            </div>
                            <div className={formdata.config.disabled ? 'input_right_part_disabled' : "input_right_part"}>
                                <div className='spinner'>{formdata.showSpinner ? <div className="lds-dual-ring"></div> : null}</div>
                                {formdata.config.name === 'password' || formdata.config.type === 'confirmPassword' ?  // PASSWORD EYE
                                    formdata.showEye ? 
                                        <div className = 'pass_eye'><FaEye onClick = {() => handleEyeClick()} /></div>
                                    :
                                        <div className = 'pass_eye'><FaEyeSlash onClick = {() => handleEyeClick()}/></div>
                                : null}
                                <div className='icon_result'>
                                    {formdata.showX ? <div className="iconX"><FaExclamationTriangle /></div> : null}
                                    {formdata.showV ? <div className="iconV"><IoMdCheckmarkCircle /></div> : null}
                                </div>
                            
                                {/* {formdata.validationMessage && !formdata.config.showBottomValidation ? <div className="validation_message">{formdata.validationMessage}</div> : null} */}
                            </div>
                        </div>
                        <div className='input_bottom_row'>
                            <div className="input_left_part"></div>
                            <div className="bottom_validation_message"> 
                                {formdata.validationMessage && formdata.config.showBottomValidation ? showError() :null}
                            </div>
                            <div className="input_right_part"></div>
                        </div>
                </div>
                )
            break;
            case('select'):
                formTemplate = (
                    <div className="formBlock">
                        { formdata.showlabel ? 
                            <div className="label_inputs">{formdata.config.label}</div>
                        :null}
                        <select
                            value={formdata.value}
                            onBlur={(event)=> change({event,id,blur:true})}
                            onChange={(event)=> change({event,id}) }
                        >
                            <option value="">Select one</option>
                            {
                                formdata.config.options.map(item=>(
                                    <option 
                                        key={item.key} // changed to item.value from item.key
                                        value={item.key} // item.key, item.value, item.key
                                    >
                                        {/* {line below is the problem. item.key renders ok when it's from db and item.value hardcoded } */}
                                        {item.value} 
                                    </option>
                                ))
                            }
                        </select>
                        {showError()}
                    </div>
                )
            break;
            case('textarea'):
            formTemplate = (
                <div className="formBlock">
                    { formdata.showlabel ? 
                        <div className="label_inputs">{formdata.config.label}</div>
                    :null}
                    <textarea
                        {...formdata.config}
                        value={formdata.value}
                        onBlur={(event) => change({event,id,blur:true})}
                        onChange={(event) => change({event,id}) }
                    />
                    {showError()}
                </div>
            )
            break;
            case('multiselectwithcheckboxes'):
            formTemplate = (
                <div className="formBlock">
                </div>)
            break;
            case ('checkbox'):
                formTemplate = (
                    <div className="formBlock-checkbox">
                        {formdata.showlabel ? 
                        <div className="label_inputs">{formdata.config.label}</div>
                    :null}
                        <input type="checkbox" id={id} value = {formdata.value}  checked={formdata.checked} onChange={event => change({ event, id })} onBlur = {event => change({ event, id })}/>
                        {formdata.validationMessage && formdata.config.showBottomValidation ? <div className="bottom_validation_message">{showError()}</div> :null}
                    </div>
                )
            break;
            case ('searchBox'):
                formTemplate = (
                    <div className='formBlock-searchBox'>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event)=> change({event,id}) }
                        /> 
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }


    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default Formfield;