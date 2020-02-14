import React from 'react';
import m from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";

const Dialogs = (props) => {
    return (
        <div>
            <label className={m.caption}>Диалоги</label>
            <div className={m.dialogsWrapper}>
                <Talker/>
                <Message/>
            </div>
        </div>
    );
}

export default Dialogs;


{/*<Talker name='Тимченко Николай' linkId='3'/>*/}