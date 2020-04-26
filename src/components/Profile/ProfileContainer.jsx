import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, saveAvatar, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            // if(!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     //saveAvatar={this.props.saveAvatar}
            />
        );
    }
};

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveAvatar, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);