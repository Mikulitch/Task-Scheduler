import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
         taskName:'',
         startWork:'',
         finishWork: '',
         workHours: '',
         status:''   

        }
        this.changeTaskNameHendler = this.changeTaskNameHendler.bind(this);
        this.changeStartWorkHendler = this.changeStartWorkHendler.bind(this);
        this.changeFinishWorkHendler = this.changeFinishWorkHendler.bind(this);
        this.changeWorkHoursHendler = this.changeWorkHoursHendler.bind(this);
        this.changeStatusHendler = this.changeStatusHendler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }
    saveTask = (e)=> {
        e.preventDefault();
        let task = {taskName: this.state.taskName, startWork: this.state.startWork, 
            finishWork: this.state.finishWork, workHours: this.state.workHours,
        status: this.state.status};
        console.log('task = >' +JSON.stringify(task));

        TaskService.createTask(task).then(res =>{
            this.props.history.push('/tasks') // after success add return to tasks page
        });
    }
    changeTaskNameHendler= (event) => {
        this.setState({taskName: event.target.value});
    }
changeStartWorkHendler= (event) => {
        this.setState({startWork: event.target.value});
    }
changeFinishWorkHendler= (event) => {
        this.setState({finishWork: event.target.value});
    }
changeWorkHoursHendler= (event) => {
        this.setState({workHours: event.target.value});
    }
    changeStatusHendler= (event) => {
        this.setState({status: event.target.value});
    }
    cancel( ) {
        this.props.history.push('/tasks');
    }
    render() {
        return (
            <div>
            <div className = "container">
                <div className = "row">
                    <div className =  "card col-md-6 offset-md-3 offset-md-3">
                    <h1 className = "text-center">Add Task</h1>
                    <div className = "card-body">
                        <form>
                            <div className = "form-group">
                                <label>Task Name:</label>
                                <input placeholder = "Task Name" name = "taskName" className = "form-control"
                                 value={this.state.taskName} onChange= {this.changeTaskNameHendler}/>
                            </div>
                            <div className = "form-group">
                                <label>Start Work:</label>
                                <input placeholder = "Start Work" name = "startWork" className = "form-control"
                                 value={this.state.startWork} onChange= {this.changeStartWorkHendler}/>
                            </div>
                            <div className = "form-group">
                                <label>Finish Work:</label>
                                <input placeholder = "Finish Work" name = "finishName" className = "form-control"
                                 value={this.state.finishWork} onChange= {this.changeFinishWorkHendler}/>
                            </div>
                            <div className = "form-group">
                                <label>Work Hours:</label>
                                <input placeholder = "Work Hours" name = "workHours" className = "form-control"
                                 value={this.state.workHours} onChange= {this.changeWorkHoursHendler}/>
                            </div>
                            <div className = "form-group">
                                <label>Status:</label>
                                <input placeholder = "Status" name = "status" className = "form-control"
                                 value={this.state.status} onChange= {this.changeStatusHendler}/>
                            </div>
                            <button className = "btn btn-success" onClick = {this.saveTask}>Save</button>
                            <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                    </div>

                </div>
               
            </div>
        </div>
        );
    }
}

export default CreateTaskComponent;