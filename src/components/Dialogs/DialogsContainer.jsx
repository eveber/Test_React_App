import React from 'react';
import {addMessageActionCreator, updateTextAreaMessageActionCreator} from "../../redux/dialog-reducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState();

                //Actions
                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (messageText) => {
                    store.dispatch(updateTextAreaMessageActionCreator(messageText));
                }

                return <Dialogs dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                sendMessage={sendMessage}
                                onMessageChange={onMessageChange}
                                newMessageText={state.dialogsPage.newMessageText}/>;
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;

