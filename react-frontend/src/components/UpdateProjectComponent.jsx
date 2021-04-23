import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';

class UpdateProjectComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
                id: this.props.match.params.id,
                fullName: '',
                shortName:'',
                discription:''
        }
        this.changeFullNameHendler = this.changeFullNameHendler.bind(this);
        this.changeShortNameHendler = this.changeShortNameHendler.bind(this);
        this.changeDiscriptionHendler = this.changeDiscriptionHendler.bind(this);
         this.updateProject = this.updateProject.bind(this);
    }

    componentDidMount() {
        ProjectService.getProjectById(this.state.id).then((res)=> {
            let project = res.data;
            this.setState({fullName: project.fullName, shortName: project.shortName, 
            discription: project.discription });
        });

    }
    updateProject = (e) =>{
        e.preventDefault();
        let project = {fullName: this.state.fullName, shortName: this.state.shortName,
        discription: this.state.discription};
        console.log('project =>'+JSON.stringify(project));
            ProjectService.updateProject(project, this.state.id).then((res) => {
              this.props.history.push("/projects");  
            })
       
    }
    changeFullNameHendler = (event) =>{
        this.setState({fullName: event.target.value});
    }
    changeShortNameHendler = (event) =>{
        this.setState({shortName: event.target.value});
    }
    changeDiscriptionHendler = (event) =>{
        this.setState({discription: event.target.value});
    }
    cancel( ) {
        this.props.history.push('/projects');
    }

    render() {
        return (
            <div>
               <div className = "container">
                   <div className = "row">
                       <div className = "card col-md-6 offset-md-3 offset-md-3">
                         <h1 className = "text-center">Update Project</h1> 
                         <div className = "card-body">
                             <form>
                                 <div className = "form-group">
                                     <label>Full Name:</label>
                                     <input placeholder = "Full Name" name = "fullName" className = "form-control"
                                     value ={this.state.fullName} onChange = {this.changeFullNameHendler}/>
                                 </div>
                                 <div className = "form-group">
                                     <label>Short Name:</label>
                                     <input placeholder = "Short Name" name = "shortName" className = "form-control"
                                     value ={this.state.shortName} onChange = {this.changeShortNameHendler}/>
                                 </div>
                                 <div className = "form-group">
                                     <label>Discription:</label>
                                     <input placeholder = "Discription" name = "discription" className = "form-control"
                                     value ={this.state.discription} onChange = {this.changeDiscriptionHendler}/>
                                 </div>
                                 <button className = "btn btn-success" onClick = {this.updateProject}>Save</button>
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

export default UpdateProjectComponent;