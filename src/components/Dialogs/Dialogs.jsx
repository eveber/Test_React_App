import React from 'react';
import css from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";

const Dialogs = (props) => {

    let talker = props.dialogsPage.dialogs.map((t) => <Talker id={t.id} name={t.talkerName} linkId={t.linkId}/>);
    let message = props.dialogsPage.messages.map((m) => <Message id={m.id} message={m.message}/>);

    let messageTextEl = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        props.updateTextAreaMessage(messageTextEl.current.value);
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
                        <textarea ref={messageTextEl} className={css.siteTextarea}
                                  value={props.dialogsPage.newMessageText}
                                  placeholder='Ваше сообщение...'
                                  onChange={onMessageChange}/>
                        <div className={css.buttonWrapp}>
                            <button className={css.siteButton} onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

