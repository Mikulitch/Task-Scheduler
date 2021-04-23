import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';


class ListProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [] 
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(id){ 
        ProjectService.deleteProject(id).then(res =>{
            this.setState({projects: this.state.projects.filter(project => project.id !==id)});
        })
    }
    editProject(id){
        this.props.history.push(`/update-project/${id}`);
    }

    componentDidMount() {
        ProjectService.getProjects().then((res) => {
            this.setState({projects: res.data});
        });
    }

    addProject() {
        this.props.history.push('/add-project');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Projects List</h2>
                <div className = "row">
                    <button style={{margin: "auto"}} className = "btn btn-primary" onClick = {this.addProject}>Add Project</button>
                </div>
                <div className = "row justify-content-center">
                    <table style={{marginTop: "10px"}} className = "table-sm  table-bordered mc-auto">
                        <thead>
                            <tr>
                                <th> Project ID </th>
                                <th> Project Full Name </th>
                                <th> Project Short Name </th>
                                <th> Project Discription </th>
                                <th> Actions </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.projects.map(
                                    project =>
                                    <tr key = {project.id}>
                                        <td>{project.id}</td>  
                                       <td>{project.fullName}</td>  
                                       <td>{project.shortName}</td> 
                                       <td>{project.discription}</td>    
                                       <td>
                                            <button onClick = {()=>this.editProject(project.id)} className = "btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=>this.deleteProject(project.id)} className = "btn btn-danger">Delete</button>
                                          
                                            
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

export default ListProjectComponent;