import React from 'react';
import Friendsbar from "../Friendsbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friends: state.friendsBar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsbarContainer = connect (mapStateToProps, mapDispatchToProps)(Friendsbar);

export default FriendsbarContainer;