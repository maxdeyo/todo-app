import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props){
        super(props);

        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            title: '',
            completed: false,
            day: null
        }
    }
    onChangeCompleted(e) {
        this.setState({
            completed: !this.state.completed
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }
    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDay(e) {
        this.setState({
            day: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const editedTodo = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            responsible: this.state.responsible,
            completed: this.state.completed,
            day: this.state.day
        }

        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, editedTodo)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }
    componentDidMount(){
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    responsible: response.data.responsible,
                    priority: response.data.priority,
                    completed: response.data.completed,
                    day: response.data.day
                });
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                        <label>Title: </label>
                        <input type='text' onChange={this.onChangeTitle} className='form-control' value={this.state.title}/>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type='text' onChange={this.onChangeDescription} className='form-control' value={this.state.description}/>
                    </div>
                    <div className='form-group'>
                        <label>Responsible: </label>
                        <input type='text' onChange={this.onChangeResponsible} className='form-control' value={this.state.responsible}/>
                    </div>
                    <div className='form-group'>
                        <h4>Priority</h4>
                        <input type='radio' 
                            name='priorityOptions' 
                            id='priorityLow'
                            value='Low'
                            checked={this.state.priority==='Low'}
                            onChange={this.onChangePriority}/>
                        <label className='form-check-label'>Low</label>
                        <br/>
                        <input type='radio' 
                            name='priorityOptions' 
                            id='priorityMedium'
                            value='Medium'
                            checked={this.state.priority==='Medium'}
                            onChange={this.onChangePriority}/>
                        <label className='form-check-label'>Medium</label>
                        <br/>
                        <input type='radio' 
                            name='priorityOptions' 
                            id='priorityHigh'
                            value='High'
                            checked={this.state.priority==='High'}
                            onChange={this.onChangePriority}/>
                        <label className='form-check-label'>High</label>
                    </div>
                    <div className='form-check'>
                        <input type='checkbox'
                            className='form-check-input'
                            id='completedCheckbox'
                            name='completedCheckbox'
                            onChange={this.onChangeCompleted}
                            checked={this.state.completed}
                            value={this.state.completed}
                            />
                        <label className='form-check-label' htmlFor='completedCheckbox'>
                            Completed
                        </label>
                    </div>
                    <br />
                    <div className='form-group'>
                        <h4>Day</h4>
                        <input type='radio' 
                            name='dayOptions' 
                            id='dayMonday'
                            value={1}
                            checked={this.state.day==1}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Monday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='dayTuesday'
                            value={2}
                            checked={this.state.day==2}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Tuesday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='dayWednesday'
                            value={3}
                            checked={this.state.day==3}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Wednesday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='dayThursday'
                            value={4}
                            checked={this.state.day==4}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Thursday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='dayFriday'
                            value={5}
                            checked={this.state.day==5}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Friday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='daySaturday'
                            value={6}
                            checked={this.state.day==6}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Saturday</label>
                        <br/>
                        <input type='radio' 
                            name='dayOptions' 
                            id='daySunday'
                            value={0}
                            checked={this.state.day==0}
                            onChange={this.onChangeDay}/>
                        <label className='form-check-label'>Sunday</label>

                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Update Todo' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}