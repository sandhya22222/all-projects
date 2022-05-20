import React, { useState } from "react";

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            erros: null,
            isLoaded: false
        }
    }

    //sending api call life cycle hook

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(
                (success) => {
                    this.setState({
                        isLoaded: true,
                        users: success.data
                    });
                },
                (error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    }

    render() {
        const { users, isLoaded, error } = this.state;

        return (
            <ul>
                {users.map(item => (
                    <li key={item.id}>
                      Name:  {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>
        )
    }






    // constructor() {
    //     super();

    //     this.state = {
    //         uname: 'THBS',
    //         age: 20,
    //         addr: 'BNG'
    //     }
    // }

    // updateAddress() {
    //     this.setState({
    //         addr: 'HYD'
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             User Name :  {this.state.uname} <br></br>
    //             User Age :  {this.state.age} <br></br>
    //             User addr :  {this.state.addr} <br></br>
    //         </div>
    //     )
    // }

}