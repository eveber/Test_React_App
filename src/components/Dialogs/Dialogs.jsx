import React from 'react';
import css from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";

const Dialogs = (props) => {

    let dialog = props.state.dialogs.map((d) => <Talker id={d.id} name={d.talkerName} linkId={d.linkId} />);
    let message = props.state.messages.map((m) => <Message id={m.id} message={m.message} />);

    return (
        <div>
            <label className={css.caption}>Диалоги</label>
            <div className={css.dialogsWrapper}>
                <div className={css.talkers}>
                    {dialog}
                </div>

                <div className={css.messages}>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

