import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
                firstName: '',
                lastName:'',
                middleName:'',
                position:''

        }
        this.changeFirstNameHendler = this.changeFirstNameHendler.bind(this);
        this.changeLastNameHendler = this.changeLastNameHendler.bind(this);
        this.changeMiddleNameHendler = this.changeMiddleNameHendler.bind(this);
        this.changePositionHendler = this.changePositionHendler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e)=> {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, 
            middleName: this.state.middleName, position: this.state.position}; 
            console.log('employee =>'+JSON.stringify(employee));
            
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees') //after success add return to employees page
            });

    }
    changeFirstNameHendler= (event) => {
            this.setState({firstName: event.target.value});
        }
    changeLastNameHendler= (event) => {
            this.setState({lastName: event.target.value});
        }
    changeMiddleNameHendler= (event) => {
            this.setState({middleName: event.target.value});
        }
    changePositionHendler= (event) => {
            this.setState({position: event.target.value});
        }
        cancel( ) {
            this.props.history.push('/employees');
        }
   
   
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className =  "card col-md-6 offset-md-3 offset-md-3">
                        <h1 className = "text-center">Add Employee</h1>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label>First Name:</label>
                                    <input placeholder = "First Name" name = "firstName" className = "form-control"
                                     value={this.state.firstName} onChange= {this.changeFirstNameHendler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Last Name:</label>
                                    <input placeholder = "Last Name" name = "lastName" className = "form-control"
                                     value={this.state.lastName} onChange= {this.changeLastNameHendler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Middle Name:</label>
                                    <input placeholder = "Middle Name" name = "middleName" className = "form-control"
                                     value={this.state.middleName} onChange= {this.changeMiddleNameHendler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Position:</label>
                                    <input placeholder = "Position" name = "position" className = "form-control"
                                     value={this.state.position} onChange= {this.changePositionHendler}/>
                                </div>
                                <button className = "btn btn-success" onClick = {this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent;