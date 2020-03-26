import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import OrdersTable from "./Tabs/OrdersTable";
import OrdersBanquet from "./Tabs/OrdersBanquet";

const Orders = ( {orders} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Заявки на бронирование столов
                </div>
            </div>
            <div className='page-container'>
                <Tab.Container id='page-orders-tab' defaultActiveKey='table'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='table'>Заказы столов</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='banquet'>Заказы банкетов</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='table'>
                            <OrdersTable ordersTable={orders} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='banquet'>
                            <OrdersBanquet ordersBanquet={orders} />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
};

export default Orders;