import React, { useState, useEffect } from "react";

const Form = props => {
    const [form, setForm] = useState({name:'',email:'', role:''})
    const changeHandler = e => {
        console.log(e.target.value);
        setForm({...form, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        const addNewNote = {
            ...form
        };
        props.addmember(addNewNote);
        setForm({name:'', email:'', role:''})
    }


return(
    <div className="Form">

    <form onSubmit={submitForm}>

        <label htmlFor='name'>Name</label>
        <input
        type='text'
        name='name'
        placeholder='enter name'
        value= {form.name}
        onChange={changeHandler}
        />

    <label htmlFor='email'>Email</label>
        <input
        type='text'
        name='email'
        placeholder='Enter Email'
        value= {form.email}
        onChange= {changeHandler}
        />
        
    <label htmlFor='Role'>Role</label>
        <input
        type='text'
        name='role'
        placeholder='Enter Role'
        value = {form.role}
        onChange={changeHandler}
        />


    <button type="submit">Add note</button>


    </form>

    </div>
)


};

export default Form;