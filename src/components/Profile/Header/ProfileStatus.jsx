import React, {useState} from 'react';
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

    return (

        <div className={css.profileStatus}>
            {!editMode &&
            <div>
                <span onClick={editModeOn}>{props.userStatus || 'No status...'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
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

