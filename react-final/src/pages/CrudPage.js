import React, { useState } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm'
const Crud = () => {


    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const editRow = (user) => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    return (

        <div className='container'>
            <h1> Crud Application Using Hooks</h1>
            <br></br><br></br>
            <div className='row'>
             
                <div className='col-6'>
                    <div>
                        <h2>Add User</h2>
                    </div>
                    <br></br>
                    <div>
                        <AddUserForm addUser={addUser} />
                    </div>

                </div>
                <div className='col-6'>
                    <div>
                        <h2>View User</h2>
                    </div>
                    <br></br>
                    <div>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser}></UserTable>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud