import React from 'react';
import m from './Dialogs.module.scss';
import Message from "./Messages/Message";
import Talker from "./Talkers/Talker";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, talkerName: 'Тимченко Николай'},
        {id: 2, talkerName: 'Клименко Валентин'},
        {id: 3, talkerName: 'Кузнецов Андрей'},
        {id: 4, talkerName: 'Порошенко Пётр'},
        {id: 5, talkerName: 'Прокопенко Авдотья'}
    ];

    let messagesData = [
        {id: 1, message: 'Превед!'},
        {id: 1, message: 'Как дела?'},
        {id: 1, message: 'Пока!'}
    ];

    return (
        <div>
            <label className={m.caption}>Диалоги</label>
            <div className={m.dialogsWrapper}>
                <div className={m.talkers}>
                    <Talker id={dialogsData[0].id} name={dialogsData[0].talkerName} linkId='1'/>
                    <Talker id={dialogsData[1].id} name={dialogsData[1].talkerName} linkId='2'/>
                    <Talker id={dialogsData[2].id} name={dialogsData[2].talkerName} linkId='3'/>
                    <Talker id={dialogsData[3].id} name={dialogsData[3].talkerName} linkId='4'/>
                    <Talker id={dialogsData[4].id} name={dialogsData[4].talkerName} linkId='5'/>
                </div>

                <div className={m.messages}>
                    <Message id={messagesData[0].id} message={messagesData[0].message} />
                    <Message id={messagesData[1].id} message={messagesData[1].message} />
                    <Message id={messagesData[2].id} message={messagesData[2].message} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

