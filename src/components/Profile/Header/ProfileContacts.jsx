import css from "./PageCover.module.scss";
import React from "react";

let ProfileContacts = ({contactTitle, contactValue}) => {
    return (
        <div className={css.contactsWrapper}>
            <div><b><i>{contactTitle}</i></b>: <i>{contactValue}</i></div>
        </div>
    )
}
export default ProfileContacts;