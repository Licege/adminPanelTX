import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MenuContainer from './containers/Menu/Menu'
import UsersContainer from './containers/Users/Users'
import EmployeesContainer from './containers/Employees/Employees'
import Resume from './components/Resume/Resume'
import UserContainer from './containers/Users/UserEdit'
import ContainerPromos from './containers/Promos/Promos'
import VacanciesContainer from './containers/Vacancies/Vacancies'
import NewsContainer from './containers/News/News'
import EmployeeContainer from './containers/Employees/EmployeeEdit'
import CreateEmployee from './containers/Employees/EmployeeNew'
import CreateVacancy from './containers/Vacancies/CreateVacancy'
import EditVacancy from './containers/Vacancies/EditVacancy'
import ContactsContainer from './containers/Contacts/Contacts'
import CreateDishContainer from './containers/Menu/CreateDish'
import EditDishContainer from './containers/Menu/EditDish'
import HomeContainer from './containers/Home/Home'
import OrdersContainer from './containers/Orders/Orders'
import DetailNewsContainer from './containers/News/NewsEdit'
import CreateNewsContainer from './containers/News/CreateNews'
import MessagesContainer from './containers/Messages/Messages'
import SettingsDelivery from './containers/Delivery/Settings/Settings'
import SettingsDeliveryCommonNew from './containers/Delivery/Settings/SettingsCommonNew'
import SettingsDeliveryCommonEdit from './containers/Delivery/Settings/SettingsCommonEdit'
import DeliveryContainer from './containers/Delivery/Delivery'
import DeliveryInfoContainer from './containers/Delivery/DeliveryInfo'
import AuthContainer from './containers/Auth/AuthContainer'
import AdminContainer from './containers/Admin/AdminContainer'
import PromosNewContainer from './containers/Promos/PromosNew'
import CategoriesContainer from './containers/Categories/CategoriesContainer'
import CreateCategory from './containers/Categories/CreateCategory'
import EditCategory from './containers/Categories/EditCategory'
import ReviewsContainer from './containers/Reviews/Reviews'
import HallsContainer from './containers/Halls/HallsContainer'
import PromosEdit from './containers/Promos/PromosEdit'
import AverageChecksContainer from './containers/Statistics/AverageChecksContainer'
import LeftoversContainer from './containers/Storage/LeftoversContainer'
import ErrorBoundary from './containers/Error/ErrorBoundary'
import CatchErrors from './pages/Errors/CatchErrors';

function App() {
    let token = useSelector(state => state.auth.accessToken)
    let isAuthenticated = !!token

    if (!isAuthenticated) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={AuthContainer}/>
                    <Redirect to='/login'/>
                </Switch>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <CatchErrors>
                        <Switch>
                            <Route exact path='/' component={HomeContainer}/>

                            {/*Админ*/}
                            <Route exact path='/admin' component={AdminContainer}/>

                            {/*Меню*/}
                            <Route exact path='/menu' component={MenuContainer}/>
                            <Route exact path='/menu/new' component={CreateDishContainer}/>
                            <Route exact path='/menu/edit/:id' component={EditDishContainer}/>
                            <Route exact path='/categories' component={CategoriesContainer}/>
                            <Route exact path='/categories/new' component={CreateCategory}/>
                            <Route exact path='/categories/edit/:id' component={EditCategory}/>

                            {/*Пользователи*/}
                            <Route exact path='/users' component={UsersContainer}/>
                            <Route exact path='/users/:id' component={UserContainer}/>

                            {/*Сотрудники*/}
                            <Route exact path='/employees' component={EmployeesContainer}/>
                            <Route exact path='/employees/edit/:id' component={EmployeeContainer}/>
                            <Route exact path='/employees/new' component={CreateEmployee}/>

                            {/*Резюме*/}
                            <Route exact path='/resume' component={Resume}/>

                            {/*Вакансии*/}
                            <Route exact path='/vacancies' component={VacanciesContainer}/>
                            <Route exact path='/vacancies/edit/:id' component={EditVacancy}/>
                            <Route exact path='/vacancies/new' component={CreateVacancy}/>

                            {/*Новости*/}
                            <Route exact path='/news' component={NewsContainer}/>
                            <Route exact path='/news/edit/:id' component={DetailNewsContainer}/>
                            <Route exact path='/news/new' component={CreateNewsContainer}/>

                            {/*Доставка*/}
                            <Route exact path='/delivery' component={DeliveryContainer}/>
                            <Route exact path='/delivery/:id' component={DeliveryInfoContainer}/>
                            <Route exact path='/delivery-settings' component={SettingsDelivery}/>
                            <Route exact path='/delivery-settings/new' component={SettingsDeliveryCommonNew}/>
                            <Route exact path='/delivery-settings/edit/:id' component={SettingsDeliveryCommonEdit}/>

                            {/*Акции*/}
                            <Route exact path='/promos' component={ContainerPromos}/>
                            <Route exact path='/promos/new' component={PromosNewContainer}/>
                            <Route exact path='/promos/edit/:id' component={PromosEdit}/>

                            {/*Отзывы*/}
                            <Route exact path='/reviews' component={ReviewsContainer}/>

                            {/*Банкетный зал*/}
                            <Route exact path='/halls' component={HallsContainer}/>

                            {/*Склад*/}
                            <Route exact path='/leftovers' component={LeftoversContainer}/>

                            {/*Статистика и отчеты*/}
                            <Route exact path='/average_check' component={AverageChecksContainer}/>

                            <Route exact path='/messages' component={MessagesContainer}/>
                            <Route exact path='/contacts' component={ContactsContainer}/>
                            <Route exact path='/orders' component={OrdersContainer}/>

                            <Redirect to='/'/>
                        </Switch>
                    </CatchErrors>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
