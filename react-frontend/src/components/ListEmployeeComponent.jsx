import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
               employees: [] 
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        //rest api call 
        EmployeeService.deleteEmployee(id).then(res =>{
         this.setState({employees: this.state.employees.filter(employee => employee.id !==id)});  
        })

    }
    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }
   
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                    <button style={{marginTop: "10px", margin: "auto"}} className = "btn btn-primary" onClick= {this.addEmployee}>Add Employee</button>
                </div>
                <div  style={{marginTop: "10px"}} className = "row justify-content-center">
                    <br/>
                    <table className = "table-sm  table-bordered mc-auto">
                        <thead>
                            <tr>
                                <th> Employee ID </th>
                                <th> Employee First Name </th>
                                <th> Employee Last Name </th>
                                <th> Employee Middle Name </th>
                                <th> Employee Position </th>
                                <th> Actions </th>
                            </tr>

                        </thead>

                        <tbody> 
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.middleName}</td>
                                        <td>{employee.position}</td>
                                        <td>
                                            <button onClick = {()=>this.editEmployee(employee.id)} className = "btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=>this.deleteEmployee(employee.id)} className = "btn btn-danger">Delete</button>
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

export default ListEmployeeComponent;