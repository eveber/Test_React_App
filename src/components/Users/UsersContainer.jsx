import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, userFollowAC, userUnfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        userFollow: (userId) => {dispatch(userFollowAC(userId))},
        userUnfollow: (userId) => {dispatch(userUnfollowAC(userId))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;