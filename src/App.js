import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MenuContainer from './components/Menu/MenuContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import Resume from "./components/Resume/Resume";
import Messages from "./components/Messages/Messages";
import UserContainer from "./components/Users/id/UserContainer";
import Vacancies from "./components/Vacancies/Vacancies";
import ContainerPromos from "./components/Promos/ContainerPromos";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/menu' component={MenuContainer}/>
                    <Route exact path='/users' component={UsersContainer}/>
                    <Route exact path='/user/:id' component={UserContainer} />
                    <Route exact path='/employees' component={EmployeesContainer}/>
                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/vacancies' component={Vacancies}/>
                    <Route exact path='/messages' component={Messages}/>
                    <Route exact path='/promos' component={ContainerPromos}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
