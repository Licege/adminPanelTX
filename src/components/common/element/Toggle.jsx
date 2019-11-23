import React, {useState} from 'react';
import {Figure, useAccordionToggle} from "react-bootstrap";
import arrowDown from "../../../static/img/menu-arrow-down.png";
import arrowUp from "../../../static/img/menu-arrow-up.png";

const CustomToggle = ({children, eventKey}) => {
    let [active, setActive] = useState(false);

    const changeArrow = useAccordionToggle(eventKey, () =>
        setActive(!active)
    );

    return (
        <Figure
            className='navbar-accordion-header'
            variant="link"
            eventkey={eventKey}
            onClick={changeArrow}
        >
            {children}
            {active
                ? <img className='navbar-accordion-header-arrow' src={arrowUp} />
                : <img className='navbar-accordion-header-arrow' src={arrowDown} />}
        </Figure>
    )
};

export default CustomToggle;