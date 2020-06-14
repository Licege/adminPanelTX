import React from 'react'
import {Nav, Tab, TabContainer} from "react-bootstrap";
import ApprovedReviews from "./Tabs/ApprovedReviews";
import WaitingReviews from "./Tabs/WaitingReviews";
import DisapprovedReviews from "./Tabs/DisaprrovedReviews";

const Reviews = ( {waitingReviews, approvedReviews, disapprovedReviews} ) => {
    return (
        <div className='page'>
            <div className='page-header'>
                <div className='page-header-title'>Отзывы</div>
            </div>
            <div className='page-container'>
                <TabContainer id='page-reviews-tab' defaultActiveKey='approved'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='approved'>Одобренные</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='waiting'>Новые</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='disapproved'>Отклоненные</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='waiting'>
                            <WaitingReviews reviews={waitingReviews} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='approved'>
                            <ApprovedReviews reviews={approvedReviews} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='disapproved'>
                            <DisapprovedReviews reviews={disapprovedReviews} />
                        </Tab.Pane>
                    </Tab.Content>
                </TabContainer>
            </div>
        </div>
    )
}

export default Reviews;