import React from 'react';
import css from './Settings.module.scss'
import sn_model from '../../Assets/images/sn-model.png';

const Settings = (props) => {
    return (
      <div className={css.settingsWrapper}>
          Настройки. Схема соц сети:
          <img src={sn_model} alt=""/>
      </div>
    );
}

export default Settings;