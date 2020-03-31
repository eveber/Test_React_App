import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '6374' //Тут будет НАШ ЛИЧНЫЙ id, a пока временный
        };
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        //console.log(this.props)
        return (
            <Profile {...this.props} />
        );
    }
};


let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus
});

export default compose (
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);