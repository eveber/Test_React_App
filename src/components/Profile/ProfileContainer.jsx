import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let apiString = 'https://social-network.samuraijs.com/api/1.0/profile/';
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '10' //Тут будет наш id
        }
        ;
        axios.get(`${apiString} ${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        );
    }


}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile
});

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);