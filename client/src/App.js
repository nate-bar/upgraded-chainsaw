import React, { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div>
        {users.map((user, index) => (
          <div key={index}>
            Name: {user.firstName + " " + user.lastName}, ID: {user.iduser}, Email: {user.email}
          </div>
        ))}
    </div>
  )
}

export default App;