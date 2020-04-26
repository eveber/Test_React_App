import React from "react";
import {Field, reduxForm} from "redux-form";
import css from './Login.module.scss';
import {ValidateFormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {
                props.error &&
                <div className={css.ifError}>
                    <div><b>Ошибка входа!</b></div>
                    <div><i>{props.error}!</i></div>
                </div>
            }
            <div>
                <Field className={css.siteInput}
                       name='email'
                       playsholder='Email'
                       component={ValidateFormControl}
                       validatetag='input'
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field className={css.siteInput}
                       name='password'
                       type='password'
                       playsholder='Password'
                       component={ValidateFormControl}
                       validatetag='input'
                       validate={[required, maxLength50]}
                />
            </div>
            <div className={css.checkBoxWrapp}>
                <Field className={css.chbxRememberMe}
                       name='rememberMe'
                       component='input'
                       type='checkbox'
                />
                <label htmlFor='rememberMe'>Запомнить меня</label>
            </div>
            <div>
                <button className={css.siteButton}>Login</button>
            </div>
            {
                props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl} alt=""/>
                    <Field className={css.siteInput}
                           name='captcha'
                           playsholder='captcha'
                           component={ValidateFormControl}
                           validatetag='input'
                           validate={[required, maxLength50]}
                    />
                </div>
            }
        </form>
    )
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onLogin = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Redirect to='/Profile'/>

    return (
        <div className={css.loginWrapper}>
            <h1>Login Page</h1>
            <LoginFormRedux onSubmit={onLogin} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, {login})(Login);