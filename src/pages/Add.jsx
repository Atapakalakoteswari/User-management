import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const[student, setStudent] = useState({
        name: "",
        age: "",
        email: "",
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8888/students", student)
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

  return (
    <div className="form">
       <h1>Add new student</h1>
        <input type="text" placeholder="name" onChange={handleChange} name='name' />
        <input type="number" placeholder="age" onChange={handleChange} name='age' />
        <input type="email" placeholder="email" onChange={handleChange} name='email' />
        <button className='formButton' onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/">See all students</Link>
    </div>
  );
};

export default Add;