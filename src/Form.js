import React from 'react';
import './Form.css';

const Form = ({value, onChange,onCreate,onKeyPress})=>{
    return(
        <div ClassName="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className ="create-button" onClick={onCreate}>
                ON
            </div>
        </div>
    )
};

export default Form;


