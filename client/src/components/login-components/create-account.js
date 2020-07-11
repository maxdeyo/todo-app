import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            title: ''
        }
    }
    onChangeFirstName(e){
        this.setState({
            firstname: e.target.value
        });
    }
    onChangeLastName(e){
        this.setState({
            lastname: e.target.value
        });
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();


        const newUser = {
            title: this.state.title,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/todos/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        })
    }
    render(){
        return(
            <div style={{marginTop: 20}}>
                    <h3>Create New Account</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label>First Name: </label>
                            <input type='text' onChange={this.onChangeFirstName} className='form-control' value={this.state.firstname}/>
                        </div>
                        <div className='form-group'>
                            <label>Last Name: </label>
                            <input type='text' onChange={this.onChangeLastName} className='form-control' value={this.state.lastname}/>
                        </div>
                        <div className='form-group'>
                            <label>Username: </label>
                            <input type='text' onChange={this.onChangeUsername} className='form-control' value={this.state.username}/>
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='text' onChange={this.onChangePassword} className='form-control' value={this.state.password}/>
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='Create Account' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
        );
    }
}