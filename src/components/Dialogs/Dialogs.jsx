import React from 'react';
import css from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {ValidateFormControl} from "../common/FormsControls/FormsControls";

let maxLength1000 = maxLengthCreator(1000);

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.sendControls}>
            <Field className={css.siteTextarea}
                   validate={[required, maxLength1000]}
                   name='messageText'
                   component={ValidateFormControl}
                   validateTag='textarea'
                   placeholder='Ваше сообщение...'
            />
            <div className={css.buttonWrapp}>
                <button className={css.siteButton}>Send</button>
            </div>
        </form>
    )
}

const DialogFormRedux = reduxForm({form: 'addMessage'})(DialogForm);

const Dialogs = (props) => {

    let talker = props.dialogs.map((t) => <Talker id={t.id} name={t.talkerName} linkId={t.linkId} key={t.id}/>);
    let message = props.messages.map((m) => <Message id={m.id} message={m.message} key={m.id}/>);

    let addNewMessage = (formData) => {
        props.addMessage(formData.messageText);
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
                    <DialogFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

