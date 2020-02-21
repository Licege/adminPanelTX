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
import ContainerPromos from "./components/Promos/ContainerPromos";
import VacanciesContainer from "./components/Vacancies/VacanciesContainer";
import NewsContainer from "./components/News/NewsContainer";
import EmployeeContainer from "./components/Employees/id/EmployeeContainer";
import CreateEmployee from "./components/Employees/new/EmployeeContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*Меню*/}
                    <Route exact path='/menu' component={MenuContainer}/>

                    {/*Пользователи*/}
                    <Route exact path='/users' component={UsersContainer}/>
                    <Route exact path='/user/:id' component={UserContainer} />

                    {/*Сотрудники*/}
                    <Route exact path='/employees' component={EmployeesContainer}/>
                    <Route exact path='/employees/edit/:id' component={EmployeeContainer}/>
                    <Route exact path='/employees/new' component={CreateEmployee}/>


                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/vacancies' component={VacanciesContainer}/>
                    <Route exact path='/messages' component={Messages}/>
                    <Route exact path='/promos' component={ContainerPromos}/>
                    <Route exact path='/news' component={NewsContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
