import React from "react";
import Header from "./Header";
import {getAuthData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        //Авторизация
        this.props.getAuthData();
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
        userFullName: state.auth.userFullName,
        userSmallPhoto: state.auth.userSmallPhoto
    }
}

export default connect(mapStateToProps, {getAuthData, logout})(HeaderContainer);