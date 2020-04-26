import React, {useEffect, useState} from 'react';
import css from "./PageCover.module.scss";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);

    let editModeOn = () => {
        setEditMode(true);
    }

    let editModeOff = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus)
    }

    let onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value);
    }

    //Local state sinchronization with state
    useEffect(() => {setUserStatus (props.userStatus)}, [props.userStatus]);

    return (

        <div className={css.profileStatusWrapper}>
            {!editMode &&
            <div>
                <b>Статус: </b><span onClick={editModeOn}>{props.userStatus || 'Без статуса..'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input className={css.siteInput}
                    autoFocus={true}
                       type="text"
                       value={userStatus}
                       onChange={onStatusChange}
                       onBlur={editModeOff}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatus;

