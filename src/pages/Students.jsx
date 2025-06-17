import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get("http://localhost:8888/students");
                setStudents(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAllStudents();
    }, []);

    console.log(students);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8888/students/"+id);
           window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div>
       <h1>Student Profile</h1>
       <div className="students">
        {students.map((student) => (
            <div className="student" key={student.id}>
                <h2>{student.name}</h2>
                <p>{student.age}</p>
                <span>${student.email}</span>
                <button className="delete" onClick={()=>handleDelete(student.id)}>Delete</button>
                <button className="update"><Link to={`/update/${student.id}`}>Update</Link></button>
       </div>
        ))}
    </div>
    <button><Link to="/add">Add new student</Link></button>
    </div>
  )
}

export default Students;
