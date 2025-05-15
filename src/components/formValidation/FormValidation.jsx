import React, { useState } from 'react';
import './FormValidation.css';

function FormValidation() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = "Name is required.";
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid.";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Form submitted successfully');
        }
    }
    return (
        <form onSubmit={handleSubmit} className ="form">
            <div>
                <label>Name:</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <p style={{ color: 'red' }}>{ errors.name}</p>}
            </div>  
            <div>
                <label>Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>
            
            <button type="submit">Submit</button>
        </form>
    );
  
}
export default FormValidation;