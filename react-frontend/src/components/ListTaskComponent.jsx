import React, { Component } from 'react';
import TaskService from '../services/TaskService';
import ListEmployeeComponent from './ListEmployeeComponent';

class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: []  
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    
    }
    deleteTask(id) {
        TaskService.deleteTask(id).then(res =>{
            this.setState({task: this.state.tasks.filter(task=> task.id !==id)});
        })
    }
    editTask(id) {
        this.props.history.push(`/update-task/${id}`);
    }
    componentDidMount() {
        TaskService.getTasks().then((res) => {
            this.setState({tasks: res.data});
        });
    }
    addTask() {
        this.props.history.push('/add-task');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Task List</h2>
                <div className = "row">
                    <button style={{margin: "auto"}} className = "btn btn-primary  " onClick= {this.addTask}>Add Task</button>
                </div>
                <div style={{marginTop: "10px"}} className = "row justify-content-center">
                    <table className = "table-sm  table-bordered mc-auto">
                        <thead>
                            <tr>
                            <th> Task Id </th>
                                <th> Task Name </th>
                                <th> Task Work Hours </th>
                                <th> Task Start Date </th>
                                <th> Task Finish Date </th>
                                <th> Employees Names </th>
                                <th> Task Status </th>
                                <th> Actions </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                    <tr key = {task.id}>
                                         <td>{task.id}</td>
                                        <td>{task.taskName}</td>
                                        <td>{task.workHours}</td>
                                        <td>{task.startDate}</td>
                                        <td>{task.finishDate}</td>
                                        
                                        <td>{task.status}</td>
                                        <td>
                                            <button onClick = {()=>this.editTask(task.id)} className = "btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=>this.deleteTask(task.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>


                </div>
            </div>
        );
    }
}

export default ListTaskComponent;