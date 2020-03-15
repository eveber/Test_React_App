import React from 'react';
import {
    addMessage, updateTextAreaMessage
} from "../../redux/dialog-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateTextAreaMessage
})(Dialogs);

export default DialogsContainer;

