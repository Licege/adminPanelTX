import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import GlobalSettingsForm from './Tabs/Global_Settings/GlobalSettingsForm'
import SettingsTable from './Tabs/Common_Settings/SettingsTable'
import Button from 'react-bootstrap/Button'
import {PageHeader} from '../../../styledComponents/components'


const Settings = (props) => {
    const { settings, globalSettings, createSettings, editSettings, postGlobalSettings } = props

    return (
        <div>
            <PageHeader title='Настройки доставки'>
                <Button variant='primary' onClick={createSettings}>Добавить новый пункт доставки</Button>
            </PageHeader>
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
                            <SettingsTable settings={settings} editSettings={editSettings}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='global-settings'>
                            <GlobalSettingsForm initialValues={globalSettings} onSubmit={postGlobalSettings}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Settings
