import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MenuContainer from './containers/Menu/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./containers/Users/Users";
import EmployeesContainer from "./containers/Employees/Employees";
import Resume from "./components/Resume/Resume";
import UserContainer from "./containers/Users/UserEdit";
import ContainerPromos from "./containers/Promos/Promos";
import VacanciesContainer from "./containers/Vacancies/Vacancies";
import NewsContainer from "./containers/News/News";
import EmployeeContainer from "./containers/Employees/EmployeeEdit";
import CreateEmployee from "./containers/Employees/EmployeeNew";
import CreateVacancy from "./containers/Vacancies/CreateVacancy";
import ContactsContainer from "./containers/Contacts/Contacts";
import CreateDishContainer from "./containers/Menu/CreateDish";
import HomeContainer from "./containers/Home/Home";
import OrdersContainer from "./containers/Orders/Orders";
import DetailNewsContainer from "./containers/News/NewsEdit";
import CreateNewsContainer from "./containers/News/CreateNews";
import MessagesContainer from "./containers/Messages/Messages";
import SettingsDelivery from "./containers/Delivery/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' component={HomeContainer} />

                    {/*Меню*/}
                    <Route exact path='/menu' component={MenuContainer}/>
                    <Route exact path='/menu/new' component={CreateDishContainer} />

                    {/*Пользователи*/}
                    <Route exact path='/users' component={UsersContainer}/>
                    <Route exact path='/users/:id' component={UserContainer} />

                    {/*Сотрудники*/}
                    <Route exact path='/employees' component={EmployeesContainer}/>
                    <Route exact path='/employees/edit/:id' component={EmployeeContainer}/>
                    <Route exact path='/employees/new' component={CreateEmployee}/>

                    {/*Резюме*/}
                    <Route exact path='/resume' component={Resume}/>

                    {/*Вакансии*/}
                    <Route exact path='/vacancies' component={VacanciesContainer}/>
                    <Route exact path='/vacancies/edit/:id' component={VacanciesContainer}/>
                    <Route exact path='/vacancies/new' component={CreateVacancy}/>

                    {/*Новости*/}
                    <Route exact path='/news' component={NewsContainer}/>
                    <Route exact path='/news/edit/:id' component={DetailNewsContainer} />
                    <Route exact path='/news/new' component={CreateNewsContainer} />

                    {/*Доставка*/}
                    <Route exact path='/delivery-settings' component={SettingsDelivery} />

                    <Route exact path='/messages' component={MessagesContainer}/>
                    <Route exact path='/promos' component={ContainerPromos}/>
                    <Route exact path='/contacts' component={ContactsContainer} />
                    <Route exact path='/orders' component={OrdersContainer} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
