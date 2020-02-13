import React from 'react';
import m from './Dialogs.module.scss'
import messageAvatar from '../images/post_avatar.jpg'

const Dialogs = (props) => {
  return (
    <div>
      <label className={m.caption}>Диалоги</label>
      <div className={m.dialogsWrapper}>
        <div className={m.dialogs}>
          <div className={m.dialog}>
            Петя
          </div>
          <div className={m.dialog}>
            Коля
          </div>
        </div>

        <div className={m.messages}>
          <div className={m.message}>
            <img src={messageAvatar} alt="" />
            <p className={m.figure}>Yo man! How are You?</p>
          </div>
          <div className={m.message}>
            <img src={messageAvatar} alt="" />
            <p className={m.figure}>Hey! I'm fine!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;