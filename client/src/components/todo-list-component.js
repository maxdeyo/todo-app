import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TodosList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        if(this.props.filter===false){
            axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
        }else{
            axios.get('http://localhost:5000/todos/day/'+this.props.selectedDay.day)
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
        }
    }
    componentDidUpdate() {
        if(this.props.filter===false){
            axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
        }else{
            axios.get('http://localhost:5000/todos/day/'+this.props.selectedDay.day)
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
        }
    }
    todoList(){
        return this.state.todos.map((todo) => {
            return(
            <tr>
                <td className={todo.completed ? 'completed': ''}>{todo.title}</td>
                <td className={todo.completed ? 'completed': ''}>{todo.description}</td>
                <td className={todo.completed ? 'completed': ''}>{todo.responsible}</td>
                <td className={todo.completed ? 'completed': ''}>{todo.priority}</td>
                <td>
                    <Link to={'/edit/' + todo._id}>Edit</Link>
                </td>
                <td>
                    <button className='btn btn-secondary'
                        onClick={() => {
                        axios.post('http://localhost:5000/todos/delete/' + todo._id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                                return axios.get('http://localhost:5000/todos')
                            })
                            .then(res => {
                                const newTodos = res.data;
                                this.setState({todos: newTodos})
                            })
                    }}>Delete</button>
                </td>
            </tr>
            )
        })
    }
    render (){
        return(
            <div>
                <h3>Todo List</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
TodosList.defaultProps = {
    filter: false
}
export default TodosList;