import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion } from "react-bootstrap";
//import CustomToggle from "../common/element/Toggle";
import CustomToggle from "../common/element/Toogle/Toggle";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Accordion className='navbar-accordion'>
                <CustomToggle className='navbar-accordion-header' eventKey='0'>
                    Ресторан
                </CustomToggle>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className={'navbar-accordion-header-item'} to='/news'>Новости</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className={'navbar-accordion-header-item'} to='/menu'>Меню</NavLink>
                </Accordion.Collapse>
                {/*
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/bar'>Бар</NavLink>
                </Accordion.Collapse>
                */}
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item'
                             to='/employees'>Сотрудники</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item'
                             to='/vacancies'>Вакансии</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item'
                             to='/contacts'>Контакты</NavLink>
                </Accordion.Collapse>

                <CustomToggle className='navbar-accordion-header' eventKey='1'>
                    Посетители
                </CustomToggle>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/users'>Все
                        посетители</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/reviews'>Отзывы</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item'
                             to='/messages'>Сообщения</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/resume'>Резюме</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/orders'>Заявки на бронирование</NavLink>
                </Accordion.Collapse>

                <CustomToggle className='navbar-accordion-header' eventKey='2'>
                    Программа лояльности
                </CustomToggle>
                <Accordion.Collapse eventKey="2">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/promos'>Акции</NavLink>
                </Accordion.Collapse>

                <CustomToggle className='navbar-accordion-header' eventKey='3'>
                    Администраторы
                </CustomToggle>
                <Accordion.Collapse eventKey="3">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item'
                             to='/admin'>Администраторы</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="3">
                    <NavLink activeClassName='-active' className='navbar-accordion-header-item' to='/access-templates'>Шаблоны
                        доступа</NavLink>
                </Accordion.Collapse>

                <CustomToggle className='navbar-accordion-header' eventKey='4'>
                    Статистика и отчеты
                </CustomToggle>
            </Accordion>
        </nav>
    )
};

export default Navbar;

/*        <nav className={'navbar'}>
            <Accordion>
                <Accordion.Toggle as={Figure} className={'navbar-header'} variant="link" eventKey="0">
                    Ресторан
                    <img className={Classes.arrow} src={arrowDown}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/menu'>Меню</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/bar'>Бар</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <NavLink activeClassName={Classes.active} className={Classes.item}
                             to='/employees'>Сотрудники</NavLink>
                </Accordion.Collapse>

                <Accordion.Toggle as={Figure} className={Classes.header} variant="link" eventKey="1">
                    Посетители
                    <img className={Classes.arrow} src={arrowDown}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/users'>Все
                        посетители</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/reviews'>Отзывы</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName={Classes.active} className={Classes.item}
                             to='/messages'>Сообщения</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/resume'>Резюме</NavLink>
                </Accordion.Collapse>

                <Accordion.Toggle as={Figure} className={Classes.header} variant="link" eventKey="2">
                    Программа лояльности
                    <img className={Classes.arrow} src={arrowDown}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/promos'>Акции</NavLink>
                </Accordion.Collapse>

                <Accordion.Toggle as={Figure} className={Classes.header} variant="link" eventKey="3">
                    Администраторы
                    <img className={Classes.arrow} src={arrowDown}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <NavLink activeClassName={Classes.active} className={Classes.item}
                             to='/admin'>Администраторы</NavLink>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="3">
                    <NavLink activeClassName={Classes.active} className={Classes.item} to='/access-templates'>Шаблоны
                        доступа</NavLink>
                </Accordion.Collapse>
            </Accordion>
        </nav>
    )
};
*/