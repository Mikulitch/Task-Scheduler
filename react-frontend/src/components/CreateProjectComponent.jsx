import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';


class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            projects: [] ,
              
                fullName: '',
                shortName:'',
                discription:''
        }
        this.changeFullNameHendler = this.changeFullNameHendler.bind(this);
        this.changeShortNameHendler = this.changeShortNameHendler.bind(this);
        this.changeDiscriptionHendler = this.changeDiscriptionHendler.bind(this);
         this.saveProject = this.saveProject.bind(this);
    }

   
    componentDidMount() {
        ProjectService.getProjects().then((res) => {
            this.setState({projects: res.data});
        });
    }
    saveProject = (e) =>{
        e.preventDefault();
        let project = {fullName: this.state.fullName, shortName: this.state.shortName,
        discription: this.state.discription};
        console.log('project =>'+JSON.stringify(project));

        ProjectService.createProject(project).then(res=>{
            this.props.history.push('/projects')// after success add return to projects page
        });
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
                         <h1 className = "text-center">Add Project</h1> 
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
                                 <button className = "btn btn-success" onClick = {this.saveProject}>Save</button>
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

export default CreateProjectComponent;