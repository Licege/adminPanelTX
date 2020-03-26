import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import GlobalSettingsForm from "./Tabs/Global_Settings/GlobalSettingsForm";
import SettingsTable from "./Tabs/Common_Settings/SettingsTable";


const Settings = ( props ) => {
    const {settings, global_settings, cities, postSettings, postGlobalSettings} = props;
    console.log(settings)
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Настройки доставки
                </div>
            </div>
            <div className='page-container'>
                <Tab.Container id='page-delivery-settings-tab' defaultActiveKey='settings'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='settings'>Настройки</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='global-settings'>Общие</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='settings'>
                            <SettingsTable settings={settings} cities={cities} onSubmit={postSettings} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='global-settings'>
                            <GlobalSettingsForm initialValues={global_settings} onSubmit={postGlobalSettings} />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
};

export default Settings;