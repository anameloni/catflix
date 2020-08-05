import React from 'react';

function FormField({ lable, type, value, nome, onChange }) {
    return (
        <div>
            <label>
                {lable} : 
                <input 
                    type={type}
                    value = {value}
                    name = {nome}
                    onChange = {onChange}
                />
            </label>
        </div>
    )
}

export default FormField;