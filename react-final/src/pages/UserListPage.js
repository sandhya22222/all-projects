
import { useEffect, useState } from 'react';

export default function UserListPage(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(
        () => {
            fetch('https://reqres.in/api/users?page=1')
                .then(res => res.json())
                .then(
                    (success) => {
                        setUsers(success.data);
                        setIsLoaded(true)
                    },
                    (error) => {
                        setError(error)
                    }
                )
        }
    )


    return (
        <ul>
            <div className='row'>
                {users.map(item => (
                    <div key={item.id} className='col-3'>
                        <div className="card">
                            <img src={item.avatar} width="100" height={190} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                <p className="card-text"><b>Email:</b>{item.email}</p>
                                <a className="btn btn-primary">Click Here for More Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ul>
    )
}