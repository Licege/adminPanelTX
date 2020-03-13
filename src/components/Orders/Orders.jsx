import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import OrdersTable from "./Tabs/OrdersTable";

const Orders = ( {orders} ) => {
    console.log(orders);
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
                            <OrdersTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey='banquet'>
                            321
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
};

export default Orders;