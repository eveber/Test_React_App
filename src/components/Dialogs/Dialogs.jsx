import React from 'react';
import css from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";

const Dialogs = (props) => {

    let talker = props.dialogs.map((t) => <Talker id={t.id} name={t.talkerName} linkId={t.linkId} key={t.id}/>);
    let message = props.messages.map((m) => <Message id={m.id} message={m.message} key={m.id}/>);

    //Actions
    let onSendMessage = () => {
        props.onSendMessage();
    };

    let onMessageChange = (e) => {
        let messageText = e.target.value;
        props.onMessageChange(messageText);
    }

    return (
        <div>
            <label className={css.caption}>Диалоги</label>
            <div className={css.dialogsWrapper}>
                <div className={css.talkers}>
                    {talker}
                </div>

                <div className={css.messages}>
                    {message}
                    <div className={css.sendControls}>
                        <textarea className={css.siteTextarea}
                                  value={props.newMessageText}
                                  placeholder='Ваше сообщение...'
                                  onChange={onMessageChange}/>
                        <div className={css.buttonWrapp}>
                            <button className={css.siteButton} onClick={onSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

