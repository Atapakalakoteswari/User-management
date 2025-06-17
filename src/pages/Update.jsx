import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link, useLocation } from 'react-router-dom';

const Update = () => {
    const[student, setStudent] = useState({
        name: "",
        age: "",
        email: ""
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const studentId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8888/students/"+ studentId, student)
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }
    
  return (
    <div className="form">
       <h1>Update the student</h1>
        <input type="text" placeholder="name" onChange={handleChange} name='name' />
        <input type="number" placeholder="age" onChange={handleChange} name='age' />
        <input type="email" placeholder="email" onChange={handleChange} name='email' />
        <button className='formButton' onClick={handleClick}>Update</button>
        {error && "Something went wrong!"}
        <Link to="/">See all students</Link>
    </div>
  );
};

export default Update;


