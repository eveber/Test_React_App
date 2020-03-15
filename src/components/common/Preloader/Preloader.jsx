import React from "react";
import css from './Preloader.module.scss';
import preloader from '../../../Assets/images/preloader2.svg'


let Preloader = () => {
    return (
        <div className={css.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;