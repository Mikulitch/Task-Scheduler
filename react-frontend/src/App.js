
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTaskComponent from './components/ListTaskComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ListProjectComponent from './components/ListProjectComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import UpdateProjectComponent from './components/UpdateProjectComponent';
import UpdateTaskComponent from './components/UpdateTaskComponent';



function App() {
  return (
    <div>
  <Router>
      
          <HeaderComponent/>
          <div className="conteiner">
            <Switch> 
            <Route path = "/projects" exact component = {ListProjectComponent}></Route>
            <Route path = "/tasks" component = {ListTaskComponent}></Route>
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
            <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
            <Route path = "/add-project" component = {CreateProjectComponent}></Route>
            <Route path = "/add-task" component = {CreateTaskComponent}></Route>
            <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
            <Route path = "/update-project/:id" component = {UpdateProjectComponent}></Route>
            <Route path = "/update-task/:id" component = {UpdateTaskComponent}></Route>
                <ListProjectComponent/>
               <ListTaskComponent/>
               <ListEmployeeComponent/>
            
           </Switch>
            </div>
          <FooterComponent/>
       
      </Router>
    </div>
  );
}
 
export default App;
