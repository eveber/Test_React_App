import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '10' //Тут будет НАШ ЛИЧНЫЙ id, пока временный
        };
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        );
    }


}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
});

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter);