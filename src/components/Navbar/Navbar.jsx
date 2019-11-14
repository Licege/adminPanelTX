import React from 'react';
import Classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {Accordion, Card, Figure, useAccordionToggle} from "react-bootstrap";
import arrowDown from './../../static/img/menu-arrow-down.png';
import arrowUp from './../../static/img/menu-arrow-up.png';

function CustomToggle({children, eventKey}) {
    let activ = false
    const changeArrow = useAccordionToggle(eventKey, () =>
            console.log(eventKey),
        activ = !activ
    );

    return (
        <Card.Header
            variant="link"
            onClick={changeArrow}
        >
            {children}
        </Card.Header>
    )
}

const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <Accordion>
                <Accordion.Toggle as={Figure} className={Classes.header} variant="link" eventKey="0">
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

export default Navbar;