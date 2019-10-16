import React, { useState, useEffect } from "react";

const Form = props => {
    const [form, setForm] = useState({})
    const changeHandler = e => {
        console.log(e.target.value);
        setForm({...form, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        const addNewNote = {

        }
    }


return(
    <form onSubmit={submitForm}>
        <label htmlFor='name'>Name</label>
        <input
        type='text'
        name='name'
        placeholder='enter name'
        value= {form.name}
        onChange={changeHandler}
        />

    <label htmlFor='email'>Name</label>
        <input
        type='text'
        name='email'
        placeholder='Enter Email'
        value= {form.name}
        onChange= {changeHandler}
        />
        
    <label htmlFor='Role'>Name</label>
        <input
        type='text'
        name='role'
        placeholder='Enter Role'
        value = {form.name}
        onChange={changeHandler}
        />





    </form>
)


};

export default Form;