import React, { useState,useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    useEffect(()=> {
        fetchUsers();
    }, []);

}

const fetchUsers = async () => {
    const res = await fetch ('https://localhost:3000/api/users');
    const data = await res.json();
    setUsers(data);
};

const handleAddUser = async (e) =>{
    e.preventDefault();
   const res = await fetch ('https://localhost:3000/api/users',

    {
        method: 'POST',
        headers: {'Content - Type': 'application/json' },
        body:  JSON.stringify({ name, email })

    });

    const newUser = await res.json();
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    };

    return (
        <div style = {{ padding : '20px' }}>
            <h2>User List</h2>
            <ul>{users.map(user => (
                <li key = {user.id}>{user.name}{user.email})</li>
            ))}
            </ul>

            <h3> Add User </h3>
            <form onSubmit={handleAddUser}>
                <input
                type ="text"
                placeholder='Name'
                value={name}
                onChange={e =>
                    setName(e.target.value)}
                    required 
                    />
                       <input
                type ="email"
                placeholder='Email'
                value={email}
                onChange={e =>
                    setEmail(e.target.value)}
                    required 
                    />

                <button type = 'Submit'> Add </button>
            </form>
        </div>
    );


export default App;

