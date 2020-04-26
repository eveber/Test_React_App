import React from "react";
import css from "./PageCover.module.scss";
import {Field, reduxForm} from "redux-form";
import {ValidateFormControl} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";
import {updateProfileSuccess} from "../../../redux/profile-reducer";

let maxLength50 = maxLengthCreator(50);
let maxLength300 = maxLengthCreator(300);

let ProfileDataForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="fullName">Имя:</label>
                <Field className={css.siteInput}
                       name='fullName'
                       component={ValidateFormControl}
                       validatetag='input'
                       placeholder={props.userProfile.fullName}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <label htmlFor="findWork">Поиск работы:</label>
                <Field name='lookingForAJob'
                       component='input'
                       type='checkbox'
                    //checked={props.userProfile.lookingForAJob}
                />
            </div>
            <div>
                <label htmlFor="workDescription">Интересующая работа:</label>
                <Field className={css.siteTextarea}
                       name='lookingForAJobDescription'
                       component={ValidateFormControl}
                       validatetag='textarea'
                       placeholder={props.userProfile.lookingForAJobDescription}
                       validate={[required, maxLength300]}
                />
            </div>
            <div>
                <label htmlFor="aboutMe">Обо мне:</label>
                <Field className={css.siteTextarea}
                       name='aboutMe'
                       component={ValidateFormControl}
                       validatetag='textarea'
                       placeholder={props.userProfile.aboutMe}
                       validate={[required, maxLength300]}
                />
            </div>
            {
                Object.keys(props.userProfile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <label htmlFor={key}>{key}:</label>
                            <Field className={css.siteInput}
                                   name={'contacts.' + key}
                                   component={ValidateFormControl}
                                   validatetag='input'
                                   placeholder={props.userProfile.contacts[key]}
                            />
                        </div>
                    )
                })
            }
            <div>
                <div>
                    <button>Сохранить профиль</button>
                </div>
                {
                    props.error &&
                    <div className={css.ifError}>
                        <div><b>Ошибка!</b></div>
                        <div><i>{props.error}!</i></div>
                    </div>
                }
            </div>
        </form>
    )
};

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;