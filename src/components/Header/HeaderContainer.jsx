import React from "react";
import Header from "./Header";
import {setUserData, setUserProfileData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {auth, getProfile} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        //Авторизация
        auth().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);
            }
            let userId = data.data.id;
            //Запрос профиля
            getProfile(userId).then((data) => {
                let {fullName, photos} = data;
                this.props.setUserProfileData(fullName, photos.small);
            });
        });

    }

    render() {
        return <Header {...this.props} />
    }

};


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        userFullName: state.auth.userFullNAme,
        userSmallPhoto: state.auth.userSmallPhoto
    }
}

export default connect(mapStateToProps, {setUserData, setUserProfileData})(HeaderContainer);