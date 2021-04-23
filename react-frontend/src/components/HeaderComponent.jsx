import React, { Component } from 'react';

class HeaderComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {

       }
   }
   
   
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div >
                        <h1 style={{marginLeft: "10px", color:'White'}}>Task Scheduler</h1>
                    </div> 
                      
                     <div style={{marginLeft: "30px"}}><a href="http://localhost:3000/projects" className="navbar-brand">Projects</a> </div>   
                     <div style={{marginLeft: "30px"}}><a href="http://localhost:3000/employees" className="navbar-brand">Employees</a> </div>   
                     <div style={{marginLeft: "30px"}}><a href="http://localhost:3000/tasks" className="navbar-brand">Tasks</a> </div>   

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;