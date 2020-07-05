import React from 'react'
import {Nav, Tab, TabContainer} from "react-bootstrap";
import ApprovedReviews from "./Tabs/ApprovedReviews";
import WaitingReviews from "./Tabs/WaitingReviews";
import DisapprovedReviews from "./Tabs/DisaprrovedReviews";
import {Page} from "../common/Page";

const Reviews = ({waitingReviews, approvedReviews, disapprovedReviews}) => {
    return (
        <Page title='Отзывы'>
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
                        <WaitingReviews reviews={waitingReviews}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey='approved'>
                        <ApprovedReviews reviews={approvedReviews}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey='disapproved'>
                        <DisapprovedReviews reviews={disapprovedReviews}/>
                    </Tab.Pane>
                </Tab.Content>
            </TabContainer>
        </Page>
    )
}

export default Reviews;
