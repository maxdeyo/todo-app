import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
    render(){
        return(
            <div style={{margin: 15}}>
                <form className='form-signin'>
                    <h3>Login</h3>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input type='text' onChange={this.onChangeUsername} className='form-control' value={this.state.username}/>
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type='text' onChange={this.onChangePassword} className='form-control' value={this.state.password}/>
                    </div>
                    <Link to='/register'>Don't have an account? Register Here.</Link>
                    <div className='form-group'>
                        <input type='submit' value='Login' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        );
    }
}