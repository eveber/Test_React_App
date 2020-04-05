import React from 'react';
import {
    addMessage
} from "../../redux/dialog-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// class DialogsContainer extends React.Component {
//
//     render() {
//         return (
//            <Dialogs {...this.props} />
//         )
//     }
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export default compose (
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);

