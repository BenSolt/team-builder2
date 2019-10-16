import React, { useState, useEffect } from "react";

const Form = props => {
    const [form, setForm] = useState({})
    const changeHandler = e => {
        console.log(e.target.value);
        setForm({...form, [e.target.name]: e.target.value});
    };

    
}