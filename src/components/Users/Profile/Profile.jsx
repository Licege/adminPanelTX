import React, {useState} from 'react';
import UserEditForm from "../id/UserEditForm";
import User from "../id/User";

const Profile = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props) {
        console.log('Прелоадер в Profile')
    }

    const onSubmit = (formData) => {
        setEditMode(false);
    };

    return (
        <>
            {editMode
                ? <UserEditForm initialValues={props.user} profile={props.user} onSubmit={onSubmit}/>
                : <User user={props.user} goEditMode={() => {setEditMode(true)}}/>}
        </>
    )
};

export default Profile;