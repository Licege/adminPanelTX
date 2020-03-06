import React from 'react';
import Contacts from "./Contacts";
import {getContacts, updateContacts} from "../../redux/contacts-reducer";
import {connect} from "react-redux";

class ContactsContainer extends React.Component {
    componentDidMount() {
        this.props.getContacts();
    }

    updateContacts = (contacts) => {
        this.props.updateContacts(contacts)
    };

    cancel = () => {
        console.log("Скинуть изменения")
    };

    render() {
        return (
            <Contacts initialValues={this.props.contacts}
                      contacts={this.props.contacts}
                      onSubmit={this.updateContacts}
                      cancel={this.cancel} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => {
            dispatch(getContacts())
        },
        updateContacts: (contacts) => {
            dispatch(updateContacts(contacts))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ContactsContainer);